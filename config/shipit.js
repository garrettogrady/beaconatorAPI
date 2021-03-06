var pkg = require('../package.json');
var util = require('util');
var app = 'beaconator';
var user = 'fusionary';
var server = 'beaconator.fusionarydev.com';
var path = require('path');
var deployTo = util.format('/home/%s/apps/%s/', user, app);
var utils = require('shipit-fusionary/node_modules/shipit-utils');
var config = {
  default: {
    name: pkg.name,
    workspace: util.format('/tmp/%s', pkg.name),
    repositoryUrl: pkg.repository.url,
    keepReleases: 3,
    shallowClone: false,
    servers: util.format('%s@%s', user, server),

    ignores: [
      '.git',
      'node_modules',
      'config.js',
    ],
    shared: {
      dirs: [
        'public/storage',
        'node_modules',
      ],
      files: [
        'config.js',
        'config.pm2.json',
      ]
    },
    slack: {
      webhookUrl: 'https://hooks.slack.com/services/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',
    },
    npm: {
      remote: false
    },
    assets: {
      paths: ['public/storage'],
      localDirs: ['public/storage'],
      excludePatterns: [],
    },
  },
  development: {
    deployTo: path.join(deployTo, 'development'),
  }
};

module.exports.config = config;
module.exports.init = function(shipit) {
  require('shipit-fusionary')(shipit);
  shipit.initConfig(config);

  utils.registerTask(shipit, 'build', function() {
    return shipit.local('NODE_ENV=development npm install', {
      cwd: shipit.config.workspace
    })
    .then(function() {
      return shipit.local('NODE_ENV=production gulp build', {
        cwd: shipit.config.workspace
      });
    });
  });

  shipit.on('fetched', function() {
    utils.runTask(shipit, 'build');
  });

  utils.registerTask(shipit, 'npmInstall', function() {
    var cwd = path.join(config.development.deployTo, 'current');

    return shipit.remote('cd ' + cwd + ' && NODE_ENV=production npm install && npm run restart');
  });

  utils.registerTask(shipit, 'mongodump', function() {
    var date = new Date();
    var stamps = ['getFullYear', 'getMonth', 'getDate'].map(function(meth) {
      var stamp = meth === 'getMonth' ? date[meth]() + 1 : date[meth]();

      return stamp < 10 ? '0' + stamp : '' + stamp;
    });

    var cwd = path.join(config.development.deployTo, 'db/', stamps.join(''));

    return shipit.remote('mkdir -p ' + cwd + ' && cd ' + cwd + ' && mongodump');
  });

  shipit.on('published', function() {
    utils.runTask(shipit, 'npmInstall');
    utils.runTask(shipit, 'mongodump');
  });

};
