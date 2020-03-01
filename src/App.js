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
import { tokenAndFirstLogin } from './util/util';

import axios from 'axios';

axios.defaults.baseURL = 'https://budgy-api.herokuapp.com/api';

tokenAndFirstLogin();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/first-steps" component={FirstSteps} />
          <Route component={FourOhFour} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
