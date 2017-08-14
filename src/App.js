import React, { Component } from 'react';
import Header from './components/header'
import Body from './components/body'
import { Route } from 'react-router-dom';
import Privacy from './pages/privacy';
import Photography from './pages/photography';
import Music from './pages/music';
import Videos from './pages/videos';
import About from './pages/about';
import Tos from './pages/tos';
import './scss/App.css';

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Route exact path="/" component={ Body }/>
            <Route exact path="/photography" component={ Photography }/>
            <Route exact path="/music" component={ Music }/>
            <Route exact path="/videos" component={ Videos }/>
            <Route exact path="/about" component={ About }/>
            <Route path="/privacy" component={ Privacy }/>
            <Route path="/terms" component={ Tos }/>
        </div>
    );
  }
}

export default App;
