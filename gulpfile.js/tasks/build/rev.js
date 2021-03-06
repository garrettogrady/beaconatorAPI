// rev.manifest merge...
// https://github.com/sindresorhus/gulp-rev/issues/83

var path         = require('path');
var config       = require('config');
var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var gulpif       = require('gulp-if');
var rev          = require('gulp-rev');
var jeditor      = require('gulp-json-editor');
var merge        = require('merge-stream');
var jsonDest     = path.join(config.get('paths.dest'), 'assets/json');
var jsDest       = path.join(config.get('paths.dest'), 'assets/js');
var cssDest      = path.join(config.get('paths.dest'), 'assets/css');
var manifestFile = path.join(jsonDest, 'rev-manifest.json');

var unRev = function(json) {
  Object.keys(json).forEach(function(elem) {
    json[elem] = elem;
  });

  return json;
};

var revPipe = function() {
  return rev.manifest(manifestFile, {
    base: jsonDest,
    merge: true
  });
};

gulp.task('build:rev', 'Create revved CSS and JS files; update rev manifest', function() {
  var css = gulp.src(path.join(cssDest, '*.css'))
    .pipe(rev())
    .pipe(gulp.dest(cssDest))
    .pipe(revPipe())
    .pipe(gulpif(browserSync.active, jeditor(unRev)))
    .pipe(gulp.dest(jsonDest));

  var js = gulp.src(path.join(jsDest, '*.js'))
    .pipe(rev())
    .pipe(gulp.dest(jsDest))
    .pipe(revPipe())
    .pipe(gulpif(browserSync.active, jeditor(unRev)))
    .pipe(gulp.dest(jsonDest));

  return merge(css, js);
});

var msg = 'Remove hash from file names in rev manifest';
gulp.task('build:rev:restore-manifest', msg, ['build:rev'], function() {
  return gulp.src(manifestFile)
    .pipe(jeditor(unRev))
    .pipe(gulp.dest(jsonDest));
});
