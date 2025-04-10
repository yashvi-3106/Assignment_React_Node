// Toggle Show/Hide
// Problem: Create a button that toggles the visibility of a text (e.g., “Hello World”).

// Concepts Tested:

// Conditional rendering
// useState


import { useState } from 'react';

function ToggleText() {

  const [isVisible, setIsVisible] = useState(false);


  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Text
      </button>
      
      {isVisible && <p>Hello World</p>}
    </div>
  );
}

export default ToggleText;