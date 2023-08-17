// const subLength = (string, char) => {
// 	if (string.includes(char)) {
// 		return string.indexOf(char);
// 	} else {
// 		return -1;
// 	}
// };

const subLength = (str, char) => {
	let charCount = 0;
	let len = -1;

	for (let i = 0; i < str.length; i++) {
		if (str[i] == char) {
			charCount++;
			if (charCount > 2) {
				return 0;
			}
			if (len == -1) {
				len = i;
			} else {
				len = i - len + 1;
			}
		}
	}
	if (charCount < 2) {
		return 0;
	}

	return len;
};
console.log(subLength('aurora', 'a'));

//
// Write function below
const groceries = (list) => {
	let listString = '';

	for (let i = 0; i < list.length; i++) {
		listString += list[i].item;
		if (i < list.length - 2) {
			listString += ', ';
		} else if (i == list.length - 2) {
			listString += ' and ';
		}
	}

	return listString;
};
