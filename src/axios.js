import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
   
        setLoading(true);
        
      
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        
        setPosts(response.data);
      } catch (error) {

        setError(error.message);
      } finally {
  
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h1>Fetched Posts from JSONPlaceholder</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;