function add(a, b) {
	return a + b;
}
console.log(add(2, 5));

function divide(a, b) {
	return a / b;
}
console.log(divide(24, 2));

function convert(f) {
	return ((f - 32) * 5) / 9;
}
console.log(convert(60));

function divisibleby55(n) {
	if (n % 55 == 0) {
		return true;
	} else {
		return false;
	}
}

console.log(divisibleby55(55));

function checkLength(str) {
	return str.length;
}
console.log(checkLength("kartheek"));

function concat(s1, s2) {
	return s1 + s2;
}
console.log(concat("cat ", "dog"));
