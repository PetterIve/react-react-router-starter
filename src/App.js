import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./component-library/button/button";
import {Router} from "./routes/router";

class App extends Component {
  render() {
    return (
      <Router />
    );
  }
}

export default App;
