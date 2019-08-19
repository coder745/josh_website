import Api from "./api"

test('returns the correct value', () => {
  let api = new Api();
  expect(api.test()).toBe('test');
});

describe('#getData', () => {
  it('returns the correct data', () => {

  });
});