import express from 'express';

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// POST route
app.post('/data', (req, res) => {
  console.log(req.body); // Log data from the client
  res.status(201).send('Data received');
});

// PUT route
app.put('/data', (req, res) => {
  // Handle the PUT request
  res.send('PUT request received');
});

// DELETE route
app.delete('/data', (req, res) => {
  // Handle the DELETE request
  res.send('DELETE request received');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
