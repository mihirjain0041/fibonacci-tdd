const fibonacci = require('../src/fibonacci');

test('returns [0] for input 1', () => {
    expect(fibonacci(1)).toEqual([0]);
});

test('returns [0, 1] for input 2', () => {
    expect(fibonacci(2)).toEqual([0, 1]);
});