// this "function" is just a few strings pondering over eating options of the day

// this function returns a promise
// is has a timeout for each string to make it seem more dramatic and cinematic.
const brainstormDinner = () => {
	return new Promise((resolve, reject) => {
		console.log(`I have to decide what the fuck im gonna eat for dindin!`);
		setTimeout(() => {
			console.log('Should i make a shit-salad?');
			setTimeout(() => {
				console.log('Should i make boiled horse cocks?');
				setTimeout(() => {
					console.log('Should i make fried emu tits?');
					setTimeout(() => {
						console.log('Should i make snail freckles?');
						resolve('deep fat fried kangaroo anus glands!');
						reject('Fucking porridge man!');
					}, 1000);
				}, 1000);
			}, 1000);
		}, 1000);
	});
};

// export statement
module.exports = brainstormDinner;
