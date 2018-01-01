import React from 'react';
import basicComponentTests, {
  createStoreMock,
} from 'tests/basicComponentTests';
import FilterLink from '../FilterLink';

describe('FilterLink', () => {
  const component = (
    <FilterLink
      active={false}
      onClick={jest.fn()}
      store={createStoreMock()}
    >A test link
    </FilterLink>
  );
  basicComponentTests(component);
});
