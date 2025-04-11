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

// PUT to Update Entire User
// Task:
// Use a PUT /users/:id route to fully update a user object.

// Concepts Tested:

// Full object replacement
// Status codes (e.g., 404, 200)


app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;
  
    const userIndex = users.findIndex(u => u.id === userId);
  
    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }
  
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required.' });
    }
  
 
    users[userIndex] = { id: userId, name, email };
  
    res.status(200).json(users[userIndex]);
  });

//   PATCH to Partially Update a User
// Task : Create a PATCH /users/:id endpoint to update only selected fields.

// Concepts Tested:

// Partial update logic
// Merging existing data

  app.patch('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;
  
    const user = users.find(u => u.id === userId);
  
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
  
   
    if (name !== undefined) {
      user.name = name;
    }
    if (email !== undefined) {
      user.email = email;
    }
  
    res.json(user);
  });

//   DELETE a User
// Task:
// Create a DELETE /users/:id route to remove a user from the list.

// Concepts Tested:

// Array filtering
// Status codes (204 No Content, 404 Not Found)


  app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = users.length;
    
    users = users.filter(user => user.id !== id);
    
    if (users.length < initialLength) {
        
        res.status(204).send();
    } else {
        
        res.status(404).json({ message: 'User not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});