/**
* Dependencies.
*/

var path = require('path'),
rootPath = path.normalize(__dirname + '/../../..');

var config = require(path.join(rootPath, 'config'));

// Defaults that you can access when you require this config.
module.exports = {
  root: rootPath,

  // port was 3020
  port: parseInt(process.env.PORT, 10) || config.gui.port,
  hapi: {
    views: {
      path: './servers/gui/views',
      engines: {
        html: require('swig')
      }
    }
  }
};
