import reverseString from '../reverseString';

test('It reverses a string', () => {
  expect(reverseString('reverse')).toMatch('esrever');
});

test('It throws an error when not given a string', () => {
  expect(() => reverseString(123)).toThrow(TypeError);
});