import todo, {
  ADD, TOGGLE,
  addTodo, toggleTodo,
} from './todo';

// Initial State
export const INITIAL_STATE = [];

// Actions
export {
  ADD, TOGGLE,
  addTodo, toggleTodo,
};

// Reducer
export default (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
  case ADD:
    return [
      ...state,
      todo(undefined, action),
    ];
  case TOGGLE:
    return state.map(t => todo(t, action));
  default:
    return state;
  }
};
