var Bootstrap = require('fusionary-fed').bootstrap;
var bs = new Bootstrap();
var path = require('path');
var rootPath = process.cwd();
var pkg = require(path.join(rootPath, 'package.json'));

// Set process.NODE_ENV from cli args
bs.setEnv();

var defaults = {
  env: bs.getEnv(),
  devMode: bs.getEnv() !== 'production',
  pkg: pkg,
  paths: {
    root: rootPath,
    src: path.join(rootPath, 'public'),
    dest: path.join(rootPath, 'public'),
  },
  shipit: require('./shipit'),
  webpack: require('./webpack'),
  browserSync: {
    open: false,
    server: {
      baseDir: 'public',
    },
  },
};

defaults.paths.srcAssets = defaults.paths.src;
defaults.paths.destAssets = defaults.paths.dest;

module.exports = defaults;
