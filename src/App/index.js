import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import TodoListPage from './TodoListPage';

/**
* SFC that describes the app.
* @see SFC https://reactjs.org/docs/components-and-props.html#functional-and-class-components
*
* @export
* @param {Object} store The redux store
* @returns {jsx} The TodoApp template
 */
const App = ({ store }) => (
  <Provider store={store}>
    <TodoListPage />
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default App;
