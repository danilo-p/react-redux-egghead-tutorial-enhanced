// Actions
export const ADD = 'ADD_TODO';
export const TOGGLE = 'TOGGLE_TODO';

// Reducer
export default (state = {}, action) => {
  switch (action.type) {
  case ADD:
    return {
      id: action.id,
      text: action.text,
      completed: false,
    };
  case TOGGLE:
    if (state.id !== action.id) {
      return state;
    }
    return {
      ...state,
      completed: !state.completed,
    };
  default:
    return state;
  }
};

// Action Creators
let nextTodoId = 2;
export function addTodo(text) {
  nextTodoId += 1;
  return {
    type: ADD,
    id: nextTodoId,
    text,
  };
}

export const toggleTodo = id => ({
  type: TOGGLE,
  id,
});
