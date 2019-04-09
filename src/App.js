import React, { Component } from 'react';
import Api from './GitApiCall'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Api/>
      </div>
    );
  }
}

export default App;
