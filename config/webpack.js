var defer = require('config/defer').deferConfig;
var path = require('path');
var webpack = require('webpack');

/**
 * Wrapping in defer so we can use config vars in this config (yodawg)
 * https://github.com/lorenwest/node-config/wiki/Configuration-Files#javascript-module---js
 */

module.exports = defer(function(config) {
  require('babel-loader');
  var webpackConfig = {
    entry: {
      'head': [path.join(config.paths.src, 'assets/js/head.js')],
      'tail': [path.join(config.paths.src, 'assets/js/tail.js')]
    },
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js',
      path: path.join(config.paths.dest, 'assets/js'),
    },
    resolve: {
      modulesDirectories: [
        'node_modules',
        path.join(config.paths.src, 'assets/js'),
      ],
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',

          // query is for babel options (https://babeljs.io/docs/usage/options/)
          query: {
            // compact: false,
            // sourceMaps: 'inline'
          }
        }
      ],
    },
    devServer: {
      host: 'localhost',
      port: 8080,
    },
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery'
      }),
      new webpack.BannerPlugin('Built by Fusionary (fusionary.com)', {
        entryOnly: true
      })
    ]
  };

  if (config.devMode) {
    webpackConfig.devtool = 'sourcemap';
    webpackConfig.debug = true;
  } else {
    webpackConfig.plugins = webpackConfig.plugins.concat(
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          drop_console: true
        }
      })
    );
  }

  return webpackConfig;
});
