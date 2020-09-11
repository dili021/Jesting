import calculator from '../calculator';

test('It should perform addition, subtraction, multiplication, and division', () => {
  expect(Object.keys(calculator)).toContain(
    'add',
    'subtract',
    'multiply',
    'divide',
  );
});

test('It should return the passed number if only 1 is passed', () => {
  expect(calculator.add(5)).toEqual(5);
});

test('It should add together any number of passed numbers', () => {
  expect(calculator.add(1, 2, 3, 4, 5)).toEqual(15);
});

test('It should subtract any number of passed numbers', () => {
  expect(calculator.subtract(1, 2, 3, 4, 5)).toEqual(-13);
});

test('It should multiply any number of passed numbers', () => {
  expect(calculator.multiply(1, 2, 3, 4, 5)).toEqual(120);
});
test('It should return NaN when used with strings', () => {
  expect(calculator.multiply(1, 'one')).toBe(NaN);
});

test('It should divide any number of passed numbers', () => {
  expect(calculator.divide(1, 2, 3, 4, 5)).toEqual(0.008333333333333333);
});
