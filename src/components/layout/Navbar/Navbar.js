import React from 'react';
// Bootstrap imports
import { Container, Row, Col } from 'react-bootstrap';

const Navbar = () => {
  return (
    <div className="navbar">
      <Container fluid>
        <Row>
          <Col>
            <h1>logo</h1>
          </Col>
          <Col>
            <h1>links</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
