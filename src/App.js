import React, { Component } from 'react';
import Userinput from './components/Userinput';
import AddNotebook from './components/notebooks/AddNotebook'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Userinput />
        <AddNotebook />
      </div>
    );
  }
}

export default App;
