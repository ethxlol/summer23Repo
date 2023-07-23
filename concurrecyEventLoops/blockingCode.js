// This is an example of blocking code, so the program will run synchronously:
// The first console.log will run, then the for loop will execute which creates a significant delay because it's a lengthy operation.
// The second console.log will only run after the for loop has completely finished its execution.
// This will result in blocking code because the for loop prevents the execution of subsequent operations until it's done.
console.log("I'm learning about");

for (let idx = 0; idx < 9999999999; idx++) {}

// The second console.log() statement is delayed by the for loop's execution.
console.log('the Event Loop');

switch (key) {
	case 1:
		return 'ear';
		break;
	case 2:
		return 'nose';
		break;
	case 3:
		return 'legs';
		break;
	default:
		break;
}
