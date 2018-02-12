const reverse = require('./reverseString');

it('reverses the string', () => {
  expect(reverse('hello')).toBe('olleh');
});
