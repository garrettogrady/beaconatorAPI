var gulp = require('gulp');
var tasks = {
  lint: ['lint:js'],
  app: ['lint:js:app']
};

gulp.task('lint', 'Alias for ' + tasks.lint.join(', '), tasks.lint);
gulp.task('lint:app', 'Alias for ' + tasks.app.join(', '), tasks.app);
