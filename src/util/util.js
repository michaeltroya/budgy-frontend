import jwtDecode from 'jwt-decode';
import axios from 'axios';

//Redux imports

import store from '../redux/store';
import { SET_AUTHENTICATED, SET_FIRST_LOGIN } from '../redux/types';
import { logoutUser } from '../redux/actions/userActions';
import { getDashboard } from '../redux/actions/dashboardActions';

//FORMATING INPUT NUMBERS
export const formatInput = number => {
  const formatted = parseFloat(number.replace(/,/g, '')).toFixed(2);
  return formatted;
};

//FUNCTIONS RUN ON APP.JS
export const tokenAndFirstLogin = () => {
  const token = localStorage.IDToken;
  const firstLogin = localStorage.firstLogin;

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

  if (firstLogin) {
    store.dispatch({ type: SET_FIRST_LOGIN });
  }
};
