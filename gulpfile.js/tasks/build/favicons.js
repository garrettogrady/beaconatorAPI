/**
 * Using favicons directly, as gulp-favicons seems to be a bit flakey and
 * going through some changes.
 *
 * https://github.com/haydenbleasel/gulp-favicons/issues/2
 */

var path        = require('path');
var config      = require('config');
var gulp        = require('gulp');
var favicons    = require('favicons');
var faviconPath = '/img/favicons/';

gulp.task('build:favicons', 'Build favicons and save within the src directory', function(cb) {
  favicons({
    files: {
      src: path.join(config.get('paths.src'), faviconPath, '/default.png'),
      dest: path.join(config.get('paths.src'), faviconPath),
      html: path.join(config.get('paths.src'), 'templates/_includes/favicons.tpl'),
      iconsPath: faviconPath,
    },
    icons: {
      appleIcon: true,
      appleStartup: true,
      favicons: true,
      android: false,
      coast: false,
      firefox: false,
      opengraph: false,
      windows: false,
      yandex: false
    },
  }, cb);
});
