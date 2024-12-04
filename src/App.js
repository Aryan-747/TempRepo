// Routing Question

/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
*/

import React, { useState, useEffect } from 'react';

const App = () => {
  // Set up state for the counter value
  const [counter, setCounter] = useState(0);

  // useEffect hook to log the counter value whenever it changes
  useEffect(() => {
    console.log(`Counter value changed to: ${counter}`);
  }, [counter]);  // The dependency array ensures this effect runs whenever 'counter' changes

  // Function to increment the counter
  const increment = () => {
    setCounter(counter + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;


