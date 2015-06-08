var gulp = require('gulp');
var monitorCtrlC = require('monitorctrlc');
var chalk = require('chalk');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

var done = function(cb) {
  console.log(chalk.green('It has been a pleasure serving you.'));
  browserSync.exit();
  process.exit(0);
  cb();
};

var serveTasks = [
  'serve:browser-sync',
  'serve:watch',
];

gulp.task('serve', 'Run the following tasks: ' + serveTasks.join(','), function(cb) {
  monitorCtrlC(done);
  serveTasks.push(cb);
  runSequence.apply(runSequence, serveTasks);
});
