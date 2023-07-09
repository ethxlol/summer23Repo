const stock = {
	nvidia: {
		inventory: 1000,
		cost: 500.0,
	},
	intel: {
		inventory: 1200,
		cost: 349.0,
	},
	asus: {
		inventory: 2200,
		cost: 149.0,
	},
};

const checkInventory = (cart) => {
	return new Promise(executorFunction);

	function executorFunction(resolve, reject) {
		setTimeout(() => {
			const itemsArr = cart.items;

			let inStock = itemsArr.every(
				(item) => stock[item[0]].inventory >= item[1]
			);
			if (inStock) {
				let totalCost;

				itemsArr.forEach((item) => {
					totalCost += item[1] * stock[item[0]].cost;
				});
				console.log(
					`All of the items are in stock. The total cost of the order is $${totalCost}`
				);
				resolve([cart, totalCost]);
			} else {
				reject(
					'The oder could not be completed because some items are sold out!'
				);
			}
		}, generateRandomDelay());
	}
};
