import React, { useState } from 'react';
import Child from './Child'; // Import the Child component

// Parent Component
const Parent = () => {
  const [value, setValue] = useState('Initial Value'); // State in the parent

  const handleChange = (event) => {
    setValue(event.target.value); // Update state on input change
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type something to update child"
      />
      <Child value={value} /> {/* Pass state as a prop to the child */}
    </div>
  );
};

export default Parent;