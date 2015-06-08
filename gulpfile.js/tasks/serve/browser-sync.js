var config = require('config');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var webpackMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var runSequence = require('run-sequence');
var webpackConfig = config.get('webpack');
var yargs = require('yargs');
var bsConfig = config.util.cloneDeep(config.get('browserSync'));

var argv = yargs.option('open', {
  alias: 'o',
  default: bsConfig.open
}).argv;

bsConfig.open = argv.open;
webpackConfig.devtool = 'eval';

var msg = 'Run browserSync with webpack middleware (for live reloading/syncing)';
gulp.task('serve:browser-sync', msg, function(cb) {
  bsConfig.middleware = webpackMiddleware(webpack(webpackConfig), {
    stats: { colors: true },
    publicPath: '/js/bndl/',
  });

  // Load BS and trigger initial build
  browserSync(bsConfig);

  // Do an initial build and reload
  // Building inside init because browserSync.active must be true
  browserSync.emitter.on('init', function() {
    runSequence(
      'build',
      function() {
        browserSync.reload();
        cb();
      }
    );
  });
});
