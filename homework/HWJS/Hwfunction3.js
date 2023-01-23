function checkDiscount(date) {
	switch (date) {
		case 1:
			return "Too early";
			break;
		case 15:
			return "Here is your discount";
			break;
		case 30:
			return "Too late";
			break;
		default:
			return "Not a valid date";
	}
}
console.log(checkDiscount(10));

function constructArray(num1, num2) {
	let array = [];
	while (num1 < num2) {
		array.push(num1 + 1);
		num1++;
	}
	return array;
}
console.log(constructArray(2, 17));

function getObjectKeys(obj) {
	let keys = [];
	for (let key in obj) {
		keys.push(key);
	}
	console.log(keys);
}
const myObject = { name: "Jack", email: "jack@gmail.com", age: 30 };
getObjectKeys(myObject);

function maxProfit(prices) {
	let maxProfit = 0;
	for (let i = 0; i < prices.length; i++) {
		for (let j = i + 1; j < prices.length; j++) {
			let profit = prices[j] - prices[i];
			if (profit > maxProfit) {
				maxProfit = profit;
			}
		}
	}
	console.log(maxProfit);
}
Prices = [315, 50, 314, 684, 100, 648, 132, 50, 98, 45];
maxProfit(Prices);
