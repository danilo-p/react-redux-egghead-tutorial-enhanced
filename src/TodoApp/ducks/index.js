import { combineReducers } from 'redux';

import todo from './todo';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  todo,
  todos,
  visibilityFilter,
});
