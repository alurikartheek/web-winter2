function age(number) {
	if (number > 65) {
		return "Special Discount";
	} else {
		return "Not Allowed";
	}
}
console.log(age(25));

function multiply100(array) {
	return array.map(function (number) {
		return number * 100;
	});
}
let array = [5, 7, 9, 3, 6];
let dummyArray = multiply100(array);
console.log(dummyArray);

function checkType(input) {
	if (Array.isArray(input)) {
		return "It is something else";
	} else {
		return "It is an Object";
	}
}
let input = ["kartheek"];
console.log(checkType(input));

function evenOdd(arr2) {
	return arr2.map(function (number) {
		if (number % 2 === 0) {
			return number * 100;
		} else {
			return number;
		}
	});
}
let arr2 = [5, 3, 6, 1, 8];
let newArr2 = evenOdd(arr2);
console.log(newArr2);

var count = 0;
function count(array3) {
	array3.forEach((number, i) => {
		if (number === 154) {
			count++;
		}
	});
	return count;
}
let array3 = [154, 657, 564, 561, 154, 678, 100, 154];
console.log("Count: " + count(array3));
