import React, { useState, Fragment } from 'react';
import Navbar from '../../components/layout/Navbar/Navbar';
//Redux Imports
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/actions/userActions';
import { Container, Row, Col } from 'react-bootstrap';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const registerData = {
      username,
      email,
      password,
      confirmPassword
    };
    dispatch(registerUser(registerData));
  };

  return (
    <Fragment>
      <Navbar page="forms" />
      <div className="fullpage forms-page">
        <Container>
          <Row>
            <Col>
              <form className="form-container" onSubmit={handleSubmit}>
                <h5>Sign up for Budgy</h5>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  placeholder="username"
                  onChange={e => setUsername(e.target.value)}
                />

                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="email"
                  onChange={e => setEmail(e.target.value)}
                />

                <input
                  type="text"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="password"
                  onChange={e => setPassword(e.target.value)}
                />

                <input
                  type="text"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  placeholder="confirm password"
                  onChange={e => setConfirmPassword(e.target.value)}
                />
                <button type="submit" className="btn btn-gradient">
                  submit
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

export default Register;
