/**
* Dependencies.
*/
var Hapi = require('hapi');
var settings = require('./config/settings');
var config = require('../../config');

// Create a server with a host, port, and options
var server = new Hapi.Server();

server.connection({
  host: config.gui.host,
  port: config.gui.port,
});

server.views(settings.hapi.views);

// Bootstrap Hapi Server Plugins.
// Passes the server object to the plugins
var plugins = require('./config/plugins')(server, config);

// Require the routes and pass the server object.
var routes = require('./config/routes')(server, plugins.db);

// Add the server routes
server.route(routes);

if (!module.parent) {
  server.start(function() {
    var message = 'GUI started at: ' + server.info.uri;
    console.log(message);
  });
}

module.exports = server;

