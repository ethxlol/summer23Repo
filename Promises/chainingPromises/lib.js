// this is the stores inventory,
// it is an obj with nested objs that have the items such as sunglasses, the sunglasses obj have inventory with a number paired to it
// this is representative of the stock of the parenting obj, then there is a cost which is representative of the cost of the parenting obj
const store = {
	sunglasses: {
		inventory: 817,
		cost: 9.99,
	},
	pants: {
		inventory: 236,
		cost: 7.99,
	},
	bags: {
		inventory: 17,
		cost: 12.99,
	},
};

// the checkInventory function takes order, order is an array in the app.js as a param and returns a promise
const checkInventory = (order) => {
	// this promise takes resolve and reject which is representative of the executor function
	return new Promise((resolve, reject) => {
		// either of the outcome will set a timeout (delay)
		setTimeout(() => {
			// we store the items in the order to itemsArr
			const itemsArr = order.items;
			// we then iterate over each item with the every method to se that the item in the array is greater than or equal to 1 to verify that it is in stock
			let inStock = itemsArr.every(
				(item) => store[item[0]].inventory >= item[1]
			);
			// if the item is in stock
			if (inStock) {
				// we declare a variable named total ( this will be the total cost of the order at the end )
				let total = 0;
				// we then add the items and multiply them by the price of the item, this is the cost, so if we had example 2 sunglasses in the order they would
				// be multiplied by the cost property of the sunglasses obj and stored in the total variable
				itemsArr.forEach((item) => {
					total += item[1] * store[item[0]].cost;
				});
				// we then log the value of total in a string showing the consumer the total price of the items in the order(shopping cart)
				console.log(
					`All of the items are in stock. The total cost of the order is ${total}.`
				);
				// so the resolve of the promise will return the order and total
				resolve([order, total]);
			} else {
				// and the reject will return a string showing that the items are not in stock
				reject(
					`The order could not be completed because some items are sold out.`
				);
			}
			// we then use the helper function to create a random delay from 1ms to 2000ms
		}, generateRandomDelay());
	});
};

// this is the next function that will be chained to the first one this will take responseArray as a param
// the responseArray is a placeholder representing the order and total of the prior function
const processPayment = (responseArray) => {
	// the resonseArray[0] is representative of the order array, this contains the information about the order and gift card
	const order = responseArray[0];
	// the responseArray[1] is representative of the total cost of the order that is placed from the prior function
	const total = responseArray[1];
	// the function then returns a Promise, the executor then takes resolve and reject
	return new Promise((resolve, reject) => {
		// again sets a delay
		setTimeout(() => {
			// we are declaring a variable to see if the gift card balance is sufficient to cover the total price so greater than or equal to total
			let hasEnoughMoney = order.giftcardBalance >= total;
			// For simplicity we've omited a lot of functionality
			// If we were making more realistic code, we would want to update the giftcardBalance and the inventory
			// so if the hasEnoughMoney is true we will print a sting that tells the consumer that the payment is processed with the gift card.
			if (hasEnoughMoney) {
				console.log(
					`Payment processed with giftcard. Generating shipping label.`
				);
				// we declare a variable to show the tracking number from the helper function
				let trackingNum = generateTrackingNumber();
				// so the resolve of this will be that the order and trackingNum is returned
				resolve([order, trackingNum]);
			} else {
				// and the reject will print a string telling the consumer why it was rejected
				reject(`Cannot process order: giftcard balance was insufficient.`);
			}
			// we again add the helper function that will create a random delay from 0-2000ms
		}, generateRandomDelay());
	});
};

// the final function is taking the response array again as a param
const shipOrder = (responseArray) => {
	// this is the same order info as before
	const order = responseArray[0];
	// this is taking the tracking number from the prior function
	const trackingNum = responseArray[1];
	// this again return a promise with resolve and reject as the param, this is again the executor function of the promise
	return new Promise((resolve, reject) => {
		// sets timeout(delay) again
		setTimeout(() => {
			// resolve will confirm the order and return a string containing the confirmation with the trackingNumber interloped in it.
			resolve(
				`The order has been shipped. The tracking number is: ${trackingNum}.`
			);
			// again the helper function
			// this promise has no reject as the order is already processed and there would be no reason to reject it at this point
		}, generateRandomDelay());
	});
};

// This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number
function generateTrackingNumber() {
	return Math.floor(Math.random() * 1000000);
}

// This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time
// this will take the place of the number that we would normally put at the end of setTimeout, as this returns a random ms number for it
function generateRandomDelay() {
	return Math.floor(Math.random() * 2000);
}

// exporting it with node syntax
module.exports = { checkInventory, processPayment, shipOrder };
