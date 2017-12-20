import { createStore } from 'redux';
import rootReducer from '../index';
import todo from '../todo';
import todos from '../todos';
import visibilityFilter from '../visibilityFilter';

const store = createStore(rootReducer);

describe('rootReducer', () => {
  it('should match the initial store state with the initial reducer value', () => {
    expect(store.getState().todo)
      .toEqual(todo(undefined, {}));
    expect(store.getState().todos)
      .toEqual(todos(undefined, {}));
    expect(store.getState().visibilityFilter)
      .toEqual(visibilityFilter(undefined, {}));
  });
});
