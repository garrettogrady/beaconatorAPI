var config = require('config');
var path   = require('path');
var gulp   = require('gulp');
var del    = require('del');
var msg = 'Remove the css files from the destination directory';

gulp.task('clean:css', msg, function(cb) {
  del([path.join(config.get('paths.dest'), 'css/bndl/*.css')], function(err) {
    if (err) {
      console.log(err);
    }
    cb(err);
  });
});
