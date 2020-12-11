import React from 'react';
import LoginPage from './LoginPage/LoginPage'
import HomePage from './HomePage/HomePage'
import './index.css';
import './App.less';
import {Switch, Route, Redirect} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return <div className="App">
    <Switch>
    <PrivateRoute exact path="/" component={HomePage}/>
    <Route exact path="/login" component={LoginPage}/>
    <Redirect to="/login"/>
    </Switch>
  </div>
};

export default App;
