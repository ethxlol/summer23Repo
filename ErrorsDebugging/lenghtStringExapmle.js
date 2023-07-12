// if the string is less than the max length AND greater than or equal to the max length

// function isStringPerfectLength(string, minLength, maxLength) {
// 	let stringLength = string.length;

// 	if (stringLength < minLength) {
// 		return false;
// 	} else if (stringLength > maxLength) {
// 		return false;
// 	} else {
// 		return true;
// 	}
// }

// This is better in my opinion
function isStringPerfectLength(string, minLength, maxLength) {
	let stringLength = string.length;
	if (stringLength >= minLength && stringLength <= maxLength) {
		return true;
	} else {
		return false;
	}
}

// Should return true
console.log(
	"isStringPerfectLength('Dog', 2, 4) returns: " +
		isStringPerfectLength('Dog', 2, 4)
);

// Should return false
console.log(
	"isStringPerfectLength('Mouse', 2, 4) returns: " +
		isStringPerfectLength('Mouse', 2, 4)
);

// Should return false
console.log(
	"isStringPerfectLength('Cat', 4, 9) returns: " +
		isStringPerfectLength('Cat', 4, 9)
);

function calculateSqrt(input) {
	if (isNaN(input)) {
		return false;
	} else {
		return Math.sqrt(input);
	}
}

console.log(calculateSqrt(3 ** 2));
