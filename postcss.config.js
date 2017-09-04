module.exports = {
	plugins: [
		require('autoprefixer')({
			'browsers': ['last 2 versions', 'safari >= 7', 'ie >= 9', 'ios >= 6']
		}),
		require('cssnano')({
			preset: 'default',
		}),
		require('css-mqpacker')({
			sort: sortMediaQueries
		})
	]
}

function isMax(mq) {
	return /max-width/.test(mq);
}

function isMin(mq) {
	return /min-width/.test(mq);
}

function sortMediaQueries(a, b) {
	A = a.replace(/\D/g, '');
	B = b.replace(/\D/g, '');

	if (isMax(a) && isMax(b)) {
		return B - A;
	} else if (isMin(a) && isMin(b)) {
		return A - B;
	} else if (isMax(a) && isMin(b)) {
		return 1;
	} else if (isMin(a) && isMax(b)) {
		return -1;
	}

	return 1;
}
