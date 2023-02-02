function isFib(num) {
	let [a, b] = [0, 1];
	while (b < num) {
		[a, b] = [b, a + b];
	}
	return b === num;
}

function filterFib(arr) {
	return arr.filter(isFib);
}
console.log(filterFib(5));
