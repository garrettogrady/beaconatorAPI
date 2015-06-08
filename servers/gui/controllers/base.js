var fs = require('fs');
var marked = require('marked');
var config = require('../../../config');

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

  page: {
    handler: function(request, reply) {
      var page = request.params.path;

      if (fs.existsSync(__dirname + '/../views/' + page + '.html')) {
        reply.view(page, {
          title: config.app.name + ' Dashboard',
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
