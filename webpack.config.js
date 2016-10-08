const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'app/public/js');
const APP_DIR = path.resolve(__dirname, 'src/js');

const config = {
  devtool: 'sourcemap',
  entry: `${APP_DIR}/App.js`,
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      }
    ]
  }
};

module.exports = config;
