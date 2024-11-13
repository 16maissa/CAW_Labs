
const { last } = require('./last');

describe('last', () => {
    test('returns the last n elements of the array when n is positive', () => {
        expect(last([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
    });

    test('returns an empty array when array is null or undefined', () => {
        expect(last(null, 3)).toEqual([]);
        expect(last(undefined, 3)).toEqual([]);
    });

    test('returns only the last element if n is not provided', () => {
        expect(last([1, 2, 3])).toBe(3);
    });

    test('returns the entire array if n is greater than array length', () => {
        expect(last([1, 2, 3], 5)).toEqual([1, 2, 3]);
    });

    test('returns an empty array if n is 0', () => {
        expect(last([1, 2, 3], 0)).toEqual([]);
    });
});




//for the test i do:npx jest last.test.js