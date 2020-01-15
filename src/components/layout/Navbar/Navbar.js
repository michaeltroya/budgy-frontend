import React from 'react';
import { Link } from 'react-router-dom';
// Bootstrap imports
import { Container, Row, Col } from 'react-bootstrap';
//img imports
import WhiteLogo from '../../../images/white-logo.png';
import MainLogo from '../../../images/main-logo.png';

const Navbar = ({ page }) => {
  return (
    <div className="navbar">
      <Container fluid>
        {page === 'home' ? (
          <Row>
            <Col className="navbar-logo-container" xs={5}>
              <Link to="/">
                <img src={WhiteLogo} className="navbar-logo" alt="budgy" />
              </Link>
            </Col>
            <Col className="navbar-button-container" xs={7}>
              <Link to="/login" className="navbar-login-button">
                Login
              </Link>
              <Link to="/register" className="btn btn-white">
                Register
              </Link>
            </Col>
          </Row>
        ) : page === 'forms' ? (
          <Row>
            <Col className="navbar-logo-container navbar-logo-center" xs={12}>
              <Link to="/">
                <img src={MainLogo} className="navbar-logo" alt="budgy" />
              </Link>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col className="navbar-logo-container navbar-logo-center" xs={12}>
              <Link to="/">
                <img src={MainLogo} className="navbar-logo" alt="budgy" />
              </Link>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
