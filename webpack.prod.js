/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
const { merge } = require('webpack-merge');
// eslint-disable-next-line import/no-extraneous-dependencies
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common');

// const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      // eslint-disable-next-line no-undef
      new TerserPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
});
