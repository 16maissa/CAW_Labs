
const { mean } = require('./notation');

describe('mean', () => {
  test('calculates the mean of an array of numbers', () => {
    const scores = [85, 106, 65, 92, 88];
    expect(mean(scores)).toBe(87.2);
  });

  test('returns 0 for an empty array', () => {
    expect(mean([])).toBe(0);
  });

  test('returns 0 if input is not an array', () => {
    expect(mean(null)).toBe(0);
    expect(mean("string")).toBe(0);
    expect(mean(123)).toBe(0);
  });
});
