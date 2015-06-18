var path = require('path');
var config = require('config');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var watch = require('gulp-watch');
// var spawn = require('child_process').spawn;

gulp.task('serve:watch', 'Watch files and perform actions on change', function() {

  // Watching js src because webpack-dev-middleware is smart
  // and delays requests until the compiling has finished:
  // https://github.com/webpack/webpack-dev-middleware
  watch([
    path.join(config.get('paths.dest'), 'js/**/*.js'),
    '!' + path.join(config.get('paths.dest'), 'js/tail.js'),
    '!' + path.join(config.get('paths.dest'), 'js/head.js'),
    path.join(config.get('paths.dest'), '{fonts|img|json}/**/*.*'),
  ], function() {
    browserSync.reload();
  });

  watch([
    path.join(config.get('paths.root'), 'servers', '**/*.js'),
    path.join(config.get('paths.root'), 'servers', 'gui', 'views', '**/*.html'),
  ], function() {
      setTimeout(function() {
        browserSync.reload();
      }, 1200);

    // var npmRun = spawn('npm', ['run', 'restart']);

    // npmRun.stdout.on('data', function(data) {
    //   console.log(data.toString());
    // });

    // npmRun.stderr.on('data', function(data) {
    //   console.log('stderr: ' + data.toString());
    // });

    // npmRun.on('close', function(code) {
    //   setTimeout(function() {
    //     browserSync.reload();
    //   }, 200);

    // });
  });

  watch([
    path.join(config.get('paths.dest'), 'css/*.css'),
    '!' + path.join(config.get('paths.dest'), 'css/styles.css'),
  ], function() {
    gulp.start('build:css');
  });

  watch([
    path.join(config.get('paths.src'), 'img/**/*'),
    path.join('!', config.get('paths.src'), 'img/sprites/**/*')
  ], function() {
    gulp.start('build:img:optimize');
  });

  watch([
    path.join(config.get('paths.src'), 'img/sprites/*.svg/*.svg')
  ], function() {
    gulp.start('build:img:svg-sprite');
  });
});
