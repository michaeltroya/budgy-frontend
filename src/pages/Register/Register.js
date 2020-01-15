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
      <div className="fullpage register-page">
        <Container>
          <Row>
            <Col>
              <form className="form-container" onSubmit={handleSubmit}>
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
      </div>
    </Fragment>
  );
};

export default Register;
