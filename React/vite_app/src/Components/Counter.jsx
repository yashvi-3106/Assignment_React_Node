// Counter Component
// Problem: Create a counter component with increment, decrement, and reset buttons.

// Concepts Tested:

// useState
// Basic event handling

import { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0);

  // Event handler functions
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;