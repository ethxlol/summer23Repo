// this is the inventory obj that contains the items that are in the inventory with how many are in it as the value
const inventory = {
	sunglasses: 1,
	pants: 1088,
	bags: 1344,
};

//  this is the executor function for the promise that we are going to make after we have made the function
// it takes resolve and reject as params
// so resolve would be if the conditions are met
const myExecutor = (resolve, reject) => {
	if (inventory.sunglasses > 0) {
		resolve('Sunglasses order processed.');
		// reject is if the conditions are'nt met
	} else {
		reject('That item is sold out.');
	}
};

// This is the declaration for the promise,
// arrow function that takes no params and returns a new Promise, this is where are passing the executor function as the argument for the promise
const orderSunglasses = () => {
	return new Promise(myExecutor);
};
// we are making a var that will show the results of the promise
const orderPromise = orderSunglasses();
// and logging it to the console
console.log(orderPromise);
