var requireDir = require('require-dir');

// Require gulp help, which transforms gulp and its args
require('gulp-help')(require('gulp', {
  aliases: ['h']
}));

requireDir('./', { recurse: true });
