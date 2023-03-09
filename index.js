const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.get('/users', (req, res) => {
    const users = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Bob' }
    ];
    res.json(users);
  });
  app.use(express.json());
  app.listen(4000, () => {
    console.log('Server listening at http://localhost:4000');
  });
  mongoose.connect('mongodb://localhost:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB', err);
});