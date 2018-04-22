import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Landing from "./components/pages/Landing";




const App = () => (
  
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Route exact path="/" component={Landing} />
          </div>
        </Router>
      </div>
);
export default App;