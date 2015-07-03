// jscs:disable disallowDanglingUnderscores
/**
 * Created by kidtronnix on 20/05/14.
 */

var Joi = require('joi');
var ObjectId = require('mongodb').ObjectID;

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
      }

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
      handler: Event.create
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
