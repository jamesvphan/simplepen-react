import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Userinput from './components/Userinput';
import Login from './components/Login';
import NotebookForm from './components/notebooks/NotebookForm'
import Note from './components/notes/Note'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to SimplePen</h1>
        <Userinput />
        <Login />
        <NotebookForm />
        <Note />
      </div>
    );
  }
}

export default App;
