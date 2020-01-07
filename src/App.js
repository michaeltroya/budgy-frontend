import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
//Component Imports
import dashboard from './pages/dashboard';
import Login from './pages/Login';
import register from './pages/register';
//Redux imports
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => (
  <Router>
    <Route path="/" exact component={dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={register} />
  </Router>
);

export default App;
