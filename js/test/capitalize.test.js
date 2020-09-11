import capitalize from '../capitalize';

test('It should capitalize the passed in string', () => {
  expect(capitalize('test')).toMatch('Test');
});

test('It should only affect the first character', () => {
  expect(capitalize('test').slice(1)).toMatch('est');
});

test('It should throw an error when not given a string', () => {
  expect(() => capitalize(123)).toThrow(TypeError);
});