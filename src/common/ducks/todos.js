import todo, {
  ADD,
  TOGGLE,
} from './todo';

// Actions
export const REMOVE = 'REMOVE_TODO';
export { ADD, TOGGLE };

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
  case REMOVE:
    return []; // TODO: implement the remove todo
  default:
    return state;
  }
};
