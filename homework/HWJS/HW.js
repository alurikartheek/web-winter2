function age(number) {
	if (number > 65) {
		return "Special Discount";
	} else {
		return "Not Allowed";
	}
}
console.log(age(25));

//  -----------

function multiplyby100(arr) {
	return arr.map(function (num) {
		return num * 100;
	});
}
let arr = [5, 7, 9, 3, 6];
let dummyArray = multiplyby100(arr);
console.log(dummyArray);

//  -----------

function greater5(arr1) {
	return arr1.map(function (number) {
		if (arr1.length > 5) {
			return number * 100;
		}
	});
}
let arr1 = [5, 8, 2, 9, 4, 0];
let newArr1 = greater5(arr1);
console.log(newArr1);

//  -----------

function checkNumber(arr2) {
	return arr2.map(function (number) {
		if (number % 2 === 0) {
			return number * 100;
		} else {
			return number;
		}
	});
}
let arr2 = [5, 3, 6, 1, 8];
let newArr2 = checkNumber(arr2);
console.log(newArr2);

//  -----------

var c = 0;
function count(arr3) {
	arr3.forEach((number, i) => {
		if (number === 154) {
			c = c + 1;
		}
	});
	return c;
}
let arr3 = [154, 657, 564, 561, 154, 678, 100, 154];
console.log("Count of 154 in an array: " + count(arr3));

//  -----------

function checkType(input) {
	if (Array.isArray(input)) {
		return "It is something else";
	} else {
		return "It is an Object";
	}
}
let input = ["kartheek"];
console.log(checkType(input));
