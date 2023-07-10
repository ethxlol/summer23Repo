const axios = require('axios');

// Sleep function (pauses execution for a specified amount of time)
const sleep = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

// Function to print words with delay
const printWords = async (words) => {
	for (let index = 0; index < words.length; index++) {
		console.log(`${index + 1}. ${words[index]}`);
		await sleep(1000); // Pauses execution for (x)ms
	}
};

async function getWords(word) {
	const response = await axios.get(
		// the 'datamuse' words with sl(sounds like)& max 10, 'datamuse' defaults 100 words if you dont specify
		`https://api.datamuse.com/words?sl=${word}&max=10`
	);
	const words = response.data.map((obj) => obj.word);

	// Call the function to print words with delay
	await printWords(words);
}

getWords('penis');
