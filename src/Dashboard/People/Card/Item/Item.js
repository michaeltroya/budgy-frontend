import React, { useState } from 'react';
import { formatCurrency } from '@wangcch/format-currency';
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
    const ppl = JSON.parse(JSON.stringify(dashboard.people));
    ppl[personIndex].items = [...updatedItems];

    const saveData = {
      totalBudget: dashboard.totalBudget,
      people: [...ppl]
    };

    dispatch(saveDashboard(saveData));
  };

  return (
    <div className="item">
      <h4 className="item-name">{item.itemName}</h4>
      <div className="item-right-side">
        <p className="item-cost">{formatCurrency(item.itemCost)}</p>
        {editingMode === true ? (
          <FontAwesomeIcon icon={faMinusCircle} className="corner-icon" onClick={handleDeleteItem} />
        ) : null}
      </div>
    </div>
  );
};

export default Item;
