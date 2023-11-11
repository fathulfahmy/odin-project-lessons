// https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

// take a number and return the sum of all numbers
// from 1 up to the number passed in
// sumRange(3) returns 6, since 1 + 2 + 3 = 6.

https: function sumRange(num) {
	if (num <= 1) {
		return 1;
	}
	return num + sumRange(num - 1);
	// return 3 + ( return 2 + ( return 1 ) )
}
console.log('sumRange: ' + sumRange(3));

function altToSumRange(num, total = 0) {
	if (num <= 0) {
		return total;
	}
	return altToSumRange(num - 1, total + num);
	// ( 2, total = 3 ) -> ( 1, total = 5 ) -> ( 0, total = 6 )
	// return 6 <- return 6 <- return 6
}
console.log('altToSumRange: ' + altToSumRange(3));

// takes in a base and an exponent
// If the exponent is 0, return 1.
// console.log(power(2, 3)); 8
// console.log(power(2, 2)); 4
// console.log(power(2, 1)); 2
// console.log(power(2, 0)); 1

function power(base, exponent) {
	if (exponent == 0) {
		return 1;
	}
	return base * power(base, exponent - 1);
	// return 2 * (return 2 * (return 2 * (return 1)))
}
console.log('power: ' + power(2, 3));
