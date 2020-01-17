import React, { Fragment } from 'react';
//component imports
import Navbar from '../../components/layout/Navbar/Navbar';
import People from '../../components/dashboard/People/People';
//Redux Imports
import { useSelector } from 'react-redux';
//BS imports
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  const dashboard = useSelector(state => state.dashboard);

  return (
    <Fragment>
      <Navbar page="dash" />
      <Container>
        <div className="dashboard">
          {dashboard.loading === true ? (
            <h1>loading ...</h1>
          ) : (
            <div>
              <Row>
                {dashboard.people.map(person => {
                  return (
                    <Col xs={6}>
                      <People person={person} />
                    </Col>
                  );
                })}
              </Row>
            </div>
          )}
        </div>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
