import React from 'react';

// Child Component
const Child = ({ value }) => {
  console.log('Child component rendering with value:', value);
  return (
    <div>
      <h2>Child Component</h2>
      <p>Value from Parent: {value}</p>

      {value === 'John' && (
        <div>
        <p>Hello John!</p>
        <p>How are you doing today?</p>
        </div>

      )}
        {value === 'Tom' && (
        <div>
        <p>Hello Tom!</p>
        <p>Do you like running track?</p>
        </div>

      )}

    </div>
  );
};

export default Child;