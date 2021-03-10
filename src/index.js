module.exports = function towelSort (matrix) {
	if (matrix === undefined || matrix.length === 0) { return [] }
	else {
		for (let i = 1; i < matrix.length; ) {
			let item = matrix[i].reverse();
			matrix.splice(i, 1, item);
			i += 2;
		}
	}
	return matrix.reduce((sum, item) => sum.concat(item), []);
}
