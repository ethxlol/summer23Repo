// Importing axios with a require statement for node.js syntax
const axios = require('axios');

async function getWords(word) {
	// Make an HTTP GET request to the Datamuse API, await the response, and store it in the 'response' variable
	const response = await axios.get(`https://api.datamuse.com/words?sl=${word}`); // *this is a promise*

	// Extract the list of returned words from the response data. The 'map' function is used to create a new array that consists of the 'word' property from each object in the response data
	const words = response.data.map((obj) => obj.word);

	// For debugging purposes, log the entire response data to the console
	console.log(response.data);

	// Also for debugging, log the newly created array of words
	console.log(words);

	// Iterate over each word in the 'words' array with the 'forEach' method.
	// The 'forEach' method executes a provided function once for each array element.
	// In this case, it's logging each word along with its index in the format 'index. word'.
	words.forEach((word, index) => {
		console.log(`${index + 1}. ${word}`);
	});

	// An alternative way to display the list of words would be to join them into a single string with commas and spaces between each word, and then log that string to the console.
	// This line is currently commented out.
	// console.log(words.join(', '));
}

// Call the 'getWords' function with 'rain' as the argument, which will start the process of making the request to the Datamuse API.
getWords('renate');
