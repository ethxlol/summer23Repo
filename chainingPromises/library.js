// declaring an obj to show inventory and cost of items in the inventory object
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

// The checkInventory function returns a new promise
const checkInventory = (order) => {
	// The executor function takes resolve and reject as parameters
	return new Promise((resolve, reject) => {
		// It sets a delay before executing the logic, using a randomly generated delay
		setTimeout(() => {
			// We are extracting the items from the order object in app.js and saving them in an array called itemsArr
			const itemsArr = order.items;

			// The inStock variable checks if all items in the itemsArr are in stock
			let inStock = itemsArr.every(
				(item) => store[item[0]].inventory >= item[1]
			);

			// If all items are in stock
			if (inStock) {
				// We initialize a variable called total to keep track of the total cost of the order
				let total = 0;

				// Iterate over each item in the itemsArr array
				itemsArr.forEach((item) => {
					// Multiply the quantity (item[1]) by the cost of the item from the store object (store[item[0]].cost)
					// Add the resulting value to the total
					total += item[1] * store[item[0]].cost;
				});

				// Output a success message to the console, including the total cost of the order
				console.log(
					`All of the items are in stock. The total cost of the order is ${total}.`
				);

				// Resolve the promise and pass the order and total as the resolved value
				resolve([order, total]);
			} else {
				// If any item is not in stock, reject the promise with an appropriate error message
				reject(
					`The order could not be completed because some items are not in stock.`
				);
			}
		}, generateRandomDelay()); // A helper function generateRandomDelay() is called to generate a random delay
	});
};
