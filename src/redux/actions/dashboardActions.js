import { SET_DASHBOARD, LOADING_DASHBOARD, CLEAR_ERRORS } from '../types';
import axios from 'axios';

export const getDashboard = () => dispatch => {
  dispatch({ type: LOADING_DASHBOARD });
  axios
    .get('/posts')
    .then(res => {
      dispatch({
        type: SET_DASHBOARD,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SET_DASHBOARD,
        payload: []
      });
    });
};

export const clearErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};
