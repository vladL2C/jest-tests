const capitalize = require('./capitalize');

it('capitalizes a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});

it('capitalizes a string', () => {
  expect(capitalize('example')).toBe('Example');
});