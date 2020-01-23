import React, { useState } from 'react';
import PeopleCard from './PeopleCard';
//Redux Imports
import { useSelector } from 'react-redux';
//bs imports
import { Container } from 'react-bootstrap';
//FA imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function People() {
  const personPlaceholder = {
    budget: 0,
    spent: 0,
    remaining: 0,
    items: [],
    name: 'name'
  };
  const dashboard = useSelector(state => state.dashboard);
  const [newPeople, setNewPeople] = useState([personPlaceholder]);
  const [allPeople, setAllPeople] = useState([...dashboard.people]);

  const handleClick = () => {
    setNewPeople([...newPeople, personPlaceholder]);
    setAllPeople([...allPeople, ...newPeople]);
    console.log(newPeople);
  };

  return (
    <div className="dashboard-people">
      <Container fluid className="card-container">
        {allPeople.map(person => (
          <PeopleCard person={person} key={Math.random(0)} />
        ))}

        <div className="card-wrapper">
          <div className="add-person" onClick={handleClick}>
            <FontAwesomeIcon icon={faPlusCircle} className="add-icon" />
            <h3>Add Person</h3>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default People;
