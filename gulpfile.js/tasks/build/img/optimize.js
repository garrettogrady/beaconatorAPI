var path     = require('path');
var config   = require('config');
var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var dest     = path.join(config.get('paths.dest'), 'img');

var src = [
  path.join(config.get('paths.srcAssets'), 'img/**/*'),
  path.join('!' + config.get('paths.srcAssets'), 'img/sprites/**/*')
];

gulp.task('build:img:optimize', 'Optimize images into destination directory', function() {
  return gulp.src(src)
    .pipe(imagemin({
      progressive: true,
      optimizationLevel: 3,
      svgoPlugins: []
    }))
    .pipe(gulp.dest(dest));
});
