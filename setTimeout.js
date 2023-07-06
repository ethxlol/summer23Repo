// This is a string that will instantly log to the console
console.log('This is the first line of code in app.js.');
// arrowFunction STO (setTimeOut), we are just making the function print a string to the console
const usingSTO = () => {
	console.log('This is delayed by 3 seconds or 3000ms');
};
// This is the "spicy" part, we are using the setTimeout method to give it a delay
// in the setTimeout we need 2 params, one for what we are delaying and the next for the time it should be delayed in MS
// its cool because we can pass a function as an arg in this to give it a delay
setTimeout(usingSTO, 3000);

// This is a string that will instantly log to the console
console.log('This is the last line of code in app.js.');
