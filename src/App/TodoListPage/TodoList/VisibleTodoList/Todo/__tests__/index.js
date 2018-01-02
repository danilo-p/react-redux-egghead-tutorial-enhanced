import React from 'react';
import Checkbox
  from 'semantic-ui-react/dist/commonjs/modules/Checkbox/Checkbox';
import Todo from '../';

describe('Todo', () => {
  let todo = null;
  const text = 'The todo content';

  beforeEach(() => {
    todo = mount(<Todo text={text} completed={false} onClick={jest.fn()} />);
  });

  it('should render the component', () => {
    expect(todo).toMatchSnapshot();
  });

  it('always renders one li that contains everything else', () => {
    const lis = todo.find('li');
    expect(lis.length).toBeGreaterThan(0);
  });

  it('always renders a "CheckBox"', () => {
    expect(todo.find(Checkbox).length).toBe(1);
  });

  describe('the rendered "Checkbox"', () => {
    it('should be labeled with the "text" property', () => {
      expect(todo
        .find(Checkbox).first()
        .find('label').first()
        .text()).toBe(text);
    });
  });
});
