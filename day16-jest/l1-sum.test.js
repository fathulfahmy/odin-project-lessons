const sum = require('./l1-sum');

test('1 + 2 expected to be 3', () => {
	expect(sum(1, 2)).toBe(3);
	// check exact equality ===
});

test('1 + 2 expected to equal to 3', () => {
	expect(sum(1, 2)).toEqual(3);
	// check value equality ==
});

test('1 + 2 expected not to be 0', () => {
	expect(sum(1, 2)).not.toBe(0);
	// check value equality ==
});

test('value is null', () => {
	const value = null;
	expect(value).toBeNull();
	expect(value).not.toBeUndefined();
	expect(value === null).toBeTruthy();
	expect(value === null).not.toBeFalsy();
});

test('2 + 2 expected to be greater than 3', () => {
	expect(sum(2, 2)).toBeGreaterThan(3);
});

test('2 + 2 expected to be greater or equal to 4', () => {
	expect(sum(2, 2)).toBeGreaterThanOrEqual(4);
});

test('2 - 2 expected to be less than 3', () => {
	expect(sum(2, 2 * -1)).toBeLessThan(3);
});

test('2 - 2 expected to be less or equal to 0', () => {
	expect(sum(2, 2 * -1)).toBeLessThanOrEqual(0);
});

test('name is expected not to have symbols', () => {
	const name = 'Fathul';
	expect(name).not.toMatch(/[^a-zA-Z]/);
});

const carBrand = ['proton', 'perodua', 'honda', 'toyota'];

test('car brand is expected to have proton and perodua', () => {
	expect(carBrand).toContain('proton');
	expect(carBrand).toContain('perodua');
});

function checkInputType(errorMessage) {
	throw new Error(errorMessage);
}
test('input type checker is expected to throw error', () => {
	expect(() => checkInputType('Invalid input type!')).toThrow();
	expect(() => checkInputType('Invalid input type!')).toThrow(Error);
});
