import React, { useState } from 'react';
//Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { saveDashboard } from '../../../../redux/actions/dashboardActions';
//FA imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const Item = ({ personIndex, itemIndex, editingMode }) => {
  const dispatch = useDispatch();
  //GET REDUX STATES
  const dashboard = useSelector(state => state.dashboard);
  const item = useSelector(state => state.dashboard.people[personIndex].items[itemIndex]);

  const [updatedItems, setUpdatedItems] = useState([...dashboard.people[personIndex].items]);

  const handleDeleteItem = () => {
    setUpdatedItems(updatedItems.splice(itemIndex, 1));
    const ppl = [...dashboard.people];
    ppl[personIndex].items = [...updatedItems];

    const saveData = {
      totalBudget: dashboard.totalBudget,
      totalRemaining: dashboard.totalRemaining,
      totalSpent: dashboard.totalSpent,
      people: [...ppl]
    };

    dispatch(saveDashboard(saveData));
  };

  return (
    <div className="item">
      <div className="item-name">{item.itemName}</div>
      <div className="item-right-side">
        <div className="item-cost">{item.itemCost}</div>
        {editingMode === true ? (
          <FontAwesomeIcon icon={faMinusCircle} className="delete-item" onClick={handleDeleteItem} />
        ) : null}
      </div>
    </div>
  );
};

export default Item;
