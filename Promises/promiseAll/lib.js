// executor function that takes 2 params, the items name and distributor name
const checkAvailability = (itemName, distributorName) => {
	// the outputted message that will be initialized from the values prompted in the calling of the executor
	console.log(`Checking availability of ${itemName} at ${distributorName}...`);
	// this returns a promise with resolve, reject
	return new Promise((resolve, reject) => {
		// sets a timeout ( delay )
		setTimeout(() => {
			// this will take the value of itemName and output: sunglasses are in stock at Favorite Supply Co. and the same for the other items 2 more times
			// so the itemName is what we are using dynamically in the success handler, the distributor stays the same
			if (restockSuccess()) {
				console.log(`${itemName} are in stock at ${distributorName}`);
				resolve(itemName);
			} else {
				// this will take the item that is not in stock and print this reject message to the user
				reject(
					`Error: ${itemName} is unavailable from ${distributorName} at this time.`
				);
			}
		}, 1000);
	});
};

module.exports = { checkAvailability };

// This is a function that returns true 80% of the time
// We're using it to simulate a request to the distributor being successful this often
function restockSuccess() {
	return Math.random() > 0.2;
}
