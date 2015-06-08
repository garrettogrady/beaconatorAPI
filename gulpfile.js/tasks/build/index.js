var gulp = require('gulp');
var runSequence = require('run-sequence');
var buildTasks = [
  'build:webpack',
  'build:img',
  'build:rev',
  'lint'
];
var msg = 'Run the following tasks: ' + buildTasks.join(', ');

gulp.task('build:js', 'Alias for build:webpack', ['build:webpack']);

gulp.task('build', msg, function(cb) {
  buildTasks.push(cb);
  runSequence.apply(runSequence, buildTasks);
});
