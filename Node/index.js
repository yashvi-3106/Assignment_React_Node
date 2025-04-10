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


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});