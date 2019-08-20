import Api from "./api"

test('returns the correct value', () => {
  let api = new Api();
  expect(api.test()).toBe('test');
});

describe('#getData', () => {
  beforeEach(() => {
    fetch.resetMocks();
  })
  it('returns the correct data', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))

    let api = new Api();
    let value = api.getData("www.example.com", function() {})
  });
});