/**
 * Main file of the application. It renders the App component on the root div.
 */

import 'semantic-ui-css/semantic.min.css';
import 'typeface-roboto/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from 'common/ducks/index';
import App from './App';

const main = (target) => {
  const store = createStore(rootReducer);
  ReactDOM.render(<App store={store} />, target);
};

if (require.main) { // Check if the browser is executing
  main(document.getElementById('root'));
}

export default main;
