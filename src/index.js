import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Note from './components/notes/Note'
//import axios from 'axios'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import { BrowserRouter as Router, Route, IndexRoute, browserHistory, NavLink} from 'react-router-dom'
//import thunk from 'redux-thunk'
import './index.css';

const store = createStore(
 rootReducer,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Route path='/' component={App}></Route>
        <Route path='/notes' component={Note}></Route>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
