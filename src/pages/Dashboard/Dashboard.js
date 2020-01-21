import React, { Fragment } from 'react';
//component imports
import Navbar from '../../components/layout/Navbar/Navbar';
import People from '../../components/dashboard/People/People';

//Redux Imports
import { useSelector } from 'react-redux';

//BS imports

import Totals from '../../components/dashboard/Totals/Totals';

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
