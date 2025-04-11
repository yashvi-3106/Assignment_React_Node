// JWT Authentication - Login Route
// Task:
// Implement a /login route that generates a JWT on valid credentials.

// Concepts Tested:

// jsonwebtoken library
// Signing tokens
// Environment variables


const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config(); 

const app = express();
const PORT = 3000;

app.use(express.json());


let users = [
    { id: 1, name: 'Priya Mehta', email: 'priya23@gmail.com', password: '1234567pass' },
    { id: 2, name: 'Krunal Pandya', email: 'krynalhpandya56@gmail.com', password: 'pass7654321' },
    { id: 3, name: 'Rajat Patidar', email: 'rajat567@gmail.com.com', password: 'password123' }
];


app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    
    const user = users.find(u => u.email === email);
    
    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    
    const payload = {
        id: user.id,
        email: user.email
    };
    
  
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '1h' 
    });
    
    res.json({
        message: 'Login successful',
        token: token
    });
});


app.get('/', (req, res) => {
    res.send('Server is running');
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password 
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users[userIndex] = {
            id: id,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password 
        };
        res.json(users[userIndex]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.patch('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users[userIndex] = {
            ...users[userIndex],
            ...req.body
        };
        res.json(users[userIndex]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

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