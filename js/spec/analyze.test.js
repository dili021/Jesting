// eslint disable import/no-unresolved
import analyze from '../analyze';

const tester = analyze([1, 2, 3, 4, 5]);

test('It should return a resulting object', () => {
  expect(typeof tester).toBe('object');
});

test('The object should have 4 properties', () => {
  expect(Object.keys(tester).length).toEqual(4);
});

test('The properties should be average, min, max, and length', () => {
  expect(Object.keys(tester)).toContain('average', 'min', 'max', 'length');
});