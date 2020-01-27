import React from 'react';
//Redux Imports
import { useSelector } from 'react-redux';
//bs imports
import { Container, Row, Col } from 'react-bootstrap';

const Totals = () => {
  const dashboard = useSelector(state => state.dashboard);

  const getTotals = () => {
    let totals = { totalBudget: dashboard.totalBudget, totalSpent: 0, totalRemaining: 0 };

    if (dashboard.people.length === 0) {
      return totals.totalSpent;
    } else {
      for (let i = 0; i < dashboard.people.length; i++) {
        let items = dashboard.people[i].items;
        for (let j = 0; j < items.length; j++) {
          totals.totalSpent += dashboard.people[i].items[j].itemCost;
        }
      }
    }

    totals.totalRemaining = totals.totalBudget - totals.totalSpent;

    return totals;
  };

  return (
    <div className="dashboard-totals">
      <Container>
        <Row>
          <Col xs={6}>
            <div className="total-card">
              <h4>Total Budget</h4>
              <p>{getTotals().totalBudget}</p>
            </div>
          </Col>
          <Col xs={6}>
            <div className="total-card">
              <h4>Total Spent</h4>
              <p>{getTotals().totalSpent}</p>
            </div>
          </Col>
          <Col xs={12}>
            <div className="total-card">
              <h4>Total Remaining</h4>
              <p>{getTotals().totalRemaining}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Totals;
