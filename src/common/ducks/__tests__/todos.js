import todos, {
  INITIAL_STATE,
  addTodo, toggleTodo,
} from '../todos';

describe('todos duck', () => {
  describe('reducer', () => {
    const text = 'Lorem ipsum';
    const id = Symbol(text);
    const state = [{
      id,
      text,
      completed: false,
    }];

    it('should return the initial state', () => {
      expect(todos(undefined, {}))
        .toEqual(INITIAL_STATE);
    });

    it('should return the current/initial state if the action type is invalid', () => {
      expect(todos(undefined, { type: 'ANY_ACTION_TYPE' }))
        .toEqual(INITIAL_STATE);
      expect(todos(INITIAL_STATE, { type: 'ANY_ACTION_TYPE' }))
        .toEqual(INITIAL_STATE);
    });

    it('should handle ADD_TODO', () => {
      expect(todos(undefined, addTodo(text, id)))
        .toEqual(state);
    });

    it('should handle TOGGLE_TODO', () => {
      expect(todos(state, toggleTodo(id)))
        .toEqual([
          {
            id,
            text,
            completed: true,
          },
        ]);
    });
  });
});
