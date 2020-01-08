import React from 'react';
//Redux Imports
import { useSelector, useDispatch } from 'react-redux';
import { getDashboard } from '../redux/actions/dashboardActions';

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getDashboard());
  };

  return <button onClick={handleClick}>CLick</button>;
};

export default Dashboard;
