// importing the functions from library.js
const { checkInventory, processPayment, shipOrder } = require('./lib.js');

// Order object defined with two properties the items one is an array with inner arrays representing the items
// The other one is the "gift card" with its balance as the value
const order = {
	items: [
		['sunglasses', 1],
		['bags', 2],
	],
	giftcardBalance: 79.82,
};

// checkInventory is called with order as an argument it returns a promise
checkInventory(order)
	// the then is method is used to handle the resolved value of the promise returned by checkInvetory
	.then((resolvedValueArray) => {
		// chaining to the next promise, this is the payment promise
		return processPayment(resolvedValueArray);
	})
	.then((resolvedValueArray) => {
		// Chaining the payment promise with the shipping promise
		return shipOrder(resolvedValueArray);
	})
	// this is the success handler for the function
	.then((successMessage) => {
		console.log(successMessage);
	})
	// this is the failure handler for the function
	.catch((errorMessage) => {
		console.log(errorMessage);
	});
