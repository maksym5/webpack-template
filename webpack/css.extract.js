const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(paths) {
	return {
		module: {
			rules: [
				{
					test: /\.(scss|sass)$/,
					include: paths,
					use: ExtractTextPlugin.extract({
						publicPath: '../',
						fallback: 'style-loader',
						use: ['css-loader', 'postcss-loader', 'sass-loader']
					})
				},
				{
					test: /\.css$/,
					include: paths,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: 'css-loader'
					})
				}
			]
		},
		plugins: [
			new ExtractTextPlugin('css/[hash:12].css')
		]
	};
};