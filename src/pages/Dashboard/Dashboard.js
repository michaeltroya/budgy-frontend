import React, { Fragment } from 'react';
import Navbar from '../../components/layout/Navbar/Navbar';
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
      <Navbar page="dash" />
      {dashboard.loading === true ? (
        <h1>loading ...</h1>
      ) : (
        <div>
          <h1>{`hello ${dashboard.username}`}</h1>
          <h4>{`TOTAL BUDGET: ${dashboard.totalBudget}`}</h4>
          <h4>{`TOTAL SPENT: ${dashboard.totalSpent}`}</h4>
          <h4>{`TOTAL REMAINING: ${dashboard.totalRemaining}`}</h4>
        </div>
      )}

      <button onClick={handleLogout}>log out</button>
    </Fragment>
  );
};

export default Dashboard;
