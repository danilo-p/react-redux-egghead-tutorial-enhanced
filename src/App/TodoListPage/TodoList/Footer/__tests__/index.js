import React from 'react';
import { Provider } from 'react-redux';
import { INITIAL_STATE } from 'common/ducks';
import configureMockStore from 'redux-mock-store';
import Footer from '../';
import FilterLink from '../FilterLink';

const mockStore = configureMockStore();

describe('Footer', () => {
  let footer = null;
  let store = null;

  beforeEach(() => {
    store = mockStore(INITIAL_STATE);

    footer = (
      <Provider store={store}>
        <Footer />
      </Provider>
    );

    footer = mount(footer).find(Footer).first();
  });

  it('should always render one paragraph', () => {
    expect(footer.find('p').length).toBe(1);
  });

  it('should always render exactly 3 FilterLink\'s', () => {
    expect(footer.find(FilterLink).length).toBe(3);
  });

  it('should always render a FilterLink with "filter" property set to' +
    '"SHOW_ALL"', () => {
    expect(footer
      .find(FilterLink)
      .map(fl => fl.props())
      .filter(p => p.filter === 'SHOW_ALL')
      .length).toBe(1);
  });
});
