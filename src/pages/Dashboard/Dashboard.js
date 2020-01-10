import React, { Fragment } from 'react';
//Redux Imports
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const dashboard = useSelector(state => state.dashboard);

  const handleClick = () => {
    console.log(dashboard);
  };

  return (
    <Fragment>
      <h1>{dashboard.username}</h1>
      {dashboard.people.map(p => (
        <p key={Math.random(1)}>{p.name}</p>
      ))}

      <button onClick={handleClick}>CLick</button>
    </Fragment>
  );
};

export default Dashboard;
