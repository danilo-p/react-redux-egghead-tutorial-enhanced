/**
 * Module that bundles all the ducks in one reducer. It imports all the ducks
 * and combine their reducers with the combineReducers method of the redux
 * library.
 *
 * @module common/ducks
 */

import { combineReducers } from 'redux';

import todo from './todo';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

// Here all the reducers are combined into a single one reducer that is
// exported as default and used to create the application store.
export default combineReducers({
  todo,
  todos,
  visibilityFilter,
});
