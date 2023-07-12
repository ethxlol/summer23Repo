// using StackOverflow to check how we could fix this with link: https://stackoverflow.com/questions/1789945/how-to-check-whether-a-string-contains-a-substring-in-javascript
// Returns whether or not the provided string contains a substring of "cake" in it.

// This was my way of writing it, maybe a little over complicated
function containsCake(string) {
	const substring = 'cake';
	if (string.includes(substring)) {
		return true;
	} else {
		return false;
	}
}

// Another way to write this:
// function containsCake(string) {
// return string.includes('cake');

// Should return true
console.log(
	"containsCake('I think cake is my soul mate.') returns: " +
		containsCake('I think cake is my soul mate.')
);

// Should return false
console.log(
	"containsCake('Pie is certainly the coolest dessert.') returns: " +
		containsCake('Pie is certainly the coolest dessert.')
);
