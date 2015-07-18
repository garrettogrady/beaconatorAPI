// jscs:disable disallowDanglingUnderscores
/**
 * Created by kidtronnix on 20/05/14.
 */

var Joi = require('joi');
var Extend = require('extend');

var ObjectId = require('mongodb').ObjectID;
var userEvents = {};

// Amount of time before reporting an exit
var exitDelay = 1000 * 60 * 10;

// Internal config stuff
var CRUD = {
  collection: 'events',
  create: {
    // bcrypt: 'password',
    date: 'created',
    payload: Joi.object().keys({
      // email: Joi.string().required(),
      user: Joi.object(),
      beaconId: Joi.number().integer(),
      beaconName: Joi.string(),

      // either enter or exit
      eventAction: Joi.string(),

      email: Joi.string().email(),

      // either beacon or office
      eventType: Joi.string(),
      lastBeaconId: Joi.string(),
    }),
    access: 'normal',
    defaults: {
      access: 'normal'
    },
  },
  update: {
    // bcrypt: 'password',
    date: 'updated',
    payload: Joi.object().keys({
      user: Joi.object(),
      beaconId: Joi.number().integer(),
      beaconName: Joi.string(),

      // either enter or exit
      eventAction: Joi.string(),

      email: Joi.string().email(),

      // either beacon or office
      eventType: Joi.string(),
      lastBeaconId: Joi.string(),
    })
  },
  validationOpts: {
    abortEarly: false
  }
};

exports.register = function(server, options, next) {

  // Add db to our config
  CRUD.db = options.db;

  // Require Event functions
  var Event = require('toothache')(CRUD);

  var getUser = function(request, next) {
    request.payload.email = request.payload.email.trim().toLowerCase();

    // Store user as an embedded document
    var userCollection = CRUD.db
    .collection('users');

    userCollection.findOne({
      email: request.payload.email
    }, function(err, user) {
      var date = new Date();
      var errMsg = 'No user could be found...\nTimestamp:\n' + date.toString() + '\nPayload:\n';
      errMsg += JSON.stringify(request.payload, null, 2);

      var updateAndContinue = function() {
        userCollection.update({
          '_id': user._id
        }, {
          $set: {
            location: user.location,
            locationUpdated: user.locationUpdated
          }
        }, function(err) {
          if (err) {
            throw err;
          }
        });

        request.payload.user = user;

        next(user);
      };

      if (err) {
        throw err;
      }

      if (!user) {
        throw new Error(errMsg);
      }

      user.location = request.payload.beaconName;
      user.locationUpdated = new Date();

      if (request.payload.eventAction === 'exit') {
        user.location = 'away';
        console.log('User went away. Delaying insert for ' + exitDelay + 'ms');
        userEvents[request.payload.email] = setTimeout(updateAndContinue, exitDelay);

      } else {
        if (userEvents[request.payload.email]) {
          console.log('Cancelling exit request.');
          clearTimeout(userEvents[request.payload.email]);
          userEvents[request.payload.email] = null;
        }

        updateAndContinue();
      }

    });
  };

  // Create
  server.route({
    path: '/api/event',
    method: 'POST',
    config: {
      cors: true,
      // auth: 'core',
      pre: [
        { method: getUser, assign: 'getUser' }
      ],
      handler: function(request, reply) {
        var config = CRUD;

        // **** Modified from toothache module
        if (request.auth.isAuthenticated &&
          request.auth.credentials.access !== 'admin' &&
          request.auth.credentials.access !== config.create.access) {
          var error = Boom.unauthorized('You do not have create access');

          return reply(error);
        } else {
          var validSchema = config.create.payload;

          var payload;

          if (request.method === 'get') {
            payload = request.query;
          } else {
            payload = request.payload;
          }

          // First validate schema
          // respond with errors
          Joi.validate(payload, validSchema, config.validationOpts, function(err, value) {
            if (err) {
              var error = Boom.badRequest(err);

              return reply(error);
            } else {

              // Add our defaults
              var insert = Extend({}, config.create.defaults, payload);

              // If config has date option, add a timestamp
              if (config.create.date) {
                var ts = new Date();

                if (payload.eventAction === 'exit') {
                  ts = new Date(ts.getTime() - exitDelay);
                }

                insert[config.create.date] = ts;
              }

              if (config.create.bcrypt) {
                // Hash password before insert
                insert[config.create.bcrypt] = Bcrypt.hashSync(insert[config.create.bcrypt], salt);
              }

              // Add uId if set to anything in defaults
              if (request.auth.isAuthenticated && config.create.defaults.uId !== undefined) {
                insert.uId = request.auth.artifacts.id;
              }

              // Connect to mongo
              var collection = CRUD.db.collection(config.collection);

              // Perform Insert
              collection.insertOne(insert, function(err, result) {

                return reply(result.ops[0]).type('application/json');
              });
            }
          });
        }
      }
    }
  });

  // Get ind.
  server.route({
    path: '/api/event/{id}',
    method: 'GET',
    config: {
      // auth: 'core',
      cors: true,
      handler: Event.get,
      validate: {
        params: {
          id: Joi.string().min(12)
        }
      }
    }
  });

  // Get all
  server.route({
    path: '/api/event',
    method: 'GET',
    config: {
      // auth: 'core',
      cors: true,

      handler: Event.find
    }
  });

  // Update
  server.route({
    path: '/api/event/{id}',
    method: 'PUT',
    config: {
      // auth: 'core',
      cors: true,
      handler: Event.update,
      validate: {
        params: {
          id: Joi.string().min(12)
        }
      }
    }
  });

  // Delete
  server.route({
    path: '/api/event/{id}',
    method: 'DELETE',
    config: {
      // auth: 'core',
      cors: true,
      handler: Event.del,
      validate: {
        params: {
          id: Joi.string().min(12)
        }
      }
    }
  });

  next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};
