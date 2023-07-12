// we fixed this by checking documentation on string.repeat, initially we returned string.repeat() with no number passed in the argument causing it not to work
// Link to String.repeat() documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function doubleString(string) {
	return string.repeat(2);
}

// Should return 'echoecho'
console.log("doubleString('echo') returns: " + doubleString('echo'));
