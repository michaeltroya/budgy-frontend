import React, { useState } from 'react';
import { formatCurrency } from '@wangcch/format-currency';
//Redux Imports
import { useSelector } from 'react-redux';
//bs imports
import { Container, Row, Col } from 'react-bootstrap';
//FA imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
//component imports
import AddModal from '../../components/AddModal/AddModal';
//util imports
import { getTotals } from '../../util/util';

const Totals = () => {
  const dashboard = useSelector(state => state.dashboard);

  const [modalShow, setModalShow] = useState(false);

  const { totalSpent, totalRemaining } = getTotals(dashboard);

  return (
    <div className="dashboard-totals">
      <Container>
        <Row>
          <Col xs={6}>
            <div className="card total-card">
              <h4>Total Budget</h4>
              <p>{formatCurrency(dashboard.totalBudget)}</p>
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
              <p>{formatCurrency(totalSpent)}</p>
            </div>
          </Col>
          <Col xs={12}>
            <div className="card total-card">
              <h4>Total Remaining</h4>
              <p>{formatCurrency(totalRemaining)}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <AddModal show={modalShow} onHide={() => setModalShow(false)} type="totals" />
    </div>
  );
};

export default Totals;
