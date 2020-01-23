import React, { useState } from 'react';
//Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { saveDashboard } from '../../../redux/actions/dashboardActions';
//bs imports
import { Modal, Button } from 'react-bootstrap';

const MyModal = props => {
  const newPersonDetails = {
    budget: '',
    spent: 0,
    remaining: 0,
    items: [],
    name: ''
  };

  const dashboard = useSelector(state => state.dashboard);
  const dispatch = useDispatch();

  const [newPerson, setNewPerson] = useState({ ...newPersonDetails });

  const handleAdd = () => {
    const saveData = {
      totalBudget: dashboard.totalBudget,
      totalRemaining: dashboard.totalRemaining,
      totalSpent: dashboard.totalSpent,
      people: [...dashboard.people, newPerson]
    };
    dispatch(saveDashboard(saveData));
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add New Person</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>Name</h1>
        <input
          type="text"
          id="name"
          name="name"
          value={newPerson.name}
          onChange={e => setNewPerson({ ...newPerson, name: e.target.value })}
        />
        <h1>Budget</h1>
        <input
          type="text"
          id="budget"
          name="budget"
          value={newPerson.budget}
          onChange={e => setNewPerson({ ...newPerson, budget: parseInt(e.target.value) })}
        />
        <button onClick={handleAdd}>add </button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
