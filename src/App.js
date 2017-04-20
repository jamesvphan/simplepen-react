import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, Route } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import NotebookForm from './components/notebooks/NotebookForm'
import Note from './components/notes/Note'
import { setToken, addUser, login } from './actions/Account'
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>Welcome to SimplePen</h1>
        {(!!this.props.token) ? this.props.history.push('/notes') :
          <div>
            <Register register={this.props.register}/>
            <Login />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.session.token,
  }
} 

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setToken: setToken,
    register: addUser,
    login: login
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
