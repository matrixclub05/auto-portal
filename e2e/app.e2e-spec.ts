import { AutoConceptPage } from './app.po';

describe('auto-concept App', function() {
  let page: AutoConceptPage;

  beforeEach(() => {
    page = new AutoConceptPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
