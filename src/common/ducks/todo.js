// Initial State
export const INITIAL_STATE = {};

// Actions
export const ADD = 'ADD_TODO';
export const TOGGLE = 'TOGGLE_TODO';

// Reducer
export default (state = INITIAL_STATE, action) => {
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

export const createTodoId = text => Date.now() + text;

// Action Creators
export function addTodo(text, id = createTodoId(text)) {
  return {
    type: ADD,
    id,
    text,
  };
}

export const toggleTodo = id => ({
  type: TOGGLE,
  id,
});
