import React from 'react';
//component imports
import Navbar from '../../components/layout/Navbar/Navbar';
import PeopleCard from '../../components/dashboard/PeopleCard/PeopleCard';
//Redux Imports
import { useSelector } from 'react-redux';
//BS imports
import { Container } from 'react-bootstrap';

const Dashboard = () => {
  const dashboard = useSelector(state => state.dashboard);

  return (
    <div className="dashboard">
      <Navbar page="dash" />
      {dashboard.loading === true ? (
        <h1>loading ...</h1>
      ) : (
        <div className="dashboard-people-content">
          <Container fluid>
            {dashboard.people.map(person => {
              return <PeopleCard person={person} key={Math.random(1)} />;
            })}
          </Container>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
