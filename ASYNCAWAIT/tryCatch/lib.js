let cookBeanSouffle = () => {
	return new Promise((resolve, reject) => {
		console.log('Fingers crossed... Putting the Bean Souffle in the oven now!');
		setTimeout(() => {
			// taking the boolean value from the helper function and storing it in the success variable
			// the value determines the outcome of the promise, this is looked into closer in the comments on the helper function itself
			let success = randomSuccess();
			if (success) {
				resolve('Bean Souffle!');
			} else {
				reject('Shit-fest...');
			}
		}, 3000);
	});
};

// helper function to generate a 50/50 % chance that the promise will be fulfilled or rejected
// Math.random takes a float between 0-1 so we are declaring that if the num is less than 0.5 it will return false
// thereby invoking the reject from the promise
// and vice versa
let randomSuccess = () => {
	let num = Math.random();
	if (num > 0.5) {
		return true;
	} else {
		return false;
	}
};

module.exports = cookBeanSouffle;
