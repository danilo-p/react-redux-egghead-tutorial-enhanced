/**
 * The "todos" duck. This module re-exports all the action types, action
 * creators and utilities from the common/ducks/todo module.
 *
 * @module common/ducks/todos
 * @author Danilo Pimentel
 */

import todo, {
  ADD,
  TOGGLE,
  addTodo,
  toggleTodo,
  createTodoId,
} from './todo';

/* ===========================================
=            Initial Duck State              =
=========================================== */

/** The "todos" duck initial state */
export const INITIAL_STATE = [];

/* ======  End of Initial Duck State  ====== */

export {
  /* =====================================
  =            Action Types              =
  ===================================== */

  ADD,
  TOGGLE,

  /* ======  End of Action Types  ====== */

  /* ========================================
  =            Action Creators              =
  ======================================== */

  addTodo,
  toggleTodo,

  /* ======  End of Action Creators  ====== */

  /* ==================================
  =            Utilities              =
  ================================== */

  createTodoId,

  /* ======  End of Utilities  ====== */
};

/* ================================
=            Reducer              =
================================ */

/**
 * * The "todos" duck reducer
 *
 * @export
 * @param {Object} [state=INITIAL_STATE] The current state
 * @param {Object} action The action to be handled
 * @returns {Object} The new state
 */
export default function reducer(
  state = INITIAL_STATE,
  action,
) {
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
}

/* ======  End of Reducer  ====== */

