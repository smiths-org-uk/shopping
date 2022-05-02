const webpack = require('webpack');
const { merge } = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
	mode: 'development',
	devtool: 'inline-source-map',
	plugins: [
		new webpack.EnvironmentPlugin({
			API_SERVER: 'http://localhost:3000'
		})
	]
});
