var gulp = require('gulp');
var path = require('path');
var config = require('config');
var jshint = require('gulp-jshint');
// var jscs = require('gulp-jscs');
var fs = require('fs');
var noop = function() {};
var stylish = require('gulp-jscs-stylish');

var jshintConfig = JSON.parse(fs.readFileSync(path.join(config.get('paths.root'), '.jshintrc')));
// var jscsConfig = JSON.parse(fs.readFileSync(path.join(config.get('paths.root'), '.jscsrc')));

// Setting unused here because it's annoying to have on by default
jshintConfig.unused = true;

var lintApp = function lintApp() {

  var base = gulp.src([
    path.join(config.get('paths.src'), 'servers/**/*.js'),
    path.join(config.get('paths.root'), '*.js'),
  ])
    .pipe(jshint(jshintConfig))
    // .pipe(jscs(jscsConfig))
    .on('error', noop)
    .pipe(stylish.combineWithHintResults())
    .pipe(jshint.reporter('jshint-stylish'));

  return base;
};

var lintNode = function linkNode() {
  jshintConfig.node = true;
  // jscsConfig.disallowTrailingComma = null;

  return gulp.src([
    path.join(config.get('paths.root'), 'gulpfile.js/**/*.js'),
    path.join(config.get('paths.root'), 'config/**/*.js'),
  ])
    .pipe(jshint(jshintConfig))
    // .pipe(jscs(jscsConfig))
    .on('error', noop)
    .pipe(stylish.combineWithHintResults())
    .pipe(jshint.reporter('jshint-stylish'));
};

gulp.task('lint:js:node', 'Lint node js files (gulp and config)', function() {
  return lintNode();
});

gulp.task('lint:js:app', 'Lint non-node js files ', function() {
  return lintApp();
});

gulp.task('lint:js', 'Lint all js files', ['lint:js:node', 'lint:js:app']);
