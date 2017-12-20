import visibilityFilter, {
  INITIAL_STATE,
  SET,
  setVisibilityFilter,
} from '../visibilityFilter';

describe('visibilityFilter duck', () => {
  const filter = 'MY_FILTER';

  describe('reducer', () => {
    it('should return the initial state', () => {
      expect(visibilityFilter(undefined, {}))
        .toEqual(INITIAL_STATE);
    });

    it('should return the current/initial state if the action type is invalid', () => {
      expect(visibilityFilter(undefined, { type: 'ANY_ACTION_TYPE' }))
        .toEqual(INITIAL_STATE);
      expect(visibilityFilter(INITIAL_STATE, { type: 'ANY_ACTION_TYPE' }))
        .toEqual(INITIAL_STATE);
    });

    it('should handle the SET_VISIBILITY_FILTER action', () => {
      expect(visibilityFilter(undefined, setVisibilityFilter(filter)))
        .toEqual(filter);
    });
  });

  describe('action creators', () => {
    it('should create an action to set a filter', () => {
      expect(setVisibilityFilter(filter))
        .toEqual({
          type: SET,
          filter,
        });
    });
  });
});
