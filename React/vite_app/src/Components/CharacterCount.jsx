// Character Count in Textarea
// Problem: Create a textarea that shows the number of characters typed in real time.

// Concepts Tested:

// useState
// Form handling

import { useState } from 'react';

function CharacterCounter() {
  
  const [text, setText] = useState('');

 
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type something here..."
        rows="5"
        cols="50"
      />
      <p>Character Count: {text.length}</p>
    </div>
  );
}

export default CharacterCounter;