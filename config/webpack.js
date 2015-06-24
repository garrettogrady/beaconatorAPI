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
      'head': [path.join(config.paths.src, 'js/head.js')],
      'tail': [path.join(config.paths.src, 'js/tail.js')]
    },
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js',
      path: path.join(config.paths.dest, 'js/bndl'),
    },
    resolve: {
      modulesDirectories: [
        'node_modules',
        path.join(config.paths.src, 'js'),
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
            stage: 1,
            optional: ['runtime'],
            // plugins: ['closure-elimination'],
            // compact: false,
            // sourceMaps: 'inline'
          }
        },
        // {
        //   test: /deleteme.js/,
        //   loader: 'imports?$=jquery'
        // },
      ],
    },
    devServer: {
      host: 'localhost',
      port: 8080,
    },
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        'window.$': 'jquery',
        'window.jQuery': 'jquery',

      }),
      new webpack.BannerPlugin('Built by Fusionary (fusionary.com)', {
        entryOnly: true
      })
    ]
  };

  if (config.devMode) {
    console.log('************** DEV MODE *******************');
    webpackConfig.devtool = 'sourcemap';
    webpackConfig.debug = true;
  } else {
    webpackConfig.output.filename = '[name].min.js';
    webpackConfig.output.chunkFilename = '[name].min.js';

    webpackConfig.plugins = webpackConfig.plugins.concat(
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          'drop_console': true
        }
      })
    );
  }

  return webpackConfig;
});
