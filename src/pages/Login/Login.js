import React, { useState, Fragment } from 'react';
import Navbar from '../../components/layout/Navbar/Navbar';
//Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';
//bs imports

import { Container, Row, Col } from 'react-bootstrap';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const errors = useSelector(state => state.UI.errors);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const loginData = {
      email,
      password
    };
    dispatch(loginUser(loginData));
  };

  return (
    <Fragment>
      <Navbar page="forms" />
      <div className="fullpage forms-page">
        <Container>
          <Row>
            <Col>
              <h4>Log in to Budgy</h4>
              <form className="form-container" onSubmit={handleSubmit}>
                {errors ? (
                  <div className="form-errors">
                    <p>{errors.general}</p>
                    <p>{errors.email}</p>
                    <p>{errors.password}</p>
                  </div>
                ) : null}
                <input
                  placeholder="email"
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />

                <input
                  placeholder="password"
                  type="text"
                  id="password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <button type="submit" className="btn btn-gradient">
                  Log in
                </button>
              </form>
            </Col>
          </Row>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path d="M0,224L120,234.7C240,245,480,267,720,266.7C960,267,1200,245,1320,234.7L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
        </svg>

        <div className="bubble"></div>
      </div>
    </Fragment>
  );
};

export default Login;
