const calculator = require('./calculator');

const myCalculator = calculator();

it('adds two numbers together', () => {
  const add = myCalculator.add;
  expect(add(2,2)).toBe(4);
});

it('subtracts two numbers', () => {
  const subtract = myCalculator.subtract;
  expect(subtract(3,1)).toBe(2);
});

it('multiplys two numbers', () => {
  const multiply = myCalculator.multiply;
  expect(multiply(2,3)).toBe(6);
});


it('divides two numbers', () => {
  const divide = myCalculator.divide;
  expect(divide(12,3)).toBe(4);
});

it('should not divide by 0', () => {
  const divide = myCalculator.divide;
  expect(divide).toThrow();
});
