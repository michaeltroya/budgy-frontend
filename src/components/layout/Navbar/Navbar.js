import React from 'react';
import { Link } from 'react-router-dom';
// Bootstrap imports
import { Container, Row, Col } from 'react-bootstrap';
//img imports
import logo from '../../../images/dark-logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <Container fluid>
        <Row>
          <Col className="navbar-logo-container" xs={5}>
            <Link to="/">
              <img src={logo} className="navbar-logo" alt="budgy" />
            </Link>
          </Col>
          <Col className="navbar-button-container" xs={7}>
            <Link to="/login" className="navbar-login-button">
              Login
            </Link>
            <Link to="/register" className="btn btn-gradient">
              Register
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
