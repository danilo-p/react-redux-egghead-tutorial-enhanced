import todo, {
  ADD, TOGGLE,
  addTodo, toggleTodo,
} from './todo';

// Actions
export {
  ADD, TOGGLE,
  addTodo, toggleTodo,
};

// Reducer
export default (
  state = [],
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
