// this "function" is just a few strings pondering over eating options of the day

// this function returns a promise
// is has a timeout for each string to make it seem more dramatic and cinematic.
const brainstormDinner = () => {
	return new Promise((resolve, reject) => {
		console.log(`I have to decide what the fuck im gonna eat for dindin!`);
		console.log('promise 1 fulfilled');
		setTimeout(() => {
			console.log('Should i make a shit-salad?');
			console.log('promise 2 fulfilled');

			setTimeout(() => {
				console.log('Should i make boiled horse cocks?');
				console.log('promise 3 fulfilled');

				setTimeout(() => {
					console.log('Should i make fried emu tits?');
					console.log('promise 4 fulfilled');

					setTimeout(() => {
						console.log('Should i make snail freckles?');
						resolve('deep fat fried kangaroo anus glands');
						reject('Fucking porridge man!');
					}, 1000);
				}, 1000);
			}, 1000);
		}, 1000);
	});
};

// export statement
module.exports = brainstormDinner;
