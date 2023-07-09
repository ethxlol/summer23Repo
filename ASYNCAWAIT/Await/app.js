// require statement for importing
const brainstormDinner = require('./lib');

// Native promise version:

// This function returns the brainstormDinner function that in turn returns a promise
const nativePromiseDinner = () => {
	brainstormDinner()
		// when the promise is resolved the meal is a placeholder for the resolve value of the promise
		.then((meal) => {
			// for dramatic effect we are setting a long delay before printing the success handler to the console
			setTimeout(() => {
				console.log(`I'm gonna make fucking ${meal} for din din's!`);
			}, 5000);
		})
		// There would be no way to make an error in this tbh, the user is not setting any args
		.catch((err) => {
			console.log('im just gonna order takeout!');
		});
};
// calling the function that returns the promise chain
// nativePromiseDinner();

// Async/Await version:

async function announceDinner() {
	let meal = await brainstormDinner();
	setTimeout(() => {
		console.log(
			'I used async await to make this thought about my dinner plans:' +
				` i'm gonna have flippin ${meal} for dinner!`
		);
	}, 5000);
}

announceDinner();
