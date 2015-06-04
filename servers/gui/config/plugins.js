module.exports = function(server, config) {

  // DB Connection
  var MongoDB = require('mongodb').Db;
  var Server = require('mongodb').Server;
  var mongoServer = new Server(config.db.host, config.db.port, {'auto_reconnect': true});
  var db = new MongoDB(config.db.name, mongoServer, {w: 1});
  var connected = false;

  db.open(function(e, d) {
    if (e) {
      console.log(e);
    } else if (config.db.un && config.db.pw) {
      db.authenticate(config.db.un, config.db.pw, function(err, result){
        if (err) {
          console.log(err);
        } else {
          connected = true;
        }
      });
    } else {
      connected = true;
    }
    if (connected) {
      console.log('connected to database :: '+config.db.name);
    }
  });

  server.register(require('hapi-auth-cookie'), function(err) {
    if (err) {
      throw err;
    }

    // Define auth strategy
    server.auth.strategy('session', 'cookie', {
      password: 'secret',
      cookie: 'sid-example',
      redirectTo: '/login',
      isSecure: false
    });
  });

  // Options to pass into the 'Good' plugin
  var goodOptions = {
    // TODO: cf. https://github.com/hapijs/good
  };

  // The Assets Configuaration Options
  var assetOptions = require('../../../assets');

  // Register plugins
  server.register([

    // TODO: RE-ENABLE THIS?
    // {
    //   register: require('good'),
    //   options: goodOptions
    // },
    {
      register: require('hapi-assets'),
      options: assetOptions
    },
    {
      register: require('hapi-named-routes')
    },
    {
      register: require('hapi-cache-buster')
    },
    {
      register: require('../auth'),
      options: {
        db: db,
        email: config.email,
        apiIP: config.api.host + ':' + config.api.port,
        app: config.app,
        coreCreds: config.coreCreds
      }
    },
    {
      register: require('../socketIO')
    }

  ], function(err) {
    if (err) {
      throw err;
    }
  });
};
