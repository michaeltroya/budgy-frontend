import React, { useState } from 'react';
import PeopleCard from './PeopleCard/PeopleCard';
//Redux Imports
import { useSelector } from 'react-redux';
//bs imports
import { Container } from 'react-bootstrap';
//FA imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function People() {
  const dashboard = useSelector(state => state.dashboard);
  const [newCard, setNewCard] = useState(false);

  const personPlaceholder = {
    name: 'name',
    budget: '0',
    spent: '0',
    remaining: '0',
    items: []
  };

  const handleClick = e => {
    e.preventDefault();
    setNewCard(true);
    console.log(newCard);
  };

  const handleEdit = () => {
    console.log(dashboard);
  };

  return (
    <div className="dashboard-people">
      <Container fluid className="card-container">
        {dashboard.people.map(person => {
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
        })}
        {newCard === true ? <PeopleCard person={personPlaceholder} /> : null}
        <div className="card-wrapper">
          <div className="add-person" onClick={handleClick}>
            <FontAwesomeIcon icon={faPlusCircle} className="add-icon" />
            <h3>Add Person</h3>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default People;
