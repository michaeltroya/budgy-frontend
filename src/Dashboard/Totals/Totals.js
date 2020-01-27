import React from 'react';
//Redux Imports
import { useSelector } from 'react-redux';
//bs imports
import { Container, Row, Col } from 'react-bootstrap';

const Totals = () => {
  const dashboard = useSelector(state => state.dashboard);

  return (
    <div className="dashboard-totals">
      <Container>
        <Row>
          <Col xs={6}>
            <div className="total-card">
              <h4>Total Budget</h4>
              <p>{dashboard.totalBudget}</p>
            </div>
          </Col>
          <Col xs={6}>
            <div className="total-card">
              <h4>Total Spent</h4>
              <p>{dashboard.totalSpent}</p>
            </div>
          </Col>
          <Col xs={12}>
            <div className="total-card">
              <h4>Total Remaining</h4>
              <p>{dashboard.totalBudget - dashboard.totalSpent}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Totals;
