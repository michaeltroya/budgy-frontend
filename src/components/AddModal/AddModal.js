import React, { useState, Fragment } from 'react';
//Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { saveDashboard } from '../../redux/actions/dashboardActions';
//bs imports
import { Modal, Button } from 'react-bootstrap';

const MyModal = props => {
  const dashboard = useSelector(state => state.dashboard);
  const dispatch = useDispatch();

  //NEW PERSON

  const [newPerson, setNewPerson] = useState({
    budget: '',
    spent: 0,
    remaining: 0,
    items: [],
    name: ''
  });

  const handleAddPerson = () => {
    const saveData = {
      totalBudget: dashboard.totalBudget,
      totalRemaining: dashboard.totalRemaining,
      totalSpent: dashboard.totalSpent,
      people: [...dashboard.people, newPerson]
    };
    dispatch(saveDashboard(saveData));
    props.onHide();
    console.log();
  };

  //NEW ITEM

  const [newItem, setNewItem] = useState({
    itemCost: '',
    itemName: ''
  });

  const handleAddItem = () => {
    const ppl = [...dashboard.people];
    ppl[props.personindex].items.push(newItem);

    const saveData = {
      totalBudget: dashboard.totalBudget,
      totalRemaining: dashboard.totalRemaining,
      totalSpent: dashboard.totalSpent,
      people: [...ppl]
    };
    dispatch(saveDashboard(saveData));
    props.onHide();
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="add-modal">
        {props.type === 'person' ? (
          <Fragment>
            <h1>Name</h1>
            <input
              type="text"
              id="name"
              name="name"
              value={newPerson.name}
              autoComplete="off"
              onChange={e => setNewPerson({ ...newPerson, name: e.target.value })}
            />
            <h1>Budget</h1>
            <input
              type="text"
              id="budget"
              name="budget"
              autoComplete="off"
              value={newPerson.budget}
              onChange={e => setNewPerson({ ...newPerson, budget: e.target.value })}
            />

            <button onClick={handleAddPerson} className="btn btn-gradient">
              add
            </button>
          </Fragment>
        ) : (
          <Fragment>
            <h1>Item Name</h1>
            <input
              type="text"
              id="name"
              name="name"
              value={newItem.name}
              onChange={e => setNewItem({ ...newItem, itemName: e.target.value })}
            />
            <h1>Item Cost</h1>
            <input
              type="text"
              id="budget"
              name="budget"
              value={newItem.budget}
              onChange={e => setNewItem({ ...newItem, itemCost: parseInt(e.target.value) })}
            />
            <button onClick={handleAddItem} className="btn btn-gradient">
              add
            </button>
          </Fragment>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
