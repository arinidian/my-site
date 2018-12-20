import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home'
import Catalogue from './pages/Catalogue'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/catalogue" component={Catalogue} />
        </div>
      </Router>
    );
  }
}

export default App;
