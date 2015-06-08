var config        = require('config');
var gulp          = require('gulp');
var gulpWebpack   = require('gulp-webpack');
var webpack       = require('webpack');

// Because gulpWebpack wants to change our immutable config
var webpackConfig = config.util.cloneDeep(config.get('webpack'));

var msg = 'Build/concat JS files with webpack into destination directory';

gulp.task('build:webpack', msg, function() {

  // dummy.js doesn't exist. Entry files set in webpack config
  return gulp.src('dummy.js')
    .pipe(gulpWebpack(webpackConfig, webpack))
    .pipe(gulp.dest(webpackConfig.output.path));
});
