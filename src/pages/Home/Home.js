import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home-section">
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
    </section>
  );
};

export default Home;
