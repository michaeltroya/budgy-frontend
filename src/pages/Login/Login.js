import React, { useState, Fragment } from 'react';
import Navbar from '../../components/layout/Navbar/Navbar';
//Redux Imports
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';
//bs imports

import { Container, Row, Col } from 'react-bootstrap';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <div className="fullpage register-page">
        <Container>
          <Row>
            <Col>
              <form className="form-container" onSubmit={handleSubmit}>
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
                  submit
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Login;
