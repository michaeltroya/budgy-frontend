import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
//Component/Page Imports
import dashboard from './pages/dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthRoute from './util/AuthRoute';
//Redux imports
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser } from './redux/actions/userActions';
import { getDashboard } from './redux/actions/dashboardActions';

const token = localStorage.FBIdToken;
if (token) {
  const decodeToken = jwtDecode(token);
  if (decodeToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTNiNzJmY2Q5OTQ2MGQ5ZjAyNjIyNyIsInVzZXJuYW1lIjoibWlrZSIsImlhdCI6MTU3ODM1MjM5NCwiZXhwIjoxNTgwNTA4MzIwfQ.6_qX_Gg1kMxlCz96NeLNEopX4QClc4ri7YkokB3C1IU';
    store.dispatch(getDashboard());
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={dashboard} />
      <AuthRoute exact path="/login" component={Login} />
      <AuthRoute exact path="/register" component={Register} />
    </Router>
  </Provider>
);

export default App;
