// Live Search Filter
// Problem: Given a list of names, implement a live search input that filters the list as the user types.

// Concepts Tested:

// useState
// Filtering arrays
// Input handling


import { useState } from 'react';

function SearchFilter() {

  const initialNames = [
    'Virat',
    'Rajat',
    'Jitesh',
    'Bhuvneshwar',
    'Yash',
    'Krunal',
    'Hazelwood',
    'Devdut'
  ];

  
  const [searchTerm, setSearchTerm] = useState('');
  

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  
  const filteredNames = initialNames.filter(name =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Live Search Filter</h1>
      
   
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search names..."
      />
      
      
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      
   
      {filteredNames.length === 0 && (
        <p>No names match your search.</p>
      )}
    </div>
  );
}

export default SearchFilter;