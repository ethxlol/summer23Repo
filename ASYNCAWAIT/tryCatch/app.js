const cookBeanSouffle = require('./lib');

async function hostDinnerParty() {
	try {
		let dinner = await cookBeanSouffle();
		console.log(`${dinner} is served!`);
		setTimeout(() => {
			console.log('Bean souffle is not that great...');
		}, 2000);
	} catch (err) {
		// this serves as a placeholder for the reject of the promise imported that we are working with
		console.log(err); // logging the reject from the imported promise to the console
		setTimeout(() => {
			console.log('Ordering a pizza!');
		}, 2000);
	}
}

hostDinnerParty();
