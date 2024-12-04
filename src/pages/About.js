// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About Page of The Application</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/user?username=John">User</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default About;
