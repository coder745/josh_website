import Api from "./api"


describe('#getData', () => {
  it('works', () => {
    mocked = jest.mock(new Api())
    mocked.getData("www.google.com")
      .then(data => expect(data).toEqual('Mark'));
  });
});
