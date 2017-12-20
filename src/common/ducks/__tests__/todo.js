import todo, {
  ADD,
  TOGGLE,
  addTodo,
  toggleTodo,
} from '../todo';

describe('todo duck', () => {
  describe('reducer', () => {
    it('should return the initial state', () => {
      expect(todo(undefined, {}))
        .toEqual({});
    });

    it('should return the current/initial state if the action type is invalid', () => {
      const currentAndInitialState = {};
      expect(todo(undefined, { type: 'ANY_ACTION_TYPE' }))
        .toEqual(currentAndInitialState);
      expect(todo(currentAndInitialState, { type: 'ANY_ACTION_TYPE' }))
        .toEqual(currentAndInitialState);
    });
  });

  describe('action creators', () => {
    it('should create an action to add a todo', () => {
      const text = 'Lorem ipsum';
      expect(addTodo(text))
        .toEqual({
          type: ADD,
          id: 1,
          text,
        });
    });

    it('should create an action to toggle a todo', () => {
      const id = 0;
      expect(toggleTodo(id))
        .toEqual({
          type: TOGGLE,
          id,
        });
    });
  });
});
