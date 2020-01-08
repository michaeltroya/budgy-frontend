import React, { useState } from 'react';
//Redux Imports
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';

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
    <div>
      <form onSubmit={handleSubmit}>
        email:
        <input type="text" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
        password:
        <input
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
