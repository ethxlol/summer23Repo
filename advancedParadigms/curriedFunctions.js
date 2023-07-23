// this is a simple example of a curried function
// it's a function that is nested within another function.

// declaring a function add, with a single param (a),
// Then we are returning an anonymous function that takes (b) as a param
// we add the params together
const add = (a) => {
	return (b) => {
		console.log(a + b);
	};
};

// we have to use two separate ()() since there are two functions that are in essence being called to
add(1)(2);

// Curried example with variables in the same lexical scope:

// curriedMultiply has access to the arg for (a)
function curriedMultiply(a) {
	// has access to both a and b
	return function (b) {
		return a * b;
	};
}

// Declaring a local var and assigns its to a of curriedMultiply, but in lue of the a placeholder we are adding a number to make the function do something
let nestedFunction = curriedMultiply(10);
// Declaring a local var and assigns it to the anonymous nested function within the curriedMultiplier, so we are assigning the b placeholder with a number
// then we are multiplying a with b
let result = nestedFunction(5);
console.log(result);
