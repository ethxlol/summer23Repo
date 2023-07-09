// Function that returns a promise
const shopForBeans = () => {
	return new Promise((resolve, reject) => {
		// Array of bean types
		const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];

		// Adding a delay
		setTimeout(() => {
			// Choosing a random index from the beanTypes array
			let randomIndex = Math.floor(Math.random() * beanTypes.length);

			// Assigning the bean type based on the randomly generated index
			let beanType = beanTypes[randomIndex];

			// Logging the selected bean type
			console.log(`2. I bought ${beanType} beans because they were on sale.`);

			// Resolving the promise with the selected bean type
			resolve(beanType);
		}, 2000);
	});
};

// Exporting the shopForBeans function
module.exports = shopForBeans;
