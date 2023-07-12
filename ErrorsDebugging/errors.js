myVariable++;
// 1 - What type of error will be thrown on the line above: ReferenceError // This is because myVariable was not declared anywhere

const myString = 42;
myString.substring(0);
// 2 - What type of error will be thrown on the line above: TypeError // We are trying to use a substring method, when the variable value holds integers

const myRandomNumber; = Math.random();
// 3 - What type of error will be thrown on the line above: SyntaxError // The error is because there is a semicolon on the end of the variable name, so js thinks that the variable is finished, we then proceeded to add math.random to it 