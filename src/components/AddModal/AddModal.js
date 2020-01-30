import React, { useState } from 'react';
//Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { saveDashboard } from '../../redux/actions/dashboardActions';
//bs imports
import { Modal, Button } from 'react-bootstrap';
//util import
import { formatInput } from '../../util/util';

const MyModal = ({ type, personIndex, hasErrors, ...rest }) => {
  const dashboard = useSelector(state => state.dashboard);
  const dispatch = useDispatch();

  //NEW PERSON

  const [newPerson, setNewPerson] = useState({
    budget: '',
    items: [],
    name: ''
  });

  const handleAddPerson = e => {
    const formattedPerson = { ...newPerson, budget: formatInput(newPerson.budget) };

    const saveData = {
      totalBudget: dashboard.totalBudget,
      people: [...dashboard.people, formattedPerson]
    };
    dispatch(saveDashboard(saveData));
    e.preventDefault();
  };

  //NEW ITEM

  const [newItem, setNewItem] = useState({
    itemCost: '',
    itemName: ''
  });

  const handleAddItem = e => {
    e.preventDefault();
    const formattedItem = { ...newItem, itemCost: formatInput(newItem.itemCost) };

    const ppl = JSON.parse(JSON.stringify(dashboard.people));
    ppl[personIndex].items.push(formattedItem);

    const saveData = {
      totalBudget: dashboard.totalBudget,
      people: [...ppl]
    };
    dispatch(saveDashboard(saveData));
  };

  //EDIT BUDGET

  const [newBudget, setNewBudget] = useState('');

  const handleSaveBudget = e => {
    const saveData = {
      totalBudget: formatInput(newBudget),
      people: [...dashboard.people]
    };
    dispatch(saveDashboard(saveData));
    e.preventDefault();
  };

  return (
    <Modal {...rest} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="add-modal">
        {type === 'person' ? (
          <form className="form" onSubmit={handleAddPerson}>
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
            <button type="submit" className="btn btn-gradient">
              Add
            </button>
          </form>
        ) : type === 'totals' ? (
          <form className="form" onSubmit={handleSaveBudget}>
            <h1>New Budget</h1>
            <input
              type="text"
              id="name"
              name="name"
              value={newBudget}
              autoComplete="off"
              onChange={e => setNewBudget(e.target.value)}
            />
            <button type="submit" className="btn btn-gradient">
              Save
            </button>
          </form>
        ) : (
          <form className="form" onSubmit={handleAddItem}>
            <h1>Item Name</h1>
            <input
              type="text"
              id="item-name"
              name="item-name"
              value={newItem.itemName}
              autoComplete="off"
              onChange={e => setNewItem({ ...newItem, itemName: e.target.value })}
            />
            <h1>Item Cost</h1>
            <input
              type="text"
              id="item-cost"
              name="item-cost"
              autoComplete="off"
              value={newItem.itemCost}
              onChange={e => setNewItem({ ...newItem, itemCost: e.target.value })}
            />
            <button type="submit" className="btn btn-gradient">
              Add
            </button>
          </form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={rest.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
