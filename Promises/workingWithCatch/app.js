const { checkInventory } = require('./library.js');

// nested arrays of the "shopping cart"
const order = [
	['nvidia', 1],
	['intel', 1],
	['asus', 1],
];

// The success handler for the promise, this serves as a placeholder or visualiser for the resolved or rejected outcome of the promise
const handleSuccess = (resolvedValue) => {
	console.log(resolvedValue);
};

// The success handler for the promise, this serves as a placeholder or visualiser for the resolved or rejected outcome of the promise
const handleFailure = (rejectedValue) => {
	console.log(rejectedValue);
};

checkInventory(order).then(handleSuccess).catch(handleFailure);
