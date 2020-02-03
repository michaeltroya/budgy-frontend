import React, { useState, useEffect } from 'react';
//Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { saveDashboard } from '../../redux/actions/dashboardActions';
//bs imports
import { Modal, Button } from 'react-bootstrap';
//util import
import { formatInput } from '../../util/util';

const MyModal = ({ type, personIndex, open, ...rest }) => {
  const errors = useSelector(state => state.UI.errors);
  const dashboard = useSelector(state => state.dashboard);
  const dispatch = useDispatch();

  const [newBudget, setNewBudget] = useState('');

  const [newPerson, setNewPerson] = useState({
    budget: '',
    items: [],
    name: ''
  });

  const [newItem, setNewItem] = useState({
    itemCost: '',
    itemName: ''
  });

  //USE EFFECTS TO CHECK FOR ERRORS

  useEffect(() => {
    if (errors.peopleName === undefined && errors.peopleBudget === undefined) {
      setNewPerson({
        budget: '',
        items: [],
        name: ''
      });
    }
  }, [errors]);

  useEffect(() => {
    if (errors.itemName === undefined && errors.itemCost === undefined) {
      setNewItem({
        itemCost: '',
        itemName: ''
      });
    }
  }, [errors]);

  //ADD NEW PERSON

  const handleAddPerson = e => {
    e.preventDefault();
    const formattedPerson = { ...newPerson, budget: formatInput(newPerson.budget) };

    const saveData = {
      totalBudget: dashboard.totalBudget,
      people: [...dashboard.people, formattedPerson]
    };

    dispatch(saveDashboard(saveData));
  };

  //ADD NEW ITEM

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

  //EDIT  BUDGET

  const handleSaveBudget = e => {
    e.preventDefault();
    const saveData = {
      totalBudget: formatInput(newBudget),
      people: [...dashboard.people]
    };

    dispatch(saveDashboard(saveData));
    setNewBudget('');
  };

  return (
    <Modal {...rest} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="add-modal">
        {type === 'person' ? (
          <form className="form" onSubmit={handleAddPerson}>
            {errors ? (
              <div className="form-errors">
                <p>{errors.peopleName}</p>
                <p>{errors.peopleBudget}</p>
              </div>
            ) : null}
            <h1>Name</h1>
            <input
              type="text"
              id="name"
              name="name"
              value={newPerson.name}
              autoComplete="off"
              maxLength="20"
              onChange={e => setNewPerson({ ...newPerson, name: e.target.value })}
            />
            <h1>Budget</h1>
            <input
              type="number"
              id="budget"
              name="budget"
              autoComplete="off"
              maxLength="7"
              value={newPerson.budget}
              onChange={e => setNewPerson({ ...newPerson, budget: e.target.value })}
            />
            <button type="submit" className="btn btn-gradient">
              Add
            </button>
          </form>
        ) : type === 'totals' ? (
          <form className="form" onSubmit={handleSaveBudget}>
            {errors ? (
              <div className="form-errors">
                <p>{errors.totalBudget}</p>
              </div>
            ) : null}
            <h1>New Budget</h1>
            <input
              type="number"
              id="new-budget"
              name="new-bugdet"
              value={newBudget}
              maxLength="7"
              autoComplete="off"
              onChange={e => setNewBudget(e.target.value)}
            />
            <button type="submit" className="btn btn-gradient">
              Save
            </button>
          </form>
        ) : (
          <form className="form" onSubmit={handleAddItem}>
            {errors ? (
              <div className="form-errors">
                <p>{errors.itemName}</p>
                <p>{errors.itemCost}</p>
              </div>
            ) : null}
            <h1>Item Name</h1>
            <input
              type="text"
              id="item-name"
              name="item-name"
              value={newItem.itemName}
              autoComplete="off"
              maxLength="20"
              onChange={e => setNewItem({ ...newItem, itemName: e.target.value })}
            />
            <h1>Item Cost</h1>
            <input
              type="number"
              id="item-cost"
              name="item-cost"
              autoComplete="off"
              maxLength="7"
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
