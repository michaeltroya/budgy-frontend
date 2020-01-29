import React, { useState, Fragment } from 'react';
//Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { saveDashboard } from '../../redux/actions/dashboardActions';
//bs imports
import { Modal, Button } from 'react-bootstrap';
//util import
import { formatInput } from '../../util/util';

const MyModal = props => {
  const dashboard = useSelector(state => state.dashboard);
  const dispatch = useDispatch();

  //NEW PERSON

  const [newPerson, setNewPerson] = useState({
    budget: '',
    items: [],
    name: ''
  });

  const handleAddPerson = () => {
    const formattedPerson = { ...newPerson, budget: formatInput(newPerson.budget) };

    const saveData = {
      totalBudget: dashboard.totalBudget,
      people: [...dashboard.people, formattedPerson]
    };
    dispatch(saveDashboard(saveData));
    props.onHide();
  };

  //NEW ITEM

  const [newItem, setNewItem] = useState({
    itemCost: '',
    itemName: ''
  });

  const handleAddItem = () => {
    const formattedItem = { ...newItem, itemCost: formatInput(newItem.itemCost) };

    const ppl = [...dashboard.people];
    ppl[props.personindex].items.push(formattedItem);

    const saveData = {
      totalBudget: dashboard.totalBudget,
      people: [...ppl]
    };
    dispatch(saveDashboard(saveData));
    props.onHide();
  };

  //EDIT BUDGET

  const [newBudget, setNewBudget] = useState('');

  const handleSaveBudget = () => {
    const saveData = {
      totalBudget: formatInput(newBudget),
      people: [...dashboard.people]
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
        ) : props.type === 'totals' ? (
          <Fragment>
            <h1>New Budget</h1>
            <input
              type="text"
              id="name"
              name="name"
              value={newBudget}
              autoComplete="off"
              onChange={e => setNewBudget(e.target.value)}
            />
            <button onClick={handleSaveBudget} className="btn btn-gradient">
              Save
            </button>
          </Fragment>
        ) : (
          <Fragment>
            <h1>Item Name</h1>
            <input
              type="text"
              id="item-name"
              name="item-name"
              value={newItem.name}
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
