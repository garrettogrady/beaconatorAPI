var config = require('config');
var path   = require('path');
var gulp   = require('gulp');
var del    = require('del');

var msg = 'Remove the rev-manifest.json file from the destination directory';
gulp.task('clean:rev-manifest', msg, function(cb) {
  del([path.join(config.get('paths.dest'), 'json/rev-manifest.json')], function(err) {
    if (err) {
      console.log(err);
    }
    cb(err);
  });
});
