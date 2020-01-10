import React, { Fragment } from 'react';
//Redux Imports
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actions/userActions';

const Dashboard = () => {
  const dashboard = useSelector(state => state.dashboard);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Fragment>
      <h1>{`hello ${dashboard.username}`}</h1>
      <h4>{`TOTAL BUDGET: ${dashboard.totalBudget}`}</h4>
      <button onClick={handleLogout}>log out</button>
    </Fragment>
  );
};

export default Dashboard;
