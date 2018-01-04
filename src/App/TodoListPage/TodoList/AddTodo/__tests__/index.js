import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import { INITIAL_STATE } from 'common/ducks';
import { addTodo as addTodoActionCreator } from 'common/ducks/todos';
import configureMockStore from 'redux-mock-store';
import AddTodo from '../';

const mockStore = configureMockStore();

describe('AddTodo', () => {
  let addTodo = null;
  let store = null;

  beforeEach(() => {
    store = mockStore(INITIAL_STATE);
    addTodo = mount(<AddTodo store={store} />);
  });

  it('should render the component', () => {
    expect(addTodo).toMatchSnapshot();
  });

  it('always renders a div that contains everything else', () => {
    const divs = addTodo.find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  it('always renders a "Input"', () => {
    expect(addTodo.find(Input).length).toBe(1);
  });

  it('always renders a "Button"', () => {
    expect(addTodo.find(Button).length).toBe(1);
  });

  describe('when the user is typing', () => {
    const changeInputValue = (value) => {
      const input = addTodo.find(Input).first();
      const eventMock = { target: { value } };
      input.find('input').first().simulate('change', eventMock);
    };

    const hitKey = (key) => {
      const input = addTodo.find(Input).first();
      const eventMock = { key };
      input.find('input').first().simulate('keyPress', eventMock);
    };

    it('should update the input value', () => {
      const value = 'Lorem ipsum dolor';
      changeInputValue(value);
      setTimeout(() => { // Wait for state update
        expect(addTodo.state().inputText).toBe(value);
      }, 1000);
    });

    describe('and hits any other key that is not "Enter"', () => {
      it('should update the input value with the typed key', () => {
        const key = 'A';
        hitKey(key);
        setTimeout(() => { // Wait for state update
          expect(addTodo.state().inputText).toBe(key);
        }, 1000);
      });
    });

    describe('and tries to add a new todo', () => {
      const value = 'Lorem ipsum dolor';

      describe('hiting the "Enter" key', () => {
        describe('and the input is empty', () => {
          it('should not dispatch any action', () => {
            hitKey('Enter');
            setTimeout(() => { // Wait for state update
              expect(store.getActions().length).toBe(0);
            }, 1000);
          });
        });

        describe('and the input is not empty', () => {
          beforeEach(() => {
            changeInputValue(value);
            hitKey('Enter');
          });

          it('should dispatch a new ADD_TODO action', () => {
            setTimeout(() => { // Wait for state update
              const actions = store.getActions();
              expect(actions.length).toBe(1);

              const addTodoAction = actions[0];
              expect(addTodoAction)
                .toEqual(addTodoActionCreator(value, addTodoAction.id));
            }, 1000);
          });

          it('should clear the state value', () => {
            setTimeout(() => { // Wait for state update
              expect(addTodo.state().inputText).toBe('');
            }, 1000);
          });
        });
      });

      describe('clicking on the "Add Todo" button', () => {
        const clickAddTodoButton = () => {
          const button = addTodo.find(Button).first();
          button.simulate('click');
        };

        describe('and the input is empty', () => {
          it('should not dispatch any action', () => {
            clickAddTodoButton();
            setTimeout(() => { // Wait for state update
              expect(store.getActions().length).toBe(0);
            }, 1000);
          });
        });

        describe('and the input is not empty', () => {
          beforeEach(() => {
            changeInputValue(value);
            clickAddTodoButton();
          });

          it('should dispatch a new ADD_TODO action', () => {
            setTimeout(() => { // Wait for state update
              const actions = store.getActions();
              expect(actions.length).toBe(1);

              const addTodoAction = actions[0];
              expect(addTodoAction)
                .toEqual(addTodoActionCreator(value, addTodoAction.id));
            }, 1000);
          });

          it('should clear the state value', () => {
            setTimeout(() => { // Wait for state update
              expect(addTodo.state().inputText).toBe('');
            }, 1000);
          });
        });
      });
    });
  });
});
