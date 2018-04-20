import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Loginform from "./components/Loginform";
import Nav from "./components/Nav";



const game = [{rapper: "common"},{rapper: "nas"}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;