import todo, {
  INITIAL_STATE,
  ADD,
  TOGGLE,
  addTodo,
  toggleTodo,
  createTodoId,
} from '../todo';

describe('todo duck', () => {
  const text = 'Lorem ipsum';
  const id = createTodoId(text);
  const state = {
    id,
    text,
    completed: false,
  };

  describe('reducer', () => {
    it('should return the initial state', () => {
      expect(todo(undefined, {}))
        .toEqual(INITIAL_STATE);
    });

    it(
      'should return the current/initial state if the action type is invalid',
      () => {
        expect(todo(undefined, { type: 'ANY_ACTION_TYPE' }))
          .toEqual(INITIAL_STATE);
        expect(todo(INITIAL_STATE, { type: 'ANY_ACTION_TYPE' }))
          .toEqual(INITIAL_STATE);
      },
    );

    it('should handle the ADD_TODO action', () => {
      expect(todo(undefined, addTodo(text, id)))
        .toEqual(state);
    });

    it('should handle the TOGGLE_TODO action', () => {
      expect(todo(state, toggleTodo(id)))
        .toEqual({
          ...state,
          completed: true,
        });
    });
  });

  describe('action creators', () => {
    it('should create an action to add a todo', () => {
      expect(addTodo(text, id))
        .toEqual({
          type: ADD,
          id,
          text,
        });
    });

    it('should create an action to toggle a todo', () => {
      expect(toggleTodo(id))
        .toEqual({
          type: TOGGLE,
          id,
        });
    });
  });
});
