var path = require('path');
var config = require('config');
var gulp = require('gulp');
var concat = require('gulp-concat');

var assets = require(path.join(process.cwd(), 'assets'));
var srcDir = config.get('paths.dest');
var src = assets.development.css;
var dest = path.join(srcDir, assets.production.css[0]);
var destName = path.basename(dest);
var destDir = path.dirname(dest);
var msg = 'Concat CSS files';

src = src.map(function(file) {
  return path.join(srcDir, file);
});

gulp.task('build:css', msg, function() {

  return gulp.src(src)
  .pipe(concat(destName))
  .pipe(gulp.dest(destDir));
});

