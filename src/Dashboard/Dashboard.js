import React, { Fragment } from 'react';
//component imports
import Navbar from '../components/Navbar/Navbar';
import People from './People/People';
import Totals from './Totals/Totals';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar page="dash" />
      <Fragment>
        <People />
        <Totals />
      </Fragment>
    </div>
  );
};

export default Dashboard;
