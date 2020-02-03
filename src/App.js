import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Component/Page Imports
import Home from './pages/Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import FourOhFour from './pages/404/FourOhFour';
import AuthRoute from './util/AuthRoute';
import FirstSteps from './pages/FirstSteps/FirstSteps';
//Redux imports
import { Provider } from 'react-redux';
import store from './redux/store';

import axios from 'axios';

axios.defaults.baseURL = 'https://budgy-api.herokuapp.com/api';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <AuthRoute exact path="/" component={Home} />
          <AuthRoute path="/dashboard" component={Dashboard} />
          <AuthRoute path="/login" component={Login} />
          <AuthRoute path="/register" component={Register} />
          <AuthRoute path="/first-steps" component={FirstSteps} />
          <Route component={FourOhFour} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
