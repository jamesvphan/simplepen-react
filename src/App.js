import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Userinput from './components/Userinput';
import Login from './components/Login';
import AddNotebook from './components/notebooks/AddNotebook'
import AddNote from './components/AddNote'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Userinput />
        <Login />
        <AddNotebook />
        <AddNote />
      </div>
    );
  }
}

export default App;
