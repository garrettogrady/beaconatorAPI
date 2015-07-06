var promise = require('bluebird');
var fs = promise.promisifyAll(require('fs'));
var chalk = require('chalk');
var inquirer = require('bluebird-inquirer');

var apiGenKey = function(length) {
  // Just produces random string using these chars
  var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';

  for (var i = length; i > 0; --i) {
    result += chars[Math.round(Math.random() * (chars.length - 1))];
  }

  return result;
};

var headings = {
  app: chalk.green('Configuring Basic App Info...\n'),
  db: chalk.green('Configuring MongoDB Connection...\n'),
  api: chalk.green('Configuring API Server...\n'),
  gui: chalk.green('Configuring GUI Server...\n'),
  email: chalk.green('Configuring Email app uses...\n'),
};

// Define what we want entered
var questions = [
  {
    name: 'appName',
    message: headings.app + 'App Name:',
    default: 'Beaconator'
  },
  {
    name: 'appUrl',
    message: 'App Url:',
    default: 'http://localhost:3030',
    filter: function removeLastSlash(url) {
      return url.replace(/\/$/, '');
    }
  },
  {
    name: 'apiHost',
    message: headings.api + 'API host:',
    default: '127.0.0.1'
  },
  {
    name: 'apiPort',
    message: 'API port:',
    default: '3000'
  },
  {
    name: 'apiCoreId',
    message: 'API Core ID:',
    default: 'core'
  },
  {
    name: 'apiCorePass',
    message: 'API Core Password:',
    default: 'random string',
    filter: function(value) {
      if (value === 'random string') {
        value = apiGenKey(64);
      }

      return value;
    }
  },
  {
    name: 'guiHost',
    message:  headings.gui + 'GUI host:',
    default: '0.0.0.0'
  },
  {
    name: 'guiPort',
    message: 'GUI port:',
    default: '3030'
  },
  {
    name: 'dbHost',
    message: headings.db + 'Mongo host:',
    default: '127.0.0.1'
  },
  {
    name: 'dbPort',
    message: 'Mongo port:',
    default: '27017'
  },
  {
    name: 'dbName',
    message: 'Mongo db name:',
    default: 'beacon'
  },
  {
    name: 'dbUn',
    message: 'Mongo db username (optional):',
    default: ''
  },
  {
    name: 'dbPw',
    message: 'Mongo db password (optional):',
    default: ''
  },
  {
    name: 'mailService',
    message: headings.email + 'Email service:',
    default: 0,
    type: 'list',
    choices: [
      'Mailgun',
      'Gmail'
    ]
  },
  {
    name: 'mailEmail',
    message: function(answers) {
      var msg = 'Email address';

      if (answers.mailService === 'Mailgun') {
        return msg + ' [see wiki]:';
      }

      return msg + ':';
    },
    validate: function(text) {
      return !!text;
    },
    default: function(answers) {
      if (answers.mailService === 'Mailgun') {
        return 'accounts+' + answers.appName.toLowerCase() + '@fusionary.com';
      }

      return '';
    }
  },
  {
    name: 'mailPass',
    type: 'password',
    message: 'Email password:',
    when: function(answers) {
      return answers.mailService === 'Gmail';
    }
  },
  {
    name: 'mailgunApiKey',
    message: 'Mailgun API Key [see wiki]',
    when: function(answers) {
      return answers.mailService === 'Mailgun';
    }
  },
  {
    name: 'mailgunDomain',
    message: 'Mailgun Domain [see wiki]',
    when: function(answers) {
      return answers.mailService === 'Mailgun';
    }
  }

];

var buildConfig = function buildConfig(result) {
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
      }
    }
  };

  if (result.mailService === 'Mailgun') {
    config.Mailgun = {
      service: result.mailService,
      auth: {
        'api_key': result.mailgunApiKey,
        domain: result.mailgunDomain,
      }
    };
  }

  if (result.mailService === 'Gmail') {
    config.email.auth.pass = result.mailPass;
    config.Gmail = config.email;
  }

  return config;
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
    var msg = [
      chalk.yellow('Skipping copy to'),
      chalk.cyan(pm2.config.file + '.'),
      chalk.yellow('File already exists.'),
    ].join(' ');

    if (stats[1].isFile()) {
      console.log(msg);

      return false;
    }
  })
  .catch(function(err) {
    if (err.path === pm2.example.path) {
      return console.log(chalk.red('Can\'t copy file: ' + pm2.example.file + 'does not exist'));
    }

    fs.readFileAsync(pm2.example.path, {encoding: 'utf8'})
    .then(function(content) {
      return fs.writeFileAsync(pm2.config.path, content);
    })
    .then(function() {

      var msg = [
        chalk.green('Copied'),
        chalk.cyan(pm2.example.file),
        chalk.green('to'),
        chalk.cyan(pm2.config.file)
      ].join(' ');
      console.log(msg);
    });

  });
};

var ask = inquirer.prompt(questions)
.then(function(result) {

  //
  // Log the results.
  //
  if (!result) {
    return console.log('\nAborted configuration!');
  }

  var config = buildConfig(result);

  // Copy
  // Save config info to config.js
  var content = [
    '/* jshint ignore: start */',
    '/* jscs: disable */',
    'module.exports = ' + JSON.stringify(config, null, 2),
    '',
  ].join('\n');
  var configPath = __dirname + '/../config.js';

  fs.statAsync(configPath)
  .then(function(stat) {

    // config.js exists, so rename before writing to it.
    if (stat && stat.isFile()) {
      return fs.renameAsync(configPath, __dirname + '/../config.old.js');
    }

  })
  .then(function() {
    console.log(chalk.yellow('Backed up old config to config.old.js'));

    return fs.writeFileAsync(configPath, content);
  })
  .then(function() {
    console.log(chalk.green('Saved configuration to'), chalk.cyan('config.js:'));
    console.log(config);
    copyPm2();
  })
  .catch(function(err) {

    // config.js does not exist yet, so create it.
    if (err.path === configPath) {
      return fs.writeFileAsync(configPath, content)
      .then(function() {
        console.log(chalk.green('Saved configuration: '));
        console.log(config);
        copyPm2();
      });
    }

    console.log('Error adding config.js:');
    console.log(err);
    console.log('Consider adding this file manually.');
  });

})
.catch(function(err) {
  console.log(err);
});

