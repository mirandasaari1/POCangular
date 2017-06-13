import { POCangularPage } from './app.po';

describe('pocangular App', () => {
  let page: POCangularPage;

  beforeEach(() => {
    page = new POCangularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
