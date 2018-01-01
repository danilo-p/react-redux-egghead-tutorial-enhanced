import React from 'react';
import basicComponentTests, {
  createStoreMock,
} from 'tests/basicComponentTests';
import VisibleTodoList from '../';

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
