// Importing the functions using a require statement, this is node.js syntax
const { shopForBeans, soakTheBeans, cookTheBeans } = require('./lib.js');

// Higher level function that will utilize functions from the lib.js to preform a sequence of asynchronous tasks
async function makeBeans() {
	let type = await shopForBeans();
	let isSoft = await soakTheBeans(type);
	let dinner = await cookTheBeans(isSoft, type);
	console.log(dinner);
}

// calling on the function
makeBeans();
