import React, { Component } from 'react';
import Header from './components/header'
import Body from './components/body'
import { Route } from 'react-router-dom';
import Privacy from './pages/privacy';
import './scss/App.css';

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Route exact path="/" component={ Body }/>
            <Route path="/privacy" component={ Privacy }/>
        </div>
    );
  }
}

export default App;
