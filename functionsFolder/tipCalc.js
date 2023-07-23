// Write your function here:
const tipCalculator = (quality, total) => {
	let tipPercentage;
	switch (quality) {
		case 'bad':
			tipPercentage = 5;
			break;
		case 'ok':
			tipPercentage = 15;
			break;
		case 'good':
			tipPercentage = 20;
			break;
		case 'excellent':
			tipPercentage = 30;
			break;
		default:
			tipPercentage = 18;
			break;
	}
	const tipAmount = total * (tipPercentage / 100);
	return `The service was ${quality} so here is a ${tipPercentage}% tip from the bill of ${total}$, 
so the tip amount giveth is ${tipAmount}$. `;
};

// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('bad', 100)); //should return 20

// We encourage you to add more function calls of your own to test your code!
