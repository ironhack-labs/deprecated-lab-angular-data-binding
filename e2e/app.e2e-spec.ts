import { LabAngularDataBindingPage } from './app.po';

describe('lab-angular-data-binding App', () => {
  let page: LabAngularDataBindingPage;

  beforeEach(() => {
    page = new LabAngularDataBindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
