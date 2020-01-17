import React from 'react';

const People = ({ person }) => {
  return (
    <div className="person-card">
      <p>{person.name}</p>
      <p>{person.budget}</p>
      <p>{person.spent}</p>
      <p>{person.remaining}</p>

      {person.items.map(item => {
        return <p>{`${item.itemName} $${item.itemCost}`}</p>;
      })}
    </div>
  );
};

export default People;
