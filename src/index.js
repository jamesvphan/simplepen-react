import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Note from './components/notes/Note'
import Login from './components/Login'
import NotebookForm from './components/notebooks/NotebookForm'
import Register from './components/Register'
//import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import createHistory from 'history/createBrowserHistory'
import {
  ConnectedRouter as Router,
  routerMiddleware
} from 'react-router-redux'
import {
  Route,
  Link
} from 'react-router-dom'
//import thunk from 'redux-thunk'
import './index.css';

const history = createHistory()
const rMiddleware = routerMiddleware(history)

const store = createStore(
 rootReducer,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
 applyMiddleware(rMiddleware)
)


//this.props.history.push('/notes')
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path='/' component={App}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/notes' component={Note}></Route>
        <Route path='/add-notebook' component={NotebookForm}></Route>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
