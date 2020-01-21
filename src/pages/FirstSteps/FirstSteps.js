import React, { Fragment, useState } from 'react';
//Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { saveDashboard } from '../../redux/actions/dashboardActions';
//components imports
import Navbar from '../../components/Navbar/Navbar';
//BS imports
import { Container } from 'react-bootstrap';

const FirstSteps = () => {
  const dashboard = useSelector(state => state.dashboard);
  const dispatch = useDispatch();

  const [initialBudget, setInitialBudget] = useState(dashboard.totalBudget);

  const handleSubmit = e => {
    e.preventDefault();
    const updateData = {
      totalBudget: initialBudget,
      totalSpent: dashboard.totalSpent,
      totalRemaining: dashboard.totalRemaining,
      people: dashboard.people
    };

    dispatch(saveDashboard(updateData));
    localStorage.removeItem('firstLogin');
  };

  return (
    <Fragment>
      <Navbar page="forms" />
      <div className="first-steps" style={{ background: 'red', height: '100%' }}>
        <Container>
          <form className="form" onSubmit={handleSubmit}>
            <input type="text" value={initialBudget} onChange={e => setInitialBudget(e.target.value)} />
            <button className="btn btn-gradient" type="submit">
              Set Budget
            </button>
          </form>
        </Container>
      </div>
    </Fragment>
  );
};

export default FirstSteps;
