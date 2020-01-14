import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
//Component/Page Imports
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthRoute from './util/AuthRoute';
//Redux imports
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser } from './redux/actions/userActions';
import { getDashboard } from './redux/actions/dashboardActions';

const token = localStorage.IDToken;

if (token) {
  const decodeToken = jwtDecode(token);
  if (decodeToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = `${token}`;
    store.dispatch(getDashboard());
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AuthRoute exact path="/" component={Home} />
        <AuthRoute path="/dashboard" component={Dashboard} />
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/register" component={Register} />
      </Router>
    </Provider>
  );
};

export default App;
