const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config');
const path = require('path');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: {
      index: 'index.dev.html'
    },
    hot: true,
    index: 'index.dev.html',
    inline: true,
    port: 8080
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      API_SERVER: 'http://localhost:3000'
    })
  ]
});
