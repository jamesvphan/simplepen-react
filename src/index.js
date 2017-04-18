import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './index.css';

 const store = createStore(rootReducers, applyMiddleware(thunk))


ReactDOM.render(
   <Provider store={store}>
    <App />,
   </Provider>,
  document.getElementById('root')
)
