import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withUser, update } from './services/withUser';
import LandingPage from './pages/LandingPage';
import BracketPage from './pages/BracketPage';
import CreateAccountPage from './pages/CreateAccountPage';
import LoginPage from './pages/LoginPage';
// import Landingpage from './pages/Landingpage'
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';
// import Loginform from "./components/Loginform";
class App extends Component {
  componentDidMount() {
    axios.get('/api/auth')
      .then(res => {
        update(res.data);
      })
      .catch(err => {
        if (err.response.status === 401) {
          update(null);
        }
      });
  }
  render() {
    const { user } = this.props;
    return (
      <div>
      <Nav />
      <Router>
        <Switch>
        <Route exact path='/' component={CreateAccountPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/bracket' component={BracketPage} />
        </Switch>
      </Router>
      <Footer />
      </div>
    );
  }
}

export default withUser(App);
