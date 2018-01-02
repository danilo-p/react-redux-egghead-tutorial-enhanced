import React from 'react';
import basicComponentTests, {
  createStoreMock,
} from 'tests/basicComponentTests';
import VisibleTodoList from '../';

// getVisibleTodos contract
// [x] should filter the todoslist based on the given filters:
// - SHOW_COMPLETED
// - SHOW_ACTIVE
// - SHOW_ALL
// [x] should return the same todoslist for any other filter

// mapStateToProps contract
// [ ] creates a "todosList" property
// [ ] the "todosList" should be a filtered array from the "todos" array by the "visibilityFilter"

// mapDispatchToProps contract
// [ ] creates a "onTodoClick" property
// [x] the "onTodoClick" method dispatch an TOGGLE_TODO action

// VisibleTodoList contract
// [ ] receive the "todosList" property
// [ ] receive the "onTodoClick" property
// [x] always renders one ul
// [x] always renders one "Todo" component for each item in the "todosList" property

describe('VisibleTodoList', () => {
  const component = (
    <VisibleTodoList
      todosList={[]}
      onTodoClick={jest.mock()}
      store={createStoreMock()}
    />
  );
  basicComponentTests(component);
});
