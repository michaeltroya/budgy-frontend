import React from 'react';
import PeopleCard from './PeopleCard/PeopleCard';
//Redux Imports
import { useSelector } from 'react-redux';
//bs imports
import { Container } from 'react-bootstrap';
//FA imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function People() {
  const dashboard = useSelector(state => state.dashboard);

  return (
    <div className="dashboard-people">
      <Container fluid className="card-container">
        {dashboard.people.map(person => {
          return <PeopleCard person={person} key={Math.random(1)} />;
        })}
        <div className="card-wrapper">
          <div className="add-person">
            <FontAwesomeIcon icon={faPlusCircle} className="add-icon" />
            <h3>Add Person</h3>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default People;
