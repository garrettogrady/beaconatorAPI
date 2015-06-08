var gulp     = require('gulp');
var buildImgTasks = [
  'build:img:optimize',
  'build:img:svg-sprite'
];
gulp.task('build:img', 'Run the following tasks: ' + buildImgTasks.join(', '), buildImgTasks);
