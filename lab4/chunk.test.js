const { chunk } = require('./chunk');

describe('chunk', () => {
    test('divides an array into sub-arrays of the given size', () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    test('handles array length not evenly divisible by size', () => {
        expect(chunk([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
    });

    test('returns the original array when size is larger than array length', () => {
        expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
    });

    test('returns empty array if given an empty array', () => {
        expect(chunk([], 3)).toEqual([]);
    });

    test('returns each element in its own array if size is 1', () => {
        expect(chunk([1, 2, 3, 4], 1)).toEqual([[1], [2], [3], [4]]);
    });

    test('returns an empty array when size is 0 or negative', () => {
        expect(chunk([1, 2, 3], 0)).toEqual([]);
        expect(chunk([1, 2, 3], -1)).toEqual([]);
    });
});


//for the test i do:npx jest chunk.test.js