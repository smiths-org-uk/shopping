const webpack = require('webpack');
const merge = require('webpack-merge');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'production',
  plugins: [
    new MinifyPlugin(),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new webpack.EnvironmentPlugin({
      API_SERVER: '/api'
    })
  ],
});
