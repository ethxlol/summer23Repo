// below is faulty code

// function isSumBigger(number1, number2, total // SyntaxError: there is no closing parenthesis  {
//   const sum = number1 + number2;

//   if (numberSum // RefrenceError the numberSum is not declared it should be sum instead or change the above const to numberSum> total; // SyntaxError, there is a semicolon after total, shouldnt be there) {
//     return true;
//   } else {
//     return false;
//   }
// }

// After debugging:

// number 1 and 2 are placeholder for real numbers that we put in the call of the function so isSumBigger(1(number1),2(number2),3(total))
function isSumBigger(number1, number2, total) {
	// we then add the number 1 and 2 and store it in a variable called sum
	const sum = number1 + number2;

	// if the sum(number1 + number2) is greater than total(total being the placeholder for the last int passed in the call)
	if (sum > total) {
		return true;
	} else {
		return false;
	}
}

// Should return true
console.log('isSumBigger(1, 3, 2) returns: ' + isSumBigger(1, 3, 2));

// Should return false
console.log('isSumBigger(1, 3, 5) returns: ' + isSumBigger(1, 3, 5));
