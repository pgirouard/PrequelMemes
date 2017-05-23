import { PrequelMemesPage } from './app.po';

describe('prequel-memes App', () => {
  let page: PrequelMemesPage;

  beforeEach(() => {
    page = new PrequelMemesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
