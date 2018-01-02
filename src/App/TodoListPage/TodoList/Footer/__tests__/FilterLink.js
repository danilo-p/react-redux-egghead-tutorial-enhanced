import React from 'react';
import { INITIAL_STATE } from 'common/ducks';
import { setVisibilityFilter } from 'common/ducks/visibilityFilter';
import { Button } from 'semantic-ui-react';
import configureMockStore from 'redux-mock-store';
import FilterLink from '../FilterLink';

const mockStore = configureMockStore();

describe('FilterLink', () => {
  let filterLink = null;
  let store = null;

  const filter = 'TEST_FILTER';
  const children = ['Test filter'];

  beforeEach(() => {
    store = mockStore(INITIAL_STATE);

    filterLink = (
      <FilterLink
        filter={filter}
        store={store}
      >
        {children}
      </FilterLink>
    );

    filterLink = mount(filterLink);
  });

  it('should render the component', () => {
    expect(filterLink).toMatchSnapshot();
  });

  it('should always render one Button', () => {
    const buttons = filterLink.find(Button);
    expect(buttons.length).toBe(1);
  });

  describe('the rendered Button', () => {
    let button = null;

    beforeEach(() => {
      button = filterLink.find(Button).first();
    });

    it('should render the passed children', () => {
      expect(button.children().length).toBe(children.length);
    });

    it('should dispatch a SET_VISIBILITY_FILTER action on click', () => {
      button.simulate('click');

      const actions = store.getActions();
      expect(actions.length).toBe(1);

      const setVisibilityFilterAction = actions[0];
      expect(setVisibilityFilterAction).toEqual(setVisibilityFilter(filter));
    });
  });
});
