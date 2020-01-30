import React, { useState, Fragment } from 'react';
import { formatCurrency } from '@wangcch/format-currency';
//Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { saveDashboard } from '../../../redux/actions/dashboardActions';
//component imports
import Item from './Item/Item';
import AddModal from '../../../components/AddModal/AddModal';
//util imports
import { getPeopleTotals } from '../../../util/util';

import { formatInput } from '../../../util/util';

const Card = ({ personIndex }) => {
  const dispatch = useDispatch();

  //GET REDUX STATES
  const dashboard = useSelector(state => state.dashboard);
  const person = useSelector(state => state.dashboard.people[personIndex]);

  //EDITING MODE & MODAL STATE
  const [editingMode, setEditingMode] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  // UPDATING VARIABLES IN EDITING MODE
  const [updatedPeople, setUpdatedPeople] = useState([...dashboard.people]);
  const [updatedBudget, setUpdatedBudget] = useState(person.budget);

  const handleDelete = () => {
    setUpdatedPeople(updatedPeople.splice(personIndex, 1));
    const saveData = {
      totalBudget: dashboard.totalBudget,
      people: [...updatedPeople]
    };
    dispatch(saveDashboard(saveData));
  };

  const handleSaveChanges = () => {
    const ppl = [...dashboard.people];
    ppl[personIndex].budget = formatInput(updatedBudget);
    setUpdatedPeople([...ppl]);
    const saveData = {
      totalBudget: dashboard.totalBudget,
      people: [...updatedPeople]
    };
    dispatch(saveDashboard(saveData));
  };

  const { spent, remaining } = getPeopleTotals(person);

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-header">
          <h3>{person.name}</h3>
        </div>
        <div className="card-content">
          <div className="card-section">
            <h4>Budget</h4>
            {editingMode === true ? (
              <input
                type="text"
                id="email"
                name="email"
                autoComplete="off"
                value={updatedBudget}
                onChange={e => setUpdatedBudget(e.target.value)}
              />
            ) : (
              <p>{formatCurrency(person.budget)}</p>
            )}
          </div>
          <div className="card-section">
            <h4>Spent</h4>
            <p>{formatCurrency(spent)}</p>
          </div>
          <div className="card-section">
            <h4>Remaining</h4>
            <p>{formatCurrency(remaining)}</p>
          </div>
        </div>
        <h3 className="item-heading">Items</h3>
        <div className="item-section">
          {person.items.map((_, itemIndex) => (
            <Item
              personIndex={personIndex}
              itemIndex={itemIndex}
              editingMode={editingMode}
              key={Math.random(0)}
            />
          ))}
        </div>
        <div className="add-item-section">
          <div className="item add-item" onClick={() => setModalShow(true)}>
            Add item
          </div>
        </div>

        <div className="card-footer">
          {editingMode === true ? (
            <Fragment>
              <button className="btn btn-clear" onClick={handleSaveChanges}>
                Save
              </button>
              <button className="btn btn-clear" onClick={() => setEditingMode(false)}>
                Cancel
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <button className="btn btn-clear" onClick={() => setEditingMode(true)}>
                Edit
              </button>
              <button className="btn btn-clear" onClick={handleDelete}>
                Delete
              </button>
            </Fragment>
          )}
        </div>
      </div>
      <AddModal show={modalShow} onHide={() => setModalShow(false)} type="item" personindex={personIndex} />
    </div>
  );
};

export default Card;
