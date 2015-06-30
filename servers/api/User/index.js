/**
 * Created by kidtronnix on 20/05/14.
 */

var Hawk = require('hawk');

// Packages for validation
var Joi = require('joi');
var config = require('../../../config');

// Internal config stuff
var CRUD = {
  collection: 'users',
  create: {
    bcrypt: 'password',
    date: 'created',
    payload: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
      fname: Joi.string().required(),
      lname: Joi.string().required(),
      access: Joi.string(),
      apiToken: Joi.string().required()
    }),
    defaults: {
      access: 'normal',
      activated: false
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

  // Require User functions
  var User = require('toothache')(CRUD);

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

  var apiAuth = function apiAuth(request, next) {
    // console.log(config.coreCreds);
    var header = Hawk.client.header('/api/user', 'GET', {
      credentials: config.coreCreds
    });

    console.log(header.field);
    request.headers.Authorization = header.field;
    next(request.headers);
  };

  // Create
  server.route({
    path: '/api/user',
    method: 'POST',
    config: {
      auth: 'core',
      pre: [
        { method: apiGenKey, assign: 'apiGenKey' }
      ],
      handler: User.create
    }
  });

  // Get ind.
  server.route({
    path: '/api/user/{id}',
    method: 'GET',
    config: {
      auth: 'core',
      handler: User.get,
      validate: {
        params: {
          id: Joi.string().min(12)
        }
      }
    }
  });

  // Get all
  server.route({
    path: '/api/user',
    method: 'GET',
    config: {
      // auth: 'core',
      cors: true,
      handler: User.find,
      // pre: [
      //   { method: apiAuth, assign: 'apiAuth' }
      // ],
    },
  });

  // Update
  server.route({
    path: '/api/user/{id}',
    method: 'PUT',
    config: {
      auth: 'core',
      handler: User.update,
      validate: {
        params: {
          id: Joi.string().min(12)
        }
      }
    }
  });

  // Delete
  server.route({
    path: '/api/user/{id}',
    method: 'DELETE',
    config: {
      auth: 'core',
      handler: User.del,
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
