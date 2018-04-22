import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Landing from "./components/pages/Landing";
import Footer from "./components/Footer";




const App = () => (
  
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Route exact path="/" component={Landing} />
{/*           
******************Uncomment when pages built*****************

   <Route exact path="/login" component={Login} />
<Route exact path="/signup" component={Signup} />  

******************Uncomment when pages built*****************

 */}
            <Footer />
          </div>
        </Router>
      </div>
);
export default App;