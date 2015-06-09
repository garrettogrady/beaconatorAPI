/**
 * Created by kidtronnix on 20/05/14.
 */

 // Packages for validation
var Joi = require('joi');

// Internal config stuff
var CRUD = {
  collection: 'events',
  create: {
    bcrypt: 'password',
    date: 'created',
    payload: Joi.object().keys({
      email: Joi.string().required(),
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
    bcrypt: 'password',
    date: 'updated',
    payload: Joi.object().keys({
      password: Joi.string(),
      fname: Joi.string(),
      lname: Joi.string(),
      activated: Joi.boolean(),
      access: Joi.string(),
      guiToken: [Joi.string(), Joi.boolean()],
      forgotToken: [Joi.string(), Joi.boolean()]
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

  var apiGenKey = function(request, next) {
    var generate = function(length) {
      // Just produces random string using these chars
      var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var result = '';
      for (var i = length; i > 0; --i) {
        result += chars[Math.round(Math.random() * (chars.length - 1))];
      }
      return result;
    };

    var apiKey = generate(64);

    // Add to payload and return
    request.payload.apiToken = apiKey;
    next(apiKey);
  };

  // Create
  server.route({
    path: '/api/event',
    method: 'POST',
    config: {
      auth: 'core',
      cors: true,
      pre: [
        { method: apiGenKey, assign: 'apiGenKey' }
      ],
      handler: Event.create
    }
  });

  // Get ind.
  server.route({
    path: '/api/event/{id}',
    method: 'GET',
    config: {
      auth: 'core',
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
      auth: 'core',
      cors: true,
      handler: Event.find
    }
  });

  // Update
  server.route({
    path: '/api/event/{id}',
    method: 'PUT',
    config: {
      auth: 'core',
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
      auth: 'core',
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
