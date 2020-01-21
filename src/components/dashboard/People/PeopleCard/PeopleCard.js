import React from 'react';
//Redux Imports
import { useSelector } from 'react-redux';
const PeopleCard = ({ person }) => {
  const dashboard = useSelector(state => state.dashboard);

  const handleEdit = () => {
    console.log(dashboard);
  };

  return (
    <div className="card-wrapper">
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
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
