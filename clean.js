const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const PATHS = {
	src: path.join(__dirname, 'src'),
	dist: path.join(__dirname, 'dist')
};


let pathsToClean = [
  'dist'
]

let cleanOptions = {
  root:     __dirname,
  verbose:  true,
  dry:      false
}

module.exports = function() {
	return {
		plugins: [
			new CleanWebpackPlugin(pathsToClean, cleanOptions)
		]
	};
};

