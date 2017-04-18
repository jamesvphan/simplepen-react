import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AddNote from './components/AddNote'
//import axios from 'axios'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
//import { Router, Route, browserHistory} from 'react-router'
//import thunk from 'redux-thunk'
import './index.css';

const store = createStore(
 rootReducer,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
