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
    fetch.mockResponseOnce({ json: function() {
      return "test";
    }});

    let api = new Api();
    api.getData('www.example.com').then(res => {
      expect(res.data).toBe('test');
    });
  });
});

describe('#tags', () => {
  beforeEach(() => {
    fetch.resetMocks();
  })
  it('returns the correct data', () => {
    fetch.mockResponseOnce({ json: function() {
      return "test";
    }});

    let api = new Api();
    api.tags('www.example.com').then(res => {
      expect(res.data).toBe('test');
    });
  });
});