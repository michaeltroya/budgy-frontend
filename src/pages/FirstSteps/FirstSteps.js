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
  const username = useSelector(state => state.dashboard.username);
  const dispatch = useDispatch();

  const [initialBudget, setInitialBudget] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    const updateData = {
      totalBudget: initialBudget,
      totalSpent: dashboard.totalSpent,
      totalRemaining: dashboard.totalRemaining,
      people: dashboard.people
    };

    dispatch(saveDashboard(updateData));
  };

  return (
    <Fragment>
      <Navbar page="forms" />
      <div className="first-steps">
        {dashboard.loading === true ? (
          <p>Loading...</p>
        ) : (
          <Container>
            <div className="welcome">
              <h1>{`Welcome ${username},`}</h1>
              <h4>
                Before you can start crunching your Christmas numbers we need to get you set up! You can
                always change your total budget whenever you want.
              </h4>
            </div>

            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                value={initialBudget}
                placeholder="Total Budget ($)"
                onChange={e => setInitialBudget(e.target.value)}
              />
              <button className="btn btn-gradient" type="submit">
                Set Budget
              </button>
            </form>
          </Container>
        )}
      </div>
    </Fragment>
  );
};

export default FirstSteps;
