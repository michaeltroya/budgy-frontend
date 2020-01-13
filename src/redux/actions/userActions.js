import { SET_ERRORS, CLEAR_ERRORS, SET_UNAUTHENTICATED, SET_AUTHENTICATED, CLEAR_DASHBOARD } from '../types';
import axios from 'axios';
import { getDashboard } from './dashboardActions';

export const loginUser = userData => dispatch => {
  axios
    .post('/auth/login', userData)
    .then(res => {
      setAuthHeader(res.data.token);
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SET_AUTHENTICATED });
      dispatch(getDashboard());
    })
    .catch(err => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

export const registerUser = userData => dispatch => {
  axios
    .post('/auth/register', userData)
    .then(res => {
      setAuthHeader(res.data.token);
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SET_AUTHENTICATED });
      dispatch(getDashboard());
    })
    .catch(err => {
      console.log(err.response.data);
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('IDToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: SET_UNAUTHENTICATED });
  dispatch({ type: CLEAR_DASHBOARD });
};

const setAuthHeader = token => {
  const IDToken = `Bearer ${token}`;
  localStorage.setItem('IDToken', IDToken);
  axios.defaults.headers.common['Authorization'] = IDToken;
};
