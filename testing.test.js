const RomanNumerals = require("./roman-numerals")

describe('RomanNumerals', () => {
	test('Returns the correct Roman numeral of the given normal number', () => {
		expect(RomanNumerals(1)).toEqual('I');
		expect(RomanNumerals(6)).toEqual('VI');
		expect(RomanNumerals(10)).toEqual('X');
		expect(RomanNumerals(19)).toEqual('XIX');
		expect(RomanNumerals(100)).toEqual('C');

	});
    test('Returns zero if the given number is equal to zero ', () => {
		expect(RomanNumerals(0)).toEqual(0);
	});
    test('Returns number is too large if the given number is more than 3999 ', () => {
		expect(RomanNumerals(4000)).toEqual('number is too large');
	});
    test('Returns number is required if a string is given ', () => {
		expect(RomanNumerals("Amina")).toEqual('number is required');
	});

});