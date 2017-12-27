/**
 * The "todo" duck
 *
 * @module common/ducks/todo
 */

/* ======================================
=            Initial State              =
====================================== */

/** "todo" duck initial state */
export const INITIAL_STATE = {};

/* ======  End of Initial State  ====== */

/* =====================================
=            Action Types              =
======================================== */

/** ADD_TODO Action type */
export const ADD = 'ADD_TODO';

/** TOGGLE_TODO Action type */
export const TOGGLE = 'TOGGLE_TODO';


/* ======  End of Action Types  ====== */

/* ================================
=            Reducer              =
================================ */
/**
 * The "todo" duck reducer
 *
 * @memberof module:common/ducks/todo
 * @param {Object} [state=INITIAL_STATE] The current state
 * @param {Object} action The action to be handled
 * @returns {Object} The new state
 */
export default function reducer(state = INITIAL_STATE, action) {
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
}

/* ======  End of Reducer  ====== */

/* ==================================
=            Utilities              =
================================== */

/**
 * Creates a todo ID based on the content.
 *
 * @memberof module:common/ducks/todo
 * @param {String} text The todo text
 * @return {String} The todo id
 */
export const createTodoId = text => Date.now() + text;

/* ======  End of Utilities  ====== */

/* =========================================
=            Action Creators               =
========================================= */

/**
 * Creates a new ADD_TODO action.
 *
 * @memberof module:common/ducks/todo
 * @param {String} text The new todo content
 * @param {String} [id=createTodoId(text)] The new todo id
 * @returns {Object} The new ADD_TODO action
 */
export const addTodo = (text, id = createTodoId(text)) => ({
  type: ADD,
  id,
  text,
});

/**
 * Creates a new TOGGLE_TODO action.
 *
 * @memberof module:common/ducks/todo
 * @param {String} id The todo ID
 * @return {Object} The new TOGGLE_TODO action
 */
export const toggleTodo = id => ({
  type: TOGGLE,
  id,
});

/* =====  End of Action Creators  ====== */
