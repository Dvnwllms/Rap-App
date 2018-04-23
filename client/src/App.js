import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withUser, update } from './services/withUser';
import CreateAccountPage from './pages/CreateAccountPage';
import LoginPage from './pages/LoginPage';
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
      <Router>
        <Switch>
        <Route exact path='/signup' component={CreateAccountPage} />
        <Route exact path='/login' component={LoginPage} />
        </Switch>
      </Router>
    );
  }
}

export default withUser(App);