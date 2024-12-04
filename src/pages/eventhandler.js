// src/App.js
import React, { useState } from 'react';

const App = () => {
  // State to store the input value
  const [inputValue, setInputValue] = useState('');

  // Event handler to update the state when input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Input State Example</h1>

      {/* Input field with event handler */}
      <input
        type="text"
        value={inputValue} // Bind the value of input to state
        onChange={handleInputChange} // Event handler for input changes
        placeholder="Type something"
      />

      {/* Display the updated value */}
      <p>Input Value: {inputValue}</p>
    </div>
  );
};

export default App;
