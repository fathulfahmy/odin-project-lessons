// 3. FUNDAMENTALS PART 3

// 3 ways to declare functions

// function declaration
function myFunc(param) {
	return result;
}
// function expression
let myFunc = function (param) {
	return result;
};
// es6 arrow function
let myFunc = (param) => result;

function myFunc(parameter1, parameter2, parameter3 = defaultValue) {
	return a + (b * c) / d;

	// use parantheses to enter newline
	return a + 
	b * c 
	/ d;
}

// anonymous function has no function name
console.log(function () {
	return result;
});

// anonymous arrow function has no function name and function syntax
() => {
	return result;
};

// write function name and parantheses to call a function
myFunc();
