const { concatArray } = require('./concatArray');

describe('concatArray', () => {
    test('concatenates with default comma separator', () => {
        expect(concatArray(["Red", "Green", "White", "Black"])).toBe("Red,Green,White,Black");
    });

    test('concatenates with no separator', () => {
        expect(concatArray(["Red", "Green", "White", "Black"], '')).toBe("RedGreenWhiteBlack");
    });

    test('concatenates with a custom separator', () => {
        expect(concatArray(["Red", "Green", "White", "Black"], ' ')).toBe("Red Green White Black");
    });
});


//for the test i do:npx jest concatArray.test.js