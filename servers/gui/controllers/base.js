var fs = require('fs');
var path = require('path');
var marked = require('marked');
var config = require('../../../config');
var viewsPath = path.resolve(__dirname, '../views') + '/';

// This is the base controller.
// Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {
  index: {
    handler: function(request, reply){
      var scripts = '';
      var page = 'dashboard';

      var markdown = fs.readFileSync(__dirname+'/../../../README.md', {encoding: 'utf8'});

      // Render the view with the custom greeting
      reply.view('index', {
        title: config.app.name + ' Dashboard',
        scripts: scripts,
        page: page,
        text: marked(markdown)
      });
    },
    app: {
      name: 'index'
    },
    auth: {
      strategy: 'session'
    }
  },

  users: function(db) {
    return {
      handler: function(request, reply) {
        var userCollection = db.collection('users');
        var page = 'users';
        console.log(viewsPath + page + '.html');
        userCollection
        .find()
        .sort({lname: 1})
        .toArray(function(err, docs) {

          if (fs.existsSync(viewsPath + page + '.html')) {
            reply.view(page, {
              title: 'Users',
              scripts: '',
              page: page,
              users: docs
            });
          } else {
            reply.view('404', {
              title: 'page not found'
            }).code(404);
          }
        });
      }
    };
  },

  events: function(db) {
    return {

      handler: function(request, reply) {
        if (request.query) {
          console.log(request.query);
        }

        var collection = db
        .collection('events')
        .find(request.query || {})
        .sort({$natural : -1})
        .toArray(function(err, docs) {

          var page = 'events';
          var title = 'Events';
          // title += ' - ' + config.app.name + ' Dashboard';
          // title = title.slice(0,1).toUpperCase() + title.slice(1);

          if (fs.existsSync(viewsPath + page + '.html')) {
            reply.view(page, {
              title: title,
              scripts: '',
              page: page,
              events: docs
            });
          } else {
            reply.view('404', {
              title: 'page not found'
            }).code(404);
          }

          // return reply(docs).type('application/json');
        });
      }
    };
  },

  page: {
    handler: function(request, reply) {
      var page = request.params.path;
      var title = page.replace(/\-+/g, ' ');
      title += ' - ' + config.app.name + ' Dashboard';
      title = title.slice(0,1).toUpperCase() + title.slice(1);

      if (fs.existsSync(viewsPath + page + '.html')) {
        reply.view(page, {
          title: title,
          scripts: '',
          page: page
        });
      } else {
        reply.view('404', {
          title: 'page not found'
        }).code(404);
      }
    },
    id: 'page',

    auth: {
      strategy: 'session'
    }
  }
};
