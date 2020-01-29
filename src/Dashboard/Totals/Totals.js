import React, { useState } from 'react';
//Redux Imports
import { useSelector } from 'react-redux';
//bs imports
import { Container, Row, Col } from 'react-bootstrap';
//FA imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
//component imports
import AddModal from '../../components/AddModal/AddModal';

const Totals = () => {
  const dashboard = useSelector(state => state.dashboard);

  const [modalShow, setModalShow] = useState(false);

  const getTotals = () => {
    let totals = { totalSpent: 0, totalRemaining: 0 };

    if (dashboard.people.length === 0) {
      totals.totalRemaining = dashboard.totalBudget;
      return totals;
    } else {
      for (let i = 0; i < dashboard.people.length; i++) {
        let items = dashboard.people[i].items;
        for (let j = 0; j < items.length; j++) {
          totals.totalSpent += dashboard.people[i].items[j].itemCost;
        }
      }
    }

    totals.totalRemaining = dashboard.totalBudget - totals.totalSpent;

    return totals;
  };

  return (
    <div className="dashboard-totals">
      <Container>
        <Row>
          <Col xs={6}>
            <div className="card total-card">
              <h4>Total Budget</h4>
              <p>{dashboard.totalBudget}</p>
              <FontAwesomeIcon
                icon={faPencilAlt}
                className="corner-icon"
                onClick={() => setModalShow(true)}
              />
            </div>
          </Col>
          <Col xs={6}>
            <div className="card total-card">
              <h4>Total Spent</h4>
              <p>{parseFloat(getTotals().totalSpent).toFixed(2)}</p>
            </div>
          </Col>
          <Col xs={12}>
            <div className="card total-card">
              <h4>Total Remaining</h4>
              <p>{parseFloat(getTotals().totalRemaining).toFixed(2)}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <AddModal show={modalShow} onHide={() => setModalShow(false)} type="totals" />
    </div>
  );
};

export default Totals;
