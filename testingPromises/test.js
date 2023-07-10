// async await waiting function

prom2 = (num) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (num === 0 || num === 1) {
				resolve('this was a triumph');
			} else {
				reject('this was a shitter');
			}
		}, 1000);
	});
};

// how try catch is declared for the promise, testing variable is in a way the success handler for this promise

async function myFunc(num) {
	try {
		let testing = await prom2(num);
		console.log('async promise: ' + testing);
	} catch (err) {
		console.log('async promise: ' + err);
	}
}

myFunc(3); // will output the reject which is handled by the catch

// ------------------------------------------------------------------------------------------------------------

// normal promise

prom1 = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let sentence = 'sure love ketchup';
			if (sentence === 'sure love ketchup') {
				resolve('success');
			} else {
				reject('darn!');
			}
		}, 1000);
	});
};

// success handlers for normal promise then represents the resolve and catch represents the reject

prom1()
	.then((result) => {
		console.log('normal promise: ' + result);
	})
	.catch((err) => {
		console.log('normal promise: ' + err);
	});
