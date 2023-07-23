// This is how we can add a error message ourself

// this error will allow other code to run, will prompt a soft error
console.log(new Error('User missing name'));

console.log('Will logging the error stop our program from running?');

// This error will make all other code past it not run
throw Error('Username or password does not match');
console.log('this is not the error');
