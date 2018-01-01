import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

describe('main', () => {
  it('should bootstrap the app without crashing', () => {
    ReactDOM.render(<App />, document.createElement('div'));
  });
});
