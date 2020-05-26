import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './App/style.css';
import App from './App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);




