// Create a Simple Express Server
// Task:
// Set up a basic Express server that responds with "Server is running" on the root route (/).
// Express setup
// GET route

const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Server is running !');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
