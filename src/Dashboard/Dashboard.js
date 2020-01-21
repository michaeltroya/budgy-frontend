import React, { Fragment } from 'react';
//component imports
import Navbar from '../components/Navbar/Navbar';
import People from './People/People';
import Totals from './Totals/Totals';
//Redux Imports
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const dashboard = useSelector(state => state.dashboard);

  return (
    <div className="dashboard">
      <Navbar page="dash" />
      {dashboard.loading === true ? (
        <h1>loading ...</h1>
      ) : (
        <Fragment>
          <People />
          <Totals />
        </Fragment>
      )}
    </div>
  );
};

export default Dashboard;
