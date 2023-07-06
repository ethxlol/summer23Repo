const inventory = {
	sunglasses: 1900,
	pants: 1088,
	bags: 1344,
};

// function that will return a new promise with order as a parameter
const checkInventory = (order) => {
	// declaring the new promise, it will return a timeout of the conditions are met
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// inStock variable, it takes the array of order, and checks the items of the inventory
			// the items serves as a placeholder for the items in the order array
			// so item[0] is the name of the item (sunglasses) and item[1] is the quantity
			// so order.every(item => inventory[item[0]] >= item[1]) is an anonymous function made on the fly
			// this is because it will serve as a callback function for the every method

			let inStock = order.every((item) => inventory[item[0]] >= item[1]);
			// if both of the params return true :
			if (inStock) {
				resolve(`Thank you. Your order was successful.`);
				// if neither or only one of the params are true :
			} else {
				reject(
					`We're sorry. Your order could not be completed because some items are sold out.`
				);
			}
			// either false or true the timeOut will be set to 1 second, 1000ms
		}, 1000);
	});
};

// exporting the checkInventory function
module.exports = { checkInventory };
