// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port
const port = 5000;

// Define a route handler for the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Make the app listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
