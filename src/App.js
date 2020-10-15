import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ApplyLone from './components/ApplyLone';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/applyLone" component={ApplyLone} />
      </div>
    );
  }
}

export default App;
