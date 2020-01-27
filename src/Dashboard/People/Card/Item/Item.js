import React from 'react';
//Redux Imports
import { useDispatch, useSelector } from 'react-redux';

const Item = ({ personIndex, itemIndex, editingMode }) => {
  //GET REDUX STATES
  const dashboard = useSelector(state => state.dashboard);
  const item = useSelector(state => state.dashboard.people[personIndex].items[itemIndex]);

  return (
    <div className="item">
      <div className="item-name">{item.itemName}</div>
      <div className="item-right-side">
        <div className="item-cost">{item.itemCost}</div>
        {editingMode === true ? <div className="delete-item">X</div> : null}
      </div>
    </div>
  );
};

export default Item;
