// GET All Users (Static or From Memory)
// Task:
// Create an endpoint /users that returns a hardcoded list of user objects.

// Concepts Tested:

// GET method
// JSON response
// Basic data structure (array of objects)

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); 


const users = [
    { id: 1, name: 'Kirti Kapoor', email: 'kirtimehta43@gmail.com' , age: 18},
    { id: 2, name: 'Purvi Mehta', email: 'purvi34@gmail.com', age: 19 },
    { id: 3, name: 'Samay Shah', email: 'samaykshah56@gmail.com' , age: 20 }
];


app.get('/', (req, res) => {
    res.send('Server is running');
});


app.get('/users', (req, res) => {
    res.json(users);
});

// POST New User
// Task:
// Create a POST /users route to add a user to an in-memory array.

// Concepts Tested:

// POST method
// req.body parsing
// Middleware usage (e.g., express.json())

app.post('/users', (req, res) => {
    const { name, email, age } = req.body;
  
    if (!name || !email || !age) {
      return res.status(400).json({ error: 'Name , email and age are required.' });
    }
  
    const newUser = {
      id: users.length + 1, 
      name,
      email,
      age
    };
  
    users.push(newUser);
    res.status(201).json(newUser);
  });


//   GET User by ID
// Task:
// Create a route /users/:id that returns a user by ID.

// Concepts Tested:

// req.params usage
// Conditional logic

  app.get('/users/:id', (req, res) => {
   
    const id = parseInt(req.params.id);
    
    const user = users.find(user => user.id === id);
    
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});