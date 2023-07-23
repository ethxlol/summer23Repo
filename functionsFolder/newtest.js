// function counter() {
// 	setTimeout(() => {
// 		for (let i = 0; i < 10; i++) {
// 			console.log(i);
// 		}
// 	}, 1000);
// }

// counter();

function counter() {
	let i = 0;

	function iterate() {
		console.log(i);
		i++;

		if (i < 10) {
			setTimeout(iterate, 1000);
		}
	}

	setTimeout(iterate, 1000);
}

counter();

// const intervaller = (i) => {
// 	let i = 0;
// 	i++;
// 	console.log(i);
// 	if (i < 10) {
// 		setTimeout((i) => {}, 1000);
// 	}
// 	setTimeout((i) => {}, 1000);
// };
// intervaller();
