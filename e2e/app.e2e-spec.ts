import { RecipeAppTutorialPage } from './app.po';

describe('recipe-app-tutorial App', () => {
  let page: RecipeAppTutorialPage;

  beforeEach(() => {
    page = new RecipeAppTutorialPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
