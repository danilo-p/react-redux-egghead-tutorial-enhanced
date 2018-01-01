import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import { INITIAL_STATE } from 'common/ducks';
import configureMockStore from 'redux-mock-store';
import AddTodo from '../';

const mockStore = configureMockStore();

describe('AddTodo', () => {
  let renderedAddTodo;

  const addTodo = (options = { render: mount }) => {
    if (!renderedAddTodo) {
      renderedAddTodo = options
        .render(<AddTodo store={mockStore(INITIAL_STATE)} />);
    }

    return renderedAddTodo;
  };

  beforeEach(() => {
    renderedAddTodo = undefined;
  });

  it('should shallow render the component', () => {
    expect(addTodo({ render: shallow })).toMatchSnapshot();
  });

  it('always renders a div that contains everything else', () => {
    const divs = addTodo().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  it('always renders a "Input"', () => {
    expect(addTodo().find(Input).length).toBe(1);
  });

  it('always renders a "Button"', () => {
    expect(addTodo().find(Button).length).toBe(1);
  });

  describe('when the user is typing', () => {
    const input = addTodo().find(Input).first();
    const value = 'User typing';
    const eventMock = { event: { target: { value } } };

    input.simulate('change', eventMock);
    addTodo().update();

    it('should update the input value', () => {
      expect(input.props().value).toBe(value);
    });

    it('should update the state value', () => {
      throw new Error('To be implemented');
    });
  });

  describe('when the user hits the "Enter" key', () => {
    it('should dispatch a new ADD_TODO action', () => {
      throw new Error('To be implemented');
    });

    it('clear the state value', () => {
      throw new Error('To be implemented');
    });
  });

  // // A Input is always rendered. It receives value, onChange and onKeyPress
  // // A Button is always rendered. It receives onClick
});
