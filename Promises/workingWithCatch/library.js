// The inventory of the store

const inventory = {
	nvidia: 2,
	intel: 43,
	asus: 4,
};

// chekinventory is a function that returns the promise
const checkInventory = (order) => {
	// after the promise is declared the resolve and reject is the executor function that will be responsible for the logic of the promise
	return new Promise((resolve, reject) => {
		// setTimeout is a method that is called in the logic to create a delay before either of the outcomes of the promise is returned
		setTimeout(() => {
			// This statement checks if every item in the order is in stock
			// The `every` method iterates over each item in the `order` array
			// For each item, it retrieves the corresponding inventory quantity from the `inventory` object
			// It then compares the inventory quantity (inventory[item[0]]) with the desired quantity (item[1])
			// If the inventory quantity is greater than or equal to the desired quantity, the condition is true for that item
			// The `every` method requires all conditions to be true for it to return true

			// If every item in the order is in stock, `inStock` will be true; otherwise, it will be false
			// For example, if the inventory has at least the desired quantity for each item, `inStock` will be true
			let inStock = order.every((item) => inventory[item[0]] >= item[1]);
			if (inStock) {
				resolve('Thank you. Your order was successful.');
			} else {
				reject(
					'We are sorry, but the item in your order is not in stock at the moment.'
				);
			}
			// the setTimeout is set to 1 second, or 1000ms ⬇️
		}, 1000);
	});
};

// export statement/assignment, this is export syntax specific to node.js
module.exports = { checkInventory };
