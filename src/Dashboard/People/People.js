import React, { useState } from 'react';
//component imports
import PeopleCard from './PeopleCard/PeopleCard';
import MyModal from './MyModal/MyModal';
//Redux Imports
import { useSelector } from 'react-redux';
//bs imports
import { Container } from 'react-bootstrap';
//FA imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function People() {
  const newPerson = {
    budget: 0,
    spent: 0,
    remaining: 0,
    items: [],
    name: 'name'
  };

  const dashboard = useSelector(state => state.dashboard);
  const [allPeople, setAllPeople] = useState([...dashboard.people]);
  const [modalShow, setModalShow] = useState(true);

  return (
    <div className="dashboard-people">
      <Container fluid className="card-container">
        {allPeople.map(person => (
          <PeopleCard person={person} key={Math.random(0)} />
        ))}
        <div className="card-wrapper">
          <div className="add-person" onClick={() => setModalShow(true)}>
            <FontAwesomeIcon icon={faPlusCircle} className="add-icon" />
            <h3>Add Person</h3>
          </div>
        </div>
      </Container>
      <MyModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
export default People;
