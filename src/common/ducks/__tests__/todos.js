import todos, {
  addTodo, toggleTodo,
} from '../todos';

describe('todos duck', () => {
  describe('reducer', () => {
    it('should return the initial state', () => {
      expect(todos(undefined, {}))
        .toEqual([]);
    });

    it('should return the current/initial state if the action type is invalid', () => {
      const currentAndInitialState = [];
      expect(todos(undefined, { type: 'ANY_ACTION_TYPE' }))
        .toEqual(currentAndInitialState);
      expect(todos(currentAndInitialState, { type: 'ANY_ACTION_TYPE' }))
        .toEqual(currentAndInitialState);
    });

    const text = 'Lorem Ipsum';
    it('should handle ADD_TODO', () => {
      expect(todos([], addTodo(text)))
        .toEqual([
          {
            id: 1,
            text,
            completed: false,
          },
        ]);
    });

    it('should handle TOGGLE_TODO', () => {
      const id = 1;
      const state = [
        {
          id: 1,
          text,
          completed: false,
        },
      ];
      expect(todos(state, toggleTodo(1)))
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
