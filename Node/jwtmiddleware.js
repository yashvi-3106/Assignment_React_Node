// Middleware to Protect Private Routes
// Task:
// Creat a middleware that verifies JWT tokens and restricts access to certain routes.

// Concepts Tested:

// req.headers.authorization
// JWT verification
// next()


const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(express.json());


let users = [
    { id: 1, name: 'Kirti Kapoor', email: 'kirtimehta43@gmail.com', age: 18, password: 'password123' },
    { id: 2, name: 'Purvi Mehta', email: 'purvi34@gmail.com', age: 19, password: 'password123' },
    { id: 3, name: 'Samay Shah', email: 'samaykshah56@gmail.com', age: 20, password: 'password123' }
];


const verifyToken = (req, res, next) => {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization header missing or invalid' });
    }

    const token = authHeader.split(' ')[1]; // Extract token after "Bearer"

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach decoded payload to request
        next(); // Proceed to next middleware/route
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};

// Login route to generate JWT
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);
    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create JWT payload
    const payload = {
        id: user.id,
        email: user.email
    };

    // Sign token
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({
        message: 'Login successful',
        token
    });
});


app.get('/', (req, res) => {
    res.send('Server is running');
});


app.get('/users', verifyToken, (req, res) => {
    res.json(users);
});


app.post('/users', (req, res) => {
    const { name, email, age, password } = req.body;
    
    if (!name || !email || !age || !password) {
        return res.status(400).json({ error: 'Name, email, age, and password are required.' });
    }
    
    const newUser = {
        id: users.length + 1,
        name,
        email,
        age,
        password
    };
    
    users.push(newUser);
    res.status(201).json(newUser);
});


app.get('/users/:id', verifyToken, (req, res) => {
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