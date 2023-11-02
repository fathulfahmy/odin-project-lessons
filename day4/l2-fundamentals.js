// 2. FUNDAMENTALS PART 2

// DECLARATION
let string1 = "hello world";
let string2 = "hello world";
let string3 = `hello world`;

// BACKTICKS
let string4 = "hello";
let string5 = "world";
console.log(`${string4} ${string5}!`);

// ESCAPE CHAR
console.log('a sample of a long text and this "quote" should be displayed');

// NEWLINE
console.log("a sample of a long text\n and this should be in a newline");
console.log(`a sample of a long text
and this should be in a newline`);

// COMPARISON
alert(2 > 1);
alert("2" > 1); // comparison operation convert string to integer
alert("Z" > "A");

const a = 0;
const b = "0";
alert(Boolean(a));
alert(Boolean(b)); // string returns true

alert(null == 0); // equality operator does not convert
alert(null >= 0); // comparison operator convert null to 0
alert(undefined >= 0); // comparison operator convert undefined to NaN

// OR ||
alert(false || true || false || true); // alert first truthy found
alert(false || false || false || false); // alert last value when theres no truthy

// AND &&
alert(true && false && false && true); // alert first falsy found
alert(false && false && false && false); // alert last value when theres no truthy

// CONDITIONALS
if (firstCondition === true) {
	console.log("if first is true");
} else if (secondCondition === true) {
	console.log("if second is true");
} else {
	console.log("if none is true");
}

switch (switchCondition) {
	case selection1:
		// run if switchCondition === selection1
		break;
	case selection2:
		// run if switchCondition === selection2
		break;

	case selection1group1:
	case selection2group1:
		// run if switchCondition === selection1group1 or selection2group2
		break;
	default:
	// run if no selection
}

condition == true ? console.log("this if true") : console.log("this if false");
