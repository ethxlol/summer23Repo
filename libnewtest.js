const prom1 = (number) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (number >= 1 && number <= 10) {
				resolve(number);
			} else {
				reject('invalid input');
			}
		}, 1000);
	});
};

const prom2 = (numValue) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let randNum = Math.random() * 10 + 1;
			resolve(randNum * parseInt(numValue));
			// console.log(numValue);
			console.log(`i used the number ${randNum} to multiply the number`);
		}, 1000);
	});
};

module.exports = { prom1, prom2 };
