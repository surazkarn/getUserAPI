const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Bob Johnson' }
];

// GET "/api/users" - Get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET "/api/users/:id" - Get user by ID
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
