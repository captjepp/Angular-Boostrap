import { OperatorPage } from './app.po';

describe('operator App', function() {
  let page: OperatorPage;

  beforeEach(() => {
    page = new OperatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
