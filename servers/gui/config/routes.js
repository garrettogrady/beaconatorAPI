/**
* Dependencies.
*/
var requireDirectory = require('require-directory');

module.exports = function(server, db) {
  // Bootstrap controllers so we don't have to load them individually.
  // This loads them all into the controller name space.
  // https://github.com/troygoode/node-require-directory
  var controller = requireDirectory(module, '../controllers');

  // Array of routes for Hapi
  var routeTable = [
    {
      method: 'GET',
      path: '/',
      config: controller.base.index
    },

    {
      method: 'GET',
      path: '/readme',
      config: controller.base.readme
    },

    {
      method: 'GET',
      path: '/events',
      config: controller.base.events(db)
    },
    {
      method: 'GET',
      path: '/users',
      config: controller.base.users(db)
    },

    {
      method: 'GET',
      path: '/{path*}',
      config: controller.base.page
    },
    {
      method: 'GET',
      path: '/partials/{path*}',
      config: controller.assets.partials
    },
    {
      method: 'GET',
      path: '/img/{path*}',
      config: controller.assets.images
    },
    {
      method: 'GET',
      path: '/storage/{path*}',
      config: controller.assets.storage
    },
    {
      method: 'GET',
      path: '/css/{path*}',
      config: controller.assets.css
    },
    {
      method: 'GET',
      path: '/fonts/{path*}',
      config: controller.assets.fonts
    },
    {
      method: 'GET',
      path: '/js/{path*}',
      config: controller.assets.js
    },
    {
      method: 'GET',
      path: '/bower_components/{path*}',
      config: controller.assets.bower
    }
  ];

  return routeTable;
};
