import React from 'react';
import { Link } from 'react-router-dom';
// Bootstrap imports
import { Container, Row, Col } from 'react-bootstrap';
//img imports
import logo from '../../../images/light-logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <Container fluid>
        <Row>
          <Col className="navbar-logo-container" xs={6}>
            <Link to="/">
              <img src={logo} className="navbar-logo" alt="budgy" />
            </Link>
          </Col>
          <Col className="navbar-button-container" xs={6}>
            <button>Login</button>
            <button>Register</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
