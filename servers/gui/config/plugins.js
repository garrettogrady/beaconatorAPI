module.exports = function(server, config) {

  // DB Connection
  var MongoDB = require('mongodb').Db;
  var MongoDBServer = require('mongodb').Server;
  var mongoServer = new MongoDBServer(config.db.host, config.db.port, {'auto_reconnect': true});
  var db = new MongoDB(config.db.name, mongoServer, {w: 1});
  var connected = false;

  db.open(function(e, d) {
    var date = new Date().toString();
    date = date.split(/\s+/).slice(0, 5).join(' ');
    var cb = function(connected) {
      var pre = connected ? '' : ' NOT';
      console.log(pre + 'connected to database :: ' + config.db.name + ' at ' + date);
    };

    if (e) {
      cb(connected);
      console.log('Error');
      console.log(e);
    } else if (config.db.un && config.db.pw) {
      db.authenticate(config.db.un, config.db.pw, function(err, result) {
        if (err) {
          console.log('Error');
          console.log(err);
        } else {
          connected = true;
        }
        cb(connected);
      });
    } else {
      connected = true;
      cb(connected);
    }

  });

  // Options to pass into the 'Good' plugin
  var goodOptions = {
    reporters: [
      {
        reporter: require('good-console'),
        events: { log: '*', response: '*' },
        config: {
          format: 'YYYYMMDD, hh:mm:ss a'
        },
      }
    ]
  };

  // The Assets Configuration Options
  var assetOptions = require('../../../assets');

  // Use hapi-auth-cookie to keep logged in users logged in.
  // If not logged in, punt them to /login
  server.register(require('hapi-auth-cookie'), function(err) {
    if (err) {
      throw err;
    }

    // Define auth strategy
    server.auth.strategy('session', 'cookie', {
      password: '7TWvAWaPNhbY5lt',
      cookie: 'beacon-sid',
      redirectTo: '/login',
      isSecure: false
    });
  });

  // Register plugins
  server.register([
    {
      register: require('good'),
      options: goodOptions
    },
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
        apiIP: [config.api.host, config.api.port].join(':'),
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

  return {
    db: db
  };
};
