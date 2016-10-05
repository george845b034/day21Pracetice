import { Day21PraceticePage } from './app.po';

describe('day21-pracetice App', function() {
  let page: Day21PraceticePage;

  beforeEach(() => {
    page = new Day21PraceticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
