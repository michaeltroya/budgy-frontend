import React from 'react';
import PeopleCard from './PeopleCard/PeopleCard';
//Redux Imports
import { useSelector } from 'react-redux';
//bs imports
import { Container } from 'react-bootstrap';

function People() {
  const dashboard = useSelector(state => state.dashboard);
  return (
    <div className="dashboard-people">
      <Container fluid>
        {dashboard.people.map(person => {
          return <PeopleCard person={person} key={Math.random(1)} />;
        })}
      </Container>
    </div>
  );
}
export default People;
