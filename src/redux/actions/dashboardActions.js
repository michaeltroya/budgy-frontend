import { SET_DASHBOARD, LOADING_DASHBOARD, SAVE_DASHBOARD, CLEAR_ERRORS, SET_ERRORS } from '../types';
import axios from 'axios';

export const getDashboard = () => dispatch => {
  dispatch({ type: LOADING_DASHBOARD });
  axios
    .get('/dashboard/')
    .then(res => {
      console.log(res.data);
      dispatch({
        type: SET_DASHBOARD,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

export const saveOrUpdateDashBoard = data => dispatch => {
  axios
    .post('/dashboard/', data)
    .then(res => {
      dispatch({
        type: SAVE_DASHBOARD,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

export const clearErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};
