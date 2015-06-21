var promise = require('bluebird');
var fs = promise.promisifyAll(require('fs'));
var prompt = require('prompt');


// Remove annoying 'prompt:''
prompt.message = '';
prompt.delimiter = '';

var apiGenKey = function(length) {
  // Just produces random string using these chars
  var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';
  for (var i = length; i > 0; --i) {
    result += chars[Math.round(Math.random() * (chars.length - 1))];
  }

  return result;
};




var messages = {
  app: 'Configuring Basic App Info...\n'.green,
  db: 'Configuring MongoDB Connection...\n'.green,
  api: 'Configuring API Server...\n'.green,
  gui: 'Configuring GUI Server...\n'.green,
  email: 'Configuring Email app uses...\n'.green,
};

// Define what we want entered
var schema = {
  properties: {
    appName: {
      description: messages.app + 'App Name:'.blue,
      default: 'Beaconator'
    },
    appUrl: {
      description: 'App Url:'.blue,
      default: 'http://localhost:3030',
      before: function removeLastSlash (url) {
          if (url.substring(url.length-1) === '/')
          {
              url = url.substring(0, url.length-1);
          }

          return url;
      }
    },
    apiHost: {
      description: messages.api + 'API host:'.blue,
      default: '127.0.0.1'
    },
    apiPort: {
      description: 'API port:'.blue,
      default: '3000'
    },
    apiCoreId: {
      description: 'API Core ID:'.blue,
      default: 'core'
    },
    apiCorePass: {
      description: 'API Core Password:'.blue,
      default: 'random string',
      before: function(value) {
        if(value === 'random string') {
          value = apiGenKey(64);
        }
        return value;
      }
    },
    guiHost: {
      description:  messages.gui + 'GUI host:'.blue,
      default: '0.0.0.0'
    },
    guiPort: {
      description: 'GUI port:'.blue,
      default: '3030'
    },
    dbHost: {
      description: messages.db + 'Mongo host:'.blue,
      default: '127.0.0.1'
    },
    dbPort: {
      description: 'Mongo port:'.blue,
      default: '27017'
    },
    dbName: {
      description: 'Mongo db name:'.blue,
      default: 'beacon'
    },
    dbUn: {
      description: 'Mongo db username (optional):'.blue,
      default: ''
    },
    dbPw: {
      description: 'Mongo db password (optional):'.blue,
      default: ''
    },
    mailService: {
      description: messages.email + 'Email service:'.blue,
      default: 'Mailgun'
    },
    mailEmail: {
      description: 'Email address:'.blue,
      required: true
    },
    mailPass: {
      description: 'Email password:'.blue,
      required: true,
      message: 'Password is required',
      hidden: true
    },
  }
};

var copyPm2 = function copyPm2() {
  var pm2 = {
    example: {
      path: __dirname + '/../config.pm2-example.json',
      file: 'config.pm2-example.json'
    },
    config: {
      path: __dirname + '/../config.pm2.json',
      file: 'config.pm2.json'
    },
  };
  promise.all([
    fs.statAsync(pm2.example.path),
    fs.statAsync(pm2.config.path),
  ])
  .then(function(stats) {
    // If No example file
    if (!stats[0].isFile()) {

      return false;
    }

    // If config.pm2.json already exists, do not overwrite it.
    if (stats[1].isFile()) {
      console.log('Skpping copy. The file'.yellow, pm2.config.file.cyan, 'already exists.'.yellow);
      return false;
    }
  })
  .catch(function(err) {
    if (err.path === pm2.example.path) {
      return console.log('Can\'t copy file.' + pm2.example.file + 'does not exist'.red);
    }

    fs.readFileAsync(pm2.example.path, {encoding: 'utf8'})
    .then(function(content) {
      return fs.writeFileAsync(pm2.config.path, content);
    })
    .then(function() {
      console.log('Copied'.green, pm2.example.file.cyan, 'to'.green, pm2.config.file.cyan);
    });

  });
};


//
// Start the prompt
//
prompt.start();


prompt.get(schema, function (err, result) {
  if (err) {
    console.log('prompt error');
    console.log(err);
  }
  //
  // Log the results.
  //
  if (result) {
    var config = {
      app: {
        name: result.appName,
        url: result.appUrl
      },
      db: {
        host: result.dbHost,
        port: result.dbPort,
        name: result.dbName,
        un: result.dbUn,
        pw: result.dbPw
      },
      api: {
        host: result.apiHost,
        port: result.apiPort
      },
      coreCreds: {
        id: result.apiCoreId,
        key: result.apiCorePass,
        algorithm: 'sha256'
      },
      gui: {
        host: result.guiHost,
        port: result.guiPort
      },
      email: {
        service: result.mailService,
        auth: {
          user: result.mailEmail,
          pass: result.mailPass
        }
      }
    };


    // Copy
    // Save config info to config.js
    var content = 'module.exports = ' + JSON.stringify(config, null, 2);
    var configPath = __dirname + '/../config.js';
    fs.statAsync(configPath)
    .then(function(stat) {

      // config.js exists, so rename before writing to it.
      if (stat && stat.isFile()) {
        return fs.renameAsync(configPath, __dirname + '/../config.old.js');
      }

    })
    .then(function(obj, b) {
      // console.log('Backed up old config to config.old.js');
      console.log('after rename. a:');
      console.log(obj);
      console.log('b');
      console.log(b);

      return fs.writeFileAsync(configPath, content);
    })
    .then(function(err) {
      console.log('Saved configuration: '.green);
      console.log(config);
      copyPm2();
    })
    .catch(function(err) {

      // config.js does not exist yet, so create it.
      if (err.path === configPath) {
        return fs.writeFileAsync(configPath, content)
        .then(function() {
          console.log('Saved configuration: '.green);
          console.log(config);
          copyPm2();
        });
      }

      console.log('Error adding config.js:');
      console.log(err);
      console.log('Consider adding this file manually.');
    });


  } else {
    console.log('\nAborted configuration!');
  }

});

