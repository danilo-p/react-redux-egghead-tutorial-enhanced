/**
 * The "visibilityFilter" duck.
 *
 * @module common/ducks/visibilityFilter
 */

/* ======================================
=            Initial State              =
====================================== */

/** "visibilityFilter" duck initial state */
export const INITIAL_STATE = 'SHOW_ALL';

/* ======  End of Initial State  ====== */


/* =====================================
=            Action Types              =
===================================== */

/** SET_VISIBILITY_FILTER action type */
export const SET = 'SET_VISIBILITY_FILTER';

/* ======  End of Action Types  ====== */


/* ================================
=            Reducer              =
================================ */

/**
 * The "visibilityFilter" duck reducer
 *
 * @memberof module:common/ducks/visibilityFilter
 * @param {Object} [state=INITIAL_STATE] The current state
 * @param {Object} action The action to be handled
 * @returns {Object} The new state
 */
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET:
    return action.filter;
  default:
    return state;
  }
}

/* ======  End of Reducer  ====== */


/* ========================================
=            Action Creators              =
======================================== */

/**
 * Creates a new SET_VISIBILITY_FILTER action.
 *
 * @memberof module:common/ducks/visibilityFilter
 * @param {String} filter The visibility filter
 * @returns {Object} The new SET_VISIBILITY_FILTER action
 */
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

/* ======  End of Action Creators  ====== */
