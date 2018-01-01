/**
 * Module that bundles all the ducks in one reducer. It imports all the ducks
 * and combine their reducers with the combineReducers method of the redux
 * library.
 *
 * @module common/ducks
 * @author Danilo Pimentel
 */

import { combineReducers } from 'redux';

import todo, {
  INITIAL_STATE as TODO_INITIAL_STATE,
} from './todo';
import todos, {
  INITIAL_STATE as TODOS_INITIAL_STATE,
} from './todos';
import visibilityFilter, {
  INITIAL_STATE as VISIBILITY_FILTER_INITIAL_STATE,
} from './visibilityFilter';

export const INITIAL_STATE = {
  todo: TODO_INITIAL_STATE,
  todos: TODOS_INITIAL_STATE,
  visibilityFilter: VISIBILITY_FILTER_INITIAL_STATE,
};

// Here all the reducers are combined into a single one reducer that is
// exported as default and used to create the application store.
export default combineReducers({
  todo,
  todos,
  visibilityFilter,
});
