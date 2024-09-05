const fibonacci = require('../src/fibonacci');

test('returns [0] for input 1', () => {
    expect(fibonacci(1)).toEqual([0]);
});

test('returns [0, 1] for input 2', () => {
    expect(fibonacci(2)).toEqual([0, 1]);
});

test('returns [0, 1, 1] for input 3', () => {
    expect(fibonacci(3)).toEqual([0, 1, 1]);
});

test('returns [0, 1, 1, 2, 3] for input 5', () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
});