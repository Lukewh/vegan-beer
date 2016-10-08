const config = require('./webpack.config');
const webpack = require('webpack');

const prodConfig = Object.assign({}, config);

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.DedupePlugin()
];

prodConfig.plugins = plugins;
prodConfig.devtool = 'eval';

module.exports = prodConfig;
