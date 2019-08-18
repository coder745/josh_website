const Api = require('./api');

test('returns the correct value', () => {
  let api = new Api();
  expect(api.test()).toBe('test');
});