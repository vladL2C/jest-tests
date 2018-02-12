const analyze = require('./analyze');

//setup
const array = [1,8,3,4,2,6];
const analyzedObject = analyze(array);


it('has a object property average', () => {
  expect(analyzedObject.average).toBe(4);
});

it('has a object property min', () => {
  expect(analyzedObject.min).toBe(1);
});

it('has a object property max', () => {
  expect(analyzedObject.max).toBe(8);
});

it('has a object property length', () => {
  expect(analyzedObject.length).toBe(6);
});