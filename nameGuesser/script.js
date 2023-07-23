let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// We are generating a random whole int between 1-9
const generateTarget = () => {
	return Math.floor(Math.random) * 10;
};

// Checking difference from the hidden value and the number that human & computer guessed

const compareGuesser = (humanGuess, computerGuess, targetGuess) => {
	// Math.abs to get the value of the number even if there is a sign or something attached to it so -5 = 5
	// storing a value of the diffing between the guesses of the oppenents and the actual target number, closest(lowest number) wins.
	const humanDifference = Math.abs(targetGuess - humanGuess);
	const computerDifference = Math.abs(targetGuess - computerGuess);

	// true for win or false for loss
	if (humanDifference <= computerDifference) {
		return true;
	} else {
		return false;
	}
};

const updateScore = (winner) => {
	if (winner === 'human') {
		humanScore++;
	} else if (winner === 'computer') {
		computerScore++;
	}
};

const advanceRound = ()