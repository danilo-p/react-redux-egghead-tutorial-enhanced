import main from '../';

describe('main', () => {
  it('should bootstrap the app without crashing', () => {
    main(document.createElement('div'));
  });
});
