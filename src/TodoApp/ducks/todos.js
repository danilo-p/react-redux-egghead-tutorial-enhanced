import todo, {
  ADD,
  TOGGLE,
} from './todo';

// Actions
export const REMOVE = 'REMOVE_TODO';
export { ADD, TOGGLE };

// Reducer
export default (
  state = [
    {
      id: 0,
      text: 'test0',
      completed: false,
    },
    {
      id: 1,
      text: 'test1',
      completed: false,
    },
    {
      id: 2,
      text: 'test2',
      completed: false,
    },
  ],
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
