'use strict';


var exec = require('child_process').exec;
var config = require('../config');
var arg = process.argv[2];
var servers = ['gui', 'api'];

var allReady = function(obj) {
  var ready = true;
  servers.forEach(function(server) {
    if (!obj[server]) {
      ready = false;
    }
  });
  return ready;
};

var pm2 = module.exports = {
  list: function list() {
    var processes = exec('pm2 list', function(err, stdout, stderr) {
      if (err) {
        return console.log(err);
      }
    });

    processes.stdout.on('data', function (data) {
      console.log(data);
    });
  },
  start: function start(type) {
    type = type || 'start';
    var starts = {};
    var started = {};

    servers.forEach(function(server) {
      var cmd = [
        'pm2',
        type,
         __dirname + '/../servers/' + server + '/server.js',
        '--watch --name',
        '"' + config.app.name + ' ' + server.toUpperCase() + '"',
        '-e tmp/logs/' + server + '-err.log',
        '-o tmp/logs/' + server + '.log -f -x'
      ].join(' ');

      starts[server] = exec(cmd, function(err, stdout, stderr) {
        if (err) {
          return console.log(err);
        }
      });
      starts[server].on('close', function(data) {
        started[server] = true;
        if (allReady(started)) {
          pm2.list();
        }
      });
    });

  },
  restart: function restart() {
    pm2.start('restart');
  },
  stop: function stop() {
    var stops = {};
    var stopped = {};

    servers.forEach(function(server) {
      stops[server] = exec('pm2 stop "' + config.app.name + ' ' + server.toUpperCase() + '"', function(err) {
        if (err) {
          return console.error(err);
        }
      });

      stops[server].on('close', function(data) {
        stopped[server] = true;
        if (allReady(stopped)) {
          pm2.list();
        }
      });
    });
  },
};

if (arg && pm2[arg]) {
  pm2[arg]();
}
