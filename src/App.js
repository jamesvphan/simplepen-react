import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, Route } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import NotebookForm from './components/notebooks/NotebookForm'
import Note from './components/notes/Note'
import { setToken, addUser, login, setUser } from './actions/Account'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

  }

  componentWillMount() {
    debugger
    if (this.props.token) {
      this.props.setUser(this.props.token)
    }
  }

  render() {

    return (
      <div className="App">
        <h1>Welcome to SimplePen</h1>
        {(!!this.props.token) ? this.props.history.push('/notebook') :
          <div>
            <Register register={this.props.register}/>
            <Login login={this.props.login}/>
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
    login: login,
    setUser: setUser
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
