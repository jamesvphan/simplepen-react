import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Register from './components/Register';
import Login from './components/Login';
import { Link, Route, Redirect, Switch} from 'react-router-dom'
import { setToken, addUser, login, setUser } from './actions/actions'
import About from './components/About'
import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props)
  //
  // }

  componentWillMount() {
    if (this.props.token) {
      this.props.setUser(this.props.token)
    }
  }

  render() {
    return (
      <div className="App">
      <h1 className="logo">Welcome to SimplePen  <span className="glyphicon glyphicon-pencil"></span></h1><br></br>
      {(!!this.props.token) ? this.props.history.push('/notebooks') :
        <div>
          <Register register={this.props.register}/>
        <h3> <Link to="/login">Or login here</Link></h3>
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
