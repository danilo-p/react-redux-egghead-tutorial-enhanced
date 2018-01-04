import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { INITIAL_STATE } from 'common/ducks';
import TodoListPage from '../TodoListPage';
import App from '../';

const mockStore = configureMockStore();

describe('App', () => {
  let app = null;
  let store = null;

  beforeEach(() => {
    store = mockStore(INITIAL_STATE);
    app = mount(<App store={store} />);
  });

  it('should render the component', () => {
    expect(app).toMatchSnapshot();
  });

  it(
    'should always render a "Provider" component that contains everything else',
    () => {
      expect(app.find(Provider).length).toBeGreaterThan(0);
    },
  );

  it('should always render a "TodoListPage" component', () => {
    expect(app.find(TodoListPage).length).toBeGreaterThan(0);
  });
});
