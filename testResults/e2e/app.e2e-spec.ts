import { TestResultsPage } from './app.po';

describe('test-results App', function() {
  let page: TestResultsPage;

  beforeEach(() => {
    page = new TestResultsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
