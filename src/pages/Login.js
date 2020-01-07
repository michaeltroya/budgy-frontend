import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const loginData = {
      email,
      password
    };

    axios
      .post('/auth/login', loginData)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err.response.data));

    console.log(loginData);
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
