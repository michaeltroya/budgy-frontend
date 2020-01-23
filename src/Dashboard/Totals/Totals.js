import React from 'react';
//Redux Imports
import { useSelector } from 'react-redux';
//bs imports
import { Container, Row, Col } from 'react-bootstrap';

const Totals = () => {
  const dashboard = useSelector(state => state.dashboard);

  const handleSave = () => {
    console.log(dashboard);
  };
  return (
    <div className="dashboard-totals">
      <Container>
        <Row>
          <Col xs={6}>
            <div className="total-card">
              <h4>Budget</h4>
              <p>{dashboard.totalBudget}</p>
            </div>
          </Col>
          <Col xs={6}>
            <div className="total-card">
              <h4>Spent</h4>
              <p>{dashboard.totalSpent}</p>
            </div>
          </Col>
          <Col xs={12}>
            <div className="total-card">
              <h4>Remaining</h4>
              <p>{dashboard.totalBudget - dashboard.totalSpent}</p>
            </div>
          </Col>
          <Col xs={12} className="d-flex justify-content-center align-items-center">
            <button className="btn btn-white" onClick={handleSave}>
              Save
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Totals;
