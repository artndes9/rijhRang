import React, { Component } from 'react';
import Header from './components/header'
import Body from './components/body'
import './scss/App.css';

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Body />
        </div>
    );
  }
}

export default App;
