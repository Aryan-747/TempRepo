
import React from 'react';
import { useLocation } from 'react-router-dom';

const User = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const username = queryParams.get('username');

  return (
    <div>
      <h1>User Page</h1>
      {username ? (
        <p>Hello, {username}!</p>
      ) : (
        <p>No username provided.</p>
      )}
    </div>
  );
};

export default User;
