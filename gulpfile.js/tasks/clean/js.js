var config = require('config');
var path   = require('path');
var gulp   = require('gulp');
var del    = require('del');
var msg = 'Remove the js files from the destination directory';

gulp.task('clean:js', msg, function(cb) {
  del([path.join(config.get('paths.dest'), 'js/bndl/*.js')], function(err) {
    if (err) {
      console.log(err);
    }
    cb(err);
  });
});
