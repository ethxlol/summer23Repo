const readline = require('readline');
const { prom1, prom2 } = require('./libnewtest.js');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

async function runPromises() {
	rl.question('Please enter a number between 1 and 10: ', async (number) => {
		try {
			const result = await prom1(number);
			console.log('Number is in range: the next prom is gonna multiply it!');
			const finalResult = await prom2(result);
			console.log(
				`Random number multiplied from your number is: ${finalResult}`
			);
		} catch (err) {
			console.log(err);
		} finally {
			rl.close();
		}
	});
}

runPromises();
