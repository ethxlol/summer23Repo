let { cookBeans, steamBroccoli, cookRice, bakeChicken } = require('./lib.js');

async function serveDinnerAgain() {
	let foodArray = await Promise.all([
		steamBroccoli(),
		cookBeans(),
		bakeChicken(),
		cookRice(),
	]);
	let vegetable = foodArray[0];
	let starch = foodArray[1];
	let protein = foodArray[2];
	let side = foodArray[3];

	console.log(
		`Dinner is served. We are having roasted ${protein} with ${vegetable}, ${starch} and steamed ${side}. Bon ape-tits! `
	);

	// we could also dynamically add interlope the foodArray items inside of the template literal, this would save us some code from
	// declaring all the food groups into their own variable, however this is harder to reuse and understand
	// console.log(
	// 	`Dinner is served. We are having roasted ${foodArray[2]} with ${foodArray[0]}, ${foodArray[1]} and steamed ${foodArray[3]}. Bon ape-tits! `
	// );
}

serveDinnerAgain();
