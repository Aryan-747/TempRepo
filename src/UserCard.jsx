import React from 'react';

// Functional component UserCard
const UserCard = ({ name, age, location }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>User Information</h2>
      <p style={styles.info}><strong>Name:</strong> {name}</p>
      <p style={styles.info}><strong>Age:</strong> {age}</p>
      <p style={styles.info}><strong>Location:</strong> {location}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '300px',
    margin: '10px auto',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    fontSize: '20px',
    marginBottom: '15px',
  },
  info: {
    fontSize: '16px',
    color: '#555',
    margin: '5px 0',
  },
};


export default UserCard;
