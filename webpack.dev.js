/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',
  // Control how source maps are generated
  devtool: 'inline-source-map',

  // Spin up a server for quick development
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8080,
  },

  // eslint-disable-next-line no-multiple-empty-lines

  plugins: [
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
});
