/**
 * Main file of the application. It renders the main entrypoint on the
 * root div.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
import 'typeface-roboto/index.css';

import TodoApp from './TodoApp';
import rootReducer from './common/ducks/index';

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root'),
);
