const { first } = require('./first');

describe('first', () => {
    test('returns the first n elements of the array when n is positive', () => {
        expect(first([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
    });

    test('returns an empty array when array is null or undefined', () => {
        expect(first(null, 3)).toEqual([]);
        expect(first(undefined, 3)).toEqual([]);
    });

    test('returns an empty array when n is less than or equal to 0', () => {
        expect(first([1, 2, 3], 0)).toEqual([]);
        expect(first([1, 2, 3], -1)).toEqual([]);
    });

    test('returns only the first element if n is not provided', () => {
        expect(first([1, 2, 3])).toBe(1);
    });

    test('returns the entire array if n is greater than array length', () => {
        expect(first([1, 2, 3], 5)).toEqual([1, 2, 3]);
    });
});




//for the test i do:npx jest first.test.js