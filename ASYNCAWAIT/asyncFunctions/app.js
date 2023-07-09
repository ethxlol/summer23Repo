// importing the promise from the lib.js
const shopForBeans = require('./lib');

// making an async declarative function
async function getBeans() {
	// initializing with a string
	console.log(`1. Heading to the store to buy beans...`);
	// the resolved value from shopForBeans will be store in this value variable
	let value = await shopForBeans(); // Await the promise resolution from shopForBeans, shopForBeans is effectively serving as a success handler in this context
	setTimeout(() => {
		console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
	}, 2000);
}

getBeans();
