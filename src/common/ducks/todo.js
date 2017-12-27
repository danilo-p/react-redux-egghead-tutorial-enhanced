/**
 * The "todo" duck
 *
 * @module common/ducks/todo
 */

/* ======================================
=            Initial State              =
====================================== */

/**
 * "todo" duck initial state
 * @export
*/
export const INITIAL_STATE = {};

/* ======  End of Initial State  ====== */

/* =====================================
=            Action Types              =
======================================== */

/**
 * ADD_TODO Action type
 * @export
*/
export const ADD = 'ADD_TODO';

/**
 * TOGGLE_TODO Action type
 * @export
*/
export const TOGGLE = 'TOGGLE_TODO';


/* ======  End of Action Types  ====== */

/* ================================
=            Reducer              =
================================ */
/**
 * The "todo" duck reducer
 *
 * @export
 * @memberof module:common/ducks/todo
 * @param {object} [state=INITIAL_STATE] The current state
 * @param {object} action The action to be processed
 * @returns {object} The new state
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

/* =========================================
=            Action Creators               =
========================================= */

/**
 * Creates a todo ID based on the content.
 *
 * @export
 * @memberof module:common/ducks/todo
 * @param {string} text The todo text
 * @return {string} The todo id
 */
export const createTodoId = text => Date.now() + text;

/**
 * Creates a new ADD_TODO action.
 *
 * @export
 * @memberof module:common/ducks/todo
 * @param {string} text The new todo content
 * @param {string} [id=createTodoId(text)] The new todo id
 * @returns {object} The new ADD_TODO action
 */
export const addTodo = (text, id = createTodoId(text)) => ({
  type: ADD,
  id,
  text,
});

/**
 * Creates a new TOGGLE_TODO action.
 *
 * @export
 * @memberof module:common/ducks/todo
 * @param {string} id The todo ID
 * @return {object} The new TOGGLE_TODO action
 */
export const toggleTodo = id => ({
  type: TOGGLE,
  id,
});

/* =====  End of Action Creators  ====== */
