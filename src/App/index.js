import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoListPage from './TodoListPage';
import rootReducer from '../common/ducks/index';

/**
* SFC that describes the app.
* @see SFC https://reactjs.org/docs/components-and-props.html#functional-and-class-components
*
* @export
* @returns {jsx} The TodoApp template
*/
const App = () => (
  <Provider store={createStore(rootReducer)}>
    <TodoListPage />
  </Provider>
);

export default App;
