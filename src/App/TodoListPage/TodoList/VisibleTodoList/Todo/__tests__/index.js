import React from 'react';
import basicComponentTests from 'tests/basicComponentTests';
import Todo from '../';

describe('Todo', () => {
  const component = (
    <Todo
      completed={false}
      text="test"
      onClick={jest.fn()}
    />
  );
  basicComponentTests(component);
});
