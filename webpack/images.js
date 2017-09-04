module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(png|jpg|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: 'images/[hash:12].[ext]'
							}
						}
					]
				},
				{
					test: /\.svg$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: 'images/icons/[hash:12].[ext]'
							}
						}
					]
				}
			]
		}
	};
};
