// we make a function that will return a promise, the num is the param for the function
function withConstructor(num) {
	// This is a simple promise that will resolve 2 ways, one is the true and the other is the false,
	// so if the num that is passed in the calling of the promise the true will be "zero"
	// and if the num is not 0 it will resolve the false "not zero"
	return new Promise((resolve, reject) => {
		if (num === 0) {
			resolve('zero');
		} else {
			resolve('not zero');
		}
	});
}

// we are calling on the promise with the num as a arg, we are chaining it with the .then(taking the value of the prior promise) and logging it to a string in the console.
withConstructor(0).then((resolvedValue) => {
	console.log(
		`withConstructor(0) returned a promise which resolved to: ${resolvedValue}.`
	);
});

async function withAsync(num) {
	if (num === 0) {
		return 'ZERO ASYNC';
	} else {
		return 'NOT ZERO ASYNC';
	}
}

withAsync(1000).then((resolvedValue) => {
	console.log(
		`withAsync(1000) returned a promise which resolved to: ${resolvedValue}.`
	);
});
