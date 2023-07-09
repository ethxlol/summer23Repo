let { cookBeans, steamBroccoli, cookRice, bakeChicken } = require('./lib');

// this is a concurrent function, it will allow all promises to finish asynchronously
// but it will await to print it to the console until all of the promises are finished
// as these promises are not dependant on one another to complete, there is no reason to use the waiting function
// as the concurrent function usually is faster
async function serveDinnerConcurrent() {
	const vegetablePromise = steamBroccoli();
	const starchPromise = cookRice();
	const proteinPromise = bakeChicken();
	const sidePromise = cookBeans();
	console.log(
		`Concurrent: Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`
	);
}

// on the other hand if a promise was dependant on the value of its parenting promise we would need to use the waiting function
// in this code there is no need to wait for a promise to complete before starting the next one

// as opposed to the waiting function that will wait on each promise to finish before starting the next one and then printing it out
// its still working in async but it is halting the promise from executing until the next one is done and so on.
async function serveDinnerWaiting() {
	const vegetablePromise = await steamBroccoli();
	const starchPromise = await cookRice();
	const proteinPromise = await bakeChicken();
	const sidePromise = await cookBeans();
	console.log(
		`Waiting: Dinner is served. We're having ${vegetablePromise}, ${starchPromise}, ${proteinPromise}, and ${sidePromise}.`
	);
}
serveDinnerWaiting();
serveDinnerConcurrent();
