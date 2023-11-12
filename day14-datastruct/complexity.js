// big o notation gives worst case scenario as input grows
const smallArray = [0, 10, 20];
const largeArray = [0, 10, 20, 30, 40, 50, 60];

function getNumAtIndex(array, userIndex) {
	return `Num at [${userIndex}] is ${array[userIndex]}`;
}
console.log(getNumAtIndex(smallArray, 1)); // 1 step
console.log(getNumAtIndex(largeArray, 1)); // 1 step
// number of step is not changed as number of input increase
// O(1)

function getIndexFromNum(array, userNum) {
	let low = 0;
	let high = array.length - 1;

	while (low <= high) {
		let mid = low + (high - low) / 2;

		if (array[mid] == userNum) {
			return `${userNum} found at [${mid}]`;
		} else if (array[mid] < userNum) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
}
console.log(getIndexFromNum(smallArray, 20)); // 2 step
console.log(getIndexFromNum(largeArray, 20)); // 3 step
// number of step increased by 1 as number of input doubles
// O(log n)

function getTotalNum(array) {
	let total = 0;
	for (let index = 0; index < array.length; index++) {
		total += array[index];
	}
	return `Total num is ${total}`;
}
console.log(getTotalNum(smallArray)); // 2 step
console.log(getTotalNum(largeArray)); // 6 step
// number of step increase same as number of input
// O(n)

// O(n log n) may be O(log n) nested in O(n)
// O(n ^ x) may be O(n) nested in O(n)
// O(2 ^ n) number of steps doubles as the input increase by 1
// O(n!) number of step is n * n-1 * n-2 ... * 1