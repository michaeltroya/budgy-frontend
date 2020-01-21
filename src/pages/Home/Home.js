import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
//BS imports
import { Container, Row, Col } from 'react-bootstrap';
const Home = () => {
  return (
    <Fragment>
      <Navbar page="home" />
      <div className="home-page">
        <Container>
          <Row className="homepage-about">
            <Col xs={12}>
              <h1>Christmas budgeting done the easy way</h1>
              <p> Budgy helps you track your gifts and spending for each of your loved ones. </p>
            </Col>
            <Col xs={12}>
              <div className="homepage-getstarted-button">
                <Link to="/register" className="btn btn-white">
                  Get Started
                </Link>
              </div>
              <p className="homepage-login-button">
                <span className="question">Already have an account?</span>
                <Link to="/login" className="btn btn-clear">
                  Login
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Home;
