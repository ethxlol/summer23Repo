// This is an example of non-blocking code:
// The first console.log will run, then the setTimeout function will start on the next line but the setTimeout will schedule it for 2 seconds later.
// So it will go to the last line of code and complete that, and then 2 seconds into the future the setTimeout function will run the code within its body.
// This results in the output:
// "I’m learning about"
// "the"
// (2 seconds pause)
// "Event Loop"

console.log('I’m learning about');
setTimeout(() => {
	console.log('Event Loop');
}, 2000);
console.log('the');
