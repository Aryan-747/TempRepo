
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the home page of the application.</p>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/user?username=John">User</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
