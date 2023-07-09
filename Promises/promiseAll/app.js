const { checkAvailability } = require('./lib.js');

// successHandler
const onFulfill = (itemsArray) => {
	console.log(`Items checked: ${itemsArray}`);
	console.log(
		`Every item was available from the distributor. Placing order now.`
	);
};

// failureHandler
const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

//  declaring a var that will use the checkAvailability function from the imported module
// We are using the name of the items and their distributors as args to the executor function for the promise in lib.js
const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
const checkBags = checkAvailability('bags', 'Favorite Supply Co.');

// we are using the promise.all to execute all the promises.
// this is called concurrency, multiple asynchronous operations happening together
// this accepts an array of promises and returning it to one promise at the end
// so there are one of two ways the promise.all will be settled:
// 1. If they are all resolved they will return an array of all the promises containing all the value from them
// 2. "failing fast", if one of the promises reject the single "big" promise immediately rejects with the reason that the promise is rejected
Promise.all([checkSunglasses, checkPants, checkBags])
	.then(onFulfill)
	.catch(onReject);
