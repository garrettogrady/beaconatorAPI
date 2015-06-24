/**
 * Created by kidtronnix on 20/05/14.
 */

 // Packages for validation
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

      // either enter or leave
      eventAction: Joi.string(),

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

      // either enter or leave
      eventAction: Joi.string(),

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
    var email = request.payload.email;

    // We don't want to store email in events collections.
    delete request.payload.email;

    // Store user as an embedded document
    var userCollection = options.db
    .collection('users');

    userCollection.findOne({
      email: email
    }, function(err, user) {
      if (err) {
        throw err;
      }
      var action = request.payload.eventAction;
      var location = request.payload.beaconName;
      var update = false;

      if (action === 'enter') {
        update = true;
      } else if (request.payload.eventType === 'office') {
        update = true;
        location = 'away';
      }

      if (update) {
        userCollection.update({
          '_id': user._id
        }, {
          $set: {
            location: location,
            locationUpdated: new Date()
          }
        });
      }

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
