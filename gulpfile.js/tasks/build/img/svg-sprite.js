var path      = require('path');
var config    = require('config');
var gulp      = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var tap       = require('gulp-tap');
var src       = path.join(config.get('paths.srcAssets'), 'img/sprites/*.svg/*.svg');
var dest      = path.join(config.get('paths.destAssets'), 'img/sprites/');

gulp.task('build:img:svg-sprite', 'Build SVG sprites in the destination directory', function() {
  return gulp.src(src)
    .pipe(tap(function(file) {
      var spriteName = path.basename(path.join(file.path, '..'));

      return gulp.src(file.path)
      .pipe(svgSprite({
        mode: {
          inline: true,
          symbol: {
            dest: '',
            sprite: spriteName,
          }
        }
      }))
      .pipe(gulp.dest(dest));
    }));
});
