const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const pug = require('./webpack/pug');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
const clean = require('./clean');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const babel = require('./webpack/babel');

const PATHS = {
	src: path.join(__dirname, 'src'),
	dist: path.join(__dirname, 'dist')
};

const common = merge([
	{
		entry: {
			'app': PATHS.src + '/js/app.js'
		},
		output: {
			path: PATHS.dist,
			filename: 'js/[hash:12].js'
		},
		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: 'index',
				template: PATHS.src + '/pug/index.pug',
				minify: {
					removeComments: true,
					collapseWhitespace: true
				}
			})
		]
	},
	pug(),
	images(),
	fonts()
]);

module.exports = function(env) {
	if(env === 'production') {
		return merge([
			common,
			extractCSS(),
			uglifyJS(),
			babel(),
			clean()
		]);
	}
	if(env === 'development') {
		return merge([
			common,
			devserver(),
			sass(),
			css(),
			babel()
		]);
	}
};

