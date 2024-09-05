const fibonacci = require('../src/fibonacci');

test('returns [0] for input 1', () => {
    expect(fibonacci(1)).toEqual([0]);
});
