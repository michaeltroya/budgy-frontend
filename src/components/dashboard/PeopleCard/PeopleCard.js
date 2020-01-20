import React from 'react';

const PeopleCard = ({ person }) => {
  const handleEdit = () => {
    console.log('hi');
  };

  return (
    <div className="people-wrapper">
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

          {person.items.map(item => {
            return <p key={Math.random(1)}>{`${item.itemName} $${item.itemCost}`}</p>;
          })}
          <div className="card-section">
            <h4>Remaining</h4>
            <p>{person.remaining}</p>
          </div>
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
