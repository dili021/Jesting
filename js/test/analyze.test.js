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

test('Average gives the mean/average value of the given array', () => {
  expect(tester.average).toEqual(3);
});
test('Min gives the minimum value', () => {
  expect(tester.min).toEqual(1);
});
test('Max gives the maximum value', () => {
  expect(tester.max).toEqual(5);
});
test('Length gives the the number of elements in passed array', () => {
  expect(tester.length).toEqual(5);
});
