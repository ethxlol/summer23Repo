// the ... in the param makes it so we can add indefinite arguments to the function "The rest parameter"
// The grades in the param is a placeholder for the args that will be passed in the function when we call it
const avgGradesCalculator = (...grades) => {
	// Getting the length of the array that will be created
	const numberOfGrades = grades.length;
	// reduce is iterating over each index in the grade array, the grade array is being made as we pass the args,
	// is is the accumulated value after each iteration and it will + with the next index of grade, the value of acc is declared at the end as 0
	const sumGrades = grades.reduce((acc, grade) => acc + grade, 0);

	// we are then diving the sum of grades with the number of grades in the array
	const avgGrade = sumGrades / numberOfGrades;
	console.log(avgGrade);
};
// this is happening:  sumGrades: 0 +1 = 1 + 2 = 3 + 3 = 6
// numberOfGrades = 3 because there are 3 elements in the array.
// so finally 6 / 3
avgGradesCalculator(1, 2, 3); // outputs 2

// ----------------------------------------------------------------------------------------------------------------------------------------------------

// this is a function doing the same but with a for of loop instead:

const avgGradesCalculator2 = (...grades) => {
	// accumulator start at 0
	let sumGrades = 0;
	const numberOfGrades = grades.length;

	// grade being the value of the grades array made by the args in the calling of the function
	// sumGrades the accumulator
	// 0+1 = 1 +2 = 3 +3 = 6
	for (const grade of grades) {
		sumGrades += grade;
	}

	const avgGrade = sumGrades / numberOfGrades;
	console.log(avgGrade);
};

avgGradesCalculator2(1, 2, 3); // Output: 2

// ----------------------------------------------------------------------------------------------------------------------------------------------------

const avgGradesCalculator3 = (...grades) => {
	// accumulator start with 0
	let sumGrades = 0;
	const numberOfGrades = grades.length;
	// 0 + 1 = 1 + 2 = 3 + 3 = 6
	// doing the same as reduce grade being the value and sumGrades being the accumulator
	grades.forEach((grade) => {
		sumGrades += grade;
	});

	const avgGrade = sumGrades / numberOfGrades;
	console.log(avgGrade);
};

avgGradesCalculator3(1, 2, 3); // Output: 2

function makeGreeting(string) {
	//Write your code here
	return function (string2) {
		return string + ' ' + string2;
	};
}
let hello = makeGreeting('Hello');
let helloWorld = hello('World');
console.log(helloWorld);
