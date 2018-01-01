import React from 'react';
import basicComponentTests, {
  createStoreMock,
} from 'tests/basicComponentTests';
import AddTodo from '../';

describe('AddTodo', () => {
  basicComponentTests(<AddTodo store={createStoreMock()} />);
});
