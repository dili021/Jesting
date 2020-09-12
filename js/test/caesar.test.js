import caesarize from '../caesar';

test('It should encrypt the received string', () => {
  expect(caesarize('test', 3)).not.toMatch('test');
});

test('It should decrypt the string when the result is passed with the opposite value', () => {
  expect(caesarize('whvw', -3)).toMatch('test');
});

test('It should offset each letter by the given value', () => {
  expect(caesarize('abc', 1)).toMatch('bcd');
});

test('It should accept negative values', () => {
  const wrapper = () => caesarize('no error here', -10);
  expect(wrapper).not.toThrow(Error);
});

test('It should account for alphabet wrapping', () => {
  expect(caesarize('a', -1)).toMatch('z');
});

test('It should account for lower and upper case', () => {
  expect(caesarize('rEtArDcAsE', 1)).toMatch('sFuBsEdBtF');
});
