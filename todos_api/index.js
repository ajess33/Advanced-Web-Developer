const express = require('express'),
  app = express();

const todoRoutes = require('./routes/todos');

app.get('/', (req, res) => {
  res.send('Hi there from express');
});

app.use('/api/todos', todoRoutes);

app.listen(3000, () => {
  console.log('APP IS RUNNING ON PORT 3000');
});
