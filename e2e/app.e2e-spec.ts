import { TwitchGuiAngularPage } from './app.po';

describe('twitch-gui-angular App', () => {
  let page: TwitchGuiAngularPage;

  beforeEach(() => {
    page = new TwitchGuiAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
