// We want this program to check if the word contains a space in it, if it does it should output null
// if it does not it should return the word in the string

function capitalizeASingleWord(word) {
	// console.log(word)
	// The error here is subtle there is a rogue ! in front of word. so the logic here stats that if the word NOT mach ' ' then we return null, so if there IS a empty space in it the string with the words will log
	// we wanted the opposite, so to fix this we need to remove the ! from the if statement logic initially
	if (!word.match(' ')) {
		// console.log('Word value inside of if statement: ' + word); //
		return null;
	}
	// storing the first index of the string in firstLetter variable
	let firstLetter = word.charAt(0);
	// storing the rest of the indexes (i.e rest of the word) in restOfWord variable
	const restOfWord = word.slice(1);

	// making the first index uppercase
	firstLetter = firstLetter.toUpperCase();

	// returning the concatenation of the frist letter and the rest of the word, now with a uppercase first letter
	return firstLetter + restOfWord;
}

// Should return "Hey"
// Logging a string declaring what is being returned and adding the function with the word hey as the argument
console.log(
	"capitalizeASingleWord('hey') returns: " + capitalizeASingleWord('hey')
);

// Should return null
// Logging a string declaring what is being returned and adding the function with the words hey ho as the argument
console.log(
	"capitalizeASingleWord('hey ho') returns: " + capitalizeASingleWord('hey ho')
);

// rewrite of the function:

function capitalizeSingleWord(word) {
	if (word.match(' ')) {
		return null;
	} else {
		let firstLetter = word.charAt(0);
		const restOfWord = word.slice(1);
		firstLetter = firstLetter.toUpperCase();

		return firstLetter + restOfWord;
	}
}

console.log(`This will return "true": ${capitalizeSingleWord('HI!')}`);
console.log(`This will return "false": ${capitalizeSingleWord('HI THERE!')}`);
