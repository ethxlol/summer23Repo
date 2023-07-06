// Import the checkInventory function from the library module
const { checkInventory } = require('./library.js');

// Define the order, which is an array of items and quantities
const order = [
	['sunglasses', 2],
	['bags', 2],
];

// The library module contains a promise-based checkInventory function.
// It will run a setTimeout function to simulate an asynchronous operation,
// and then either fulfill the promise by resolving it with a string indicating
// the successful completion of the order, or reject the promise with a string
// indicating the failure to complete the order.

// Define a success handler that will determine the actions to be taken
// when the promise is successfully fulfilled.
// This handler receives the resolved value of the promise as a parameter.
// In this case, we have made the success handler log the resolved value to the console.
// Without this handler, we would not be able to observe and handle the resolved value of the promise.

const handleSuccess = (resolvedValue) => {
	console.log(resolvedValue); // logging the results for resolved
};

// Define a failure handler that will determine the actions to be taken
// when the promise is rejected.
// This handler receives the rejection reason of the promise as a parameter.
// In this case, we have made the failure handler log the rejection reason to the console.
// Without this handler, we would not be able to observe and handle the rejection reason of the promise.

const handleFailure = (rejectionValue) => {
	console.log(rejectionValue); // logging the results of reject
};

// Call the checkInventory function with the order, which returns a promise.
// Use the then() method to chain the success and failure handlers to the promise.
// When the promise is fulfilled, the success handler will be called with the resolved value.
// When the promise is rejected, the failure handler will be called with the rejection reason.

checkInventory(order).then(handleSuccess, handleFailure);
