import React, { useState } from 'react';
//Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { saveDashboard } from '../../../redux/actions/dashboardActions';

const PeopleCard = ({ person, index }) => {
  const dashboard = useSelector(state => state.dashboard);
  const dispatch = useDispatch();

  const [newList, setNewList] = useState([...dashboard.people]);

  const handleEdit = () => {
    console.log(person.length);
  };

  const handleDelete = () => {
    setNewList(newList.splice(index, 1));

    const saveData = {
      totalBudget: dashboard.totalBudget,
      totalRemaining: dashboard.totalRemaining,
      totalSpent: dashboard.totalSpent,
      people: [...newList]
    };
    dispatch(saveDashboard(saveData));
  };

  return (
    <div className="card-wrapper" key={Math.random(1)}>
      <div className="people-card">
        <div className="card-header">
          <h3>{person.name}</h3>
        </div>
        <div className="card-content">
          <div className="card-section">
            <h4>Budget</h4>
            <p>{person.budget}</p>
          </div>
          <div className="card-section">
            <h4>Spent</h4>
            <p>{person.spent}</p>
          </div>
          <div className="card-section">
            <h4>Remaining</h4>
            <p>{person.remaining}</p>
          </div>
          {/* <div className="item-list">
      {person.items.map(item => {
        return <p key={Math.random(1)}>{`${item.itemName} $${item.itemCost}`}</p>;
      })}
    </div> */}
        </div>
        <div className="card-footer">
          <button className="btn btn-clear" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn btn-clear" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
