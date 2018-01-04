import React from 'react';
import { INITIAL_STATE } from 'common/ducks';
import { createTodoId, TOGGLE } from 'common/ducks/todos';
import configureMockStore from 'redux-mock-store';
import VisibleTodoList, {
  getVisibleTodos,
  mapDispatchToProps,
} from '../';
import Todo from '../Todo';

const mockStore = configureMockStore();

describe('VisibleTodoList', () => {
  let visibleTodoList = null;
  let store = null;
  const todosList = [];

  for (let i = 1; i <= 5; i += 1) {
    const text = `Todo ${i}`;
    todosList.push({
      id: createTodoId(text),
      text,
      completed: i % 2 === 0,
    });
  }

  Object.freeze(todosList);

  beforeEach(() => {
    store = mockStore(Object.assign(INITIAL_STATE, {
      todos: todosList,
      filter: 'SHOW_ALL',
    }));

    visibleTodoList = mount(<VisibleTodoList store={store} />);
  });

  it('should render the component', () => {
    expect(visibleTodoList).toMatchSnapshot();
  });

  it('always render one "ul" element with everything else', () => {
    expect(visibleTodoList.find('ul').length).toBeGreaterThan(0);
  });

  it('always render one "Todo" element for each todo on the state', () => {
    expect(visibleTodoList.find(Todo).length)
      .toBe(store.getState().todos.length);
  });

  it(
    'should dispatch an TOGGLE_TODO action on a Todo click with the todo id',
    () => {
      const todoId = todosList[0].id;

      const todo = visibleTodoList
        .find('ul')
        .findWhere(node => node.props().id === todoId)
        .first();

      console.log(todo.props());

      todo.simulate('click');

      setTimeout(() => { // Wait for state update
        const actions = store.getActions();

        expect(actions.length).toBe(1);

        const action = actions[0];

        expect(action.type).toBe(TOGGLE);
        expect(action.id).toBe(todoId);
      }, 1000);
    },
  );

  describe('getVisibleTodos', () => {
    it(
      'should return only completed items for the SHOW_COMPLETED filter',
      () => {
        const filteredArray = getVisibleTodos(todosList, 'SHOW_COMPLETED');
        const completedCount =
          filteredArray.reduce((count, todo) => (
            todo.completed
              ? count + 1
              : count
          ), 0);
        expect(completedCount).toBe(filteredArray.length);
      },
    );

    it('should return only active items for the SHOW_ACTIVE filter', () => {
      const filteredArray = getVisibleTodos(todosList, 'SHOW_ACTIVE');
      const activeCount =
          filteredArray.reduce((count, todo) => (
            !todo.completed
              ? count + 1
              : count
          ), 0);
      expect(activeCount).toBe(filteredArray.length);
    });

    it('should return all items for the SHOW_ALL and any other filter', () => {
      let filteredArray = [];

      filteredArray = getVisibleTodos(todosList, 'SHOW_ALL');
      expect(filteredArray.length).toBe(todosList.length);

      filteredArray = getVisibleTodos(todosList, 'ANY_OTHER_FILTER');
      expect(filteredArray.length).toBe(todosList.length);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should dispatch an TOGGLE_TODO action with the given id', () => {
      const todoText = 'Todo text';
      const todoId = createTodoId(todoText);

      mapDispatchToProps(store.dispatch).onTodoClick(todoId);

      const actions = store.getActions();

      expect(actions.length).toBe(1);

      const action = actions[0];

      expect(action.type).toBe(TOGGLE);
      expect(action.id).toBe(todoId);
    });
  });
});
