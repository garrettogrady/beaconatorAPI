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
    handler: function(request, reply){
      var page = request.params.path;
      // Custom page specific scripts
      var scripts = {
        'chat': [
          '<script src="js/chat.js"></script>',
        ],
        'watable': [
          '<link rel="stylesheet" href="js/watable/watable.css" type="text/css" />',
          '<script src="js/watable/jquery.watable.js"></script>',
          '<script src="js/watable/demo.watable.js"></script>',
        ],
        'gallery': [
          '<link rel="stylesheet" href="js/fancybox2/jquery.fancybox.css" type="text/css" media="screen" />',
          '<script src="js/fancybox2/jquery.fancybox.pack.js"></script>',
          '<script>$(document).ready(function() { $(".fancybox").fancybox(); });</script>',
        ],
        'chartjs': [
          '<script src="js/chartjs-conf.js"></script>',
        ],
        'morris': [
          '<link rel="stylesheet" href="http://cdn.oesmith.co.uk/morris-0.4.3.min.css">',
          '<script src="http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>',
          '<script src="http://cdn.oesmith.co.uk/morris-0.4.3.min.js"></script>',
          '<script src="js/morris-conf.js"></script>',
        ],
        'form-components': [
          '<script src="js/bootstrap-switch.js"></script>',
          '<script src="js/jquery.tagsinput.js"></script>',
          '<script src="js/form-component.js"></script> ',
        ],
        'to-do': [
          '<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>',
          '<script src="js/tasks.js"></script>',
          '<script>jQuery(document).ready(function() { TaskList.initTaskWidget(); }); $(function() { $( "#sortable" ).sortable(); $( "#sortable" ).disableSelection(); }); </script>',
        ],
        'panels': [
          '<script src="js/jquery.sparkline.js"></script>',
          '<script src="js/sparkline-chart.js"></script>',
        ],
        'calendar': [
          '<script src="js/calendar-conf-events.js"></script>\'',
        ],
        'default': [
          '<script>$(function(){$(\'select.styled\').customSelect();});</script>',
        ]
      };

      var scriptSet = (scripts[page] || scripts.default).join('\n');

      if (fs.existsSync(__dirname + '/../views/' + page + '.html')) {
        reply.view(page, {
          title: config.app.name + ' Dashboard',
          scripts: scriptSet,
          page: page
        });
      } else {
        reply.view('404', {
          title: 'page not found'
        }).code(404);
      }
    },
    app: {
      name: 'about'
    },
    auth: {
      strategy: 'session'
    }
  }
};
