import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {
  ConnectedRouter as Router,
  routerMiddleware
} from 'react-router-redux'
import {
  Route,
//  Link
} from 'react-router-dom'
import {
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'

import rootReducer from './reducers/index'
import App from './App';
import Note from './components/notes/Note'
import Notebook from './components/notebooks/Notebook'
import Notebooks from './components/notebooks/Notebooks'
import NotePreview from './components/notes/NotePreview'
import Login from './components/Login'
import NotebookForm from './components/notebooks/NotebookForm'
import Register from './components/Register'
import { composeWithDevTools } from 'redux-devtools-extension';
//import axios from 'axios'
import './index.css';

const history = createHistory()
const rMiddleware = routerMiddleware(history)

let initialState = {
  session: {
    token: window.localStorage.getItem("token")
  },
  account: {
    notebooks: [],
    id: '',
    username: '',
    email: ''
  }
}


let store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk, rMiddleware))
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path='/' component={App}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/notes' component={Note}></Route>
        <Route path='/add-notebook' component={NotebookForm}></Route>
        <Route exact path='/notebooks' component={Notebooks}></Route>
        <Route exact path='/notebooks/:notebookid/notes' component={Notebook}></Route>
        <Route exact path='/notebooks/:notebookid/notes/:noteid' component={NotePreview} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
