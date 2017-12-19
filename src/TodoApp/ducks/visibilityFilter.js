// Actions
export const SET = 'SET_VISIBILITY_FILTER';

// Reducer
export default (state = 'SHOW_ALL', action) => {
  switch (action.type) {
  case SET:
    return action.filter;
  default:
    return state;
  }
};

// Action creators
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});
