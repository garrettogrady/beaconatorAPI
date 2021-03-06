var Hapi = require('hapi');
var MongoDB = require('mongodb').Db;
var Server = require('mongodb').Server;
var objectId = require('mongodb').ObjectID;

var config = require('../../config');

// API SERVER
var apiServer = new Hapi.Server();
var connected = false;

var mongoServer = new Server(config.db.host, config.db.port, {
  'auto_reconnect': true
});
var db = new MongoDB(config.db.name, mongoServer, {
  w: 1
});

apiServer.connection({
  host: config.api.host,
  port: config.api.port,
});

db.open(function(err, d) {
  var date = new Date().toString();
  date = date.split(/\s+/).slice(0, 5).join(' ');
  var cb = function(connected) {
    var pre = connected ? '' : ' NOT';
    console.log(pre + 'connected to database :: ' + config.db.name + ' at ' + date);
  };

  if (err) {
    console.log(err);
    cb(connected);
  } else if (config.db.un && config.db.pw) {
    db.authenticate(config.db.un, config.db.pw, function(err, result) {
      if (err) {
        console.log('authentication failed :(');
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

// CORE AUTHENTICATION LOOKUP
var getCoreCredentials = function(id, callback) {
  // Core creds
  var credentials = {};
  credentials[config.coreCreds.id] = {
    key: config.coreCreds.key,
    access: 'admin',
    algorithm: 'sha256'
  };

  // Just return with core creds if supplied
  if (credentials[id] !== undefined) {
    console.log('Core auth lookup: ' + id + ' >> valid');

    return callback(null, credentials[id]);
  } else {
    console.log('Core auth lookup: ' + id + ' >> invalid');

    return callback(null, null);
  }
};

// WEB AUTHENTICATION LOOKUP
var getCredentials = function(id, callback) {
  console.log('getting web auth');
  // Core creds
  var credentials = config.coreCreds;

  // Just return with core creds if supplied
  if (credentials[id] !== undefined) {
    console.log('Web auth lookup: ' + id + ' >> valid as core');

    return callback(null, credentials[id]);
  } else {

    var collection = db
    .collection('users')
    .findOne({
      '_id': objectId(id)
    }, function(err, user) {
      if (err) {
        throw err;
      }

      var credentials = null;

      if (user) {
        console.log('Web auth lookup: ' + id + ' >> valid as ' + user.access);

        credentials = {
          key: user.apiToken,
          access: user.access,
          algorithm: 'sha256'
        };
      } else {
        console.log('Web auth lookup: ' + id + ' >> invalid');
      }

      return callback(null, credentials);
    });
  }
};

// TODO: do this some other time?
var goodOptions = {
  responsePayload: true,
  reporters: [
    {
      reporter: require('good-console'),
      events: { log: '*', response: '*' },
      config: {
        format: 'YYYYMMDD, hh:mm:ss a Z'
      }
    }
  ]
};

apiServer.register([
  {
    register: require('hapi-auth-hawk')
  },
  {
    register: require('good'),
    options: goodOptions
  }
], function(err) {
    if (err) {
      throw err;
    }

    apiServer.auth.strategy('core', 'hawk', {
      getCredentialsFunc: getCoreCredentials
    });

    apiServer.auth.strategy('web', 'hawk', {
      getCredentialsFunc: getCredentials
    });
  });

// Endpoints
apiServer.register([
  {
    register: require('./User'),
    options: {
      // passes the db connection to the plugin
      db: db
    }
  },
  {
    register: require('./Event'),
    options: {
      db: db
    }
  }
], function(err) {
  if (err) {
    throw err;
  }
});

if (!module.parent) {
  apiServer.start(function() {
    var message = 'API started at: ' + apiServer.info.uri;
    console.log(message);
  });
}

module.exports = apiServer;

