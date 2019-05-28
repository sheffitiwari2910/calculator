import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './calculator/calculator';
import {Provider} from 'react-redux';
import reducer from './calculator/calculator-reducer';
import {createStore} from 'redux';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Calculator/>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
