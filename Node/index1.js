const express = require('express');
const app = express();
const PORT = 3000;

const users = [
    {id : 1 , name : "yashvi" , age : 20 },
    {id : 2 , name : "priya" , age : 15},
];

app.get('/',(req , res) => {
    res.send("server is running");
});

app.get('/users' , (req,res) => {
    res.json(users);
});

app.post('/',(req, res) => {
    const { name ,  age } = res.body;
    const newUser = {
        id : users.length + 1,
        name,
        age
    };
    users.push(newUser)
    res.status(201).json(newUser);
})

app.listen(PORT, (req , res) => {
    console.log(`server is running on port ${PORT}`);
});