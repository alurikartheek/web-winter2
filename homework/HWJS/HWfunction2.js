function printCalendar(months, dates) {
	for (let i = 0; i < months.length; i++) {
		for (let j = 0; j < 10; j++) {
			console.log(months[i] + " " + (j + 1));
		}
	}
	return 0;
}
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printCalendar(month, date);

function cloneArray(arr1, arr2) {
	arr2 = arr1;
	console.log(arr2);
}
let array = [2, 3, 4, 6];
let clonedArray = [];
cloneArray(array, clonedArray);

function getNthElement(arr, n) {
	if (n < arr.length) {
		return arr[n];
	} else {
		return "element does not exist";
	}
}
let array1 = [5, 8, 2, 9, 4, 1];
let n = 5;
console.log(getNthElement(array1, n));

function customPush(arr, item) {
	arr.push(item);
	return arr.length;
}
console.log("Length of the array: " + customPush(array1, 0));

function customPop(arr) {
	if (arr.length > 0) {
		return arr.pop();
	} else {
		return "array is empty";
	}
}
console.log("Removed item: " + customPop(array1));
