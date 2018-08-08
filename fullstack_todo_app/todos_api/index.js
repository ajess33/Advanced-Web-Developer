const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');

const todoRoutes = require('./routes/todos');

// allows us to access the req body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes);

app.listen(8081, () => {
  console.log('APP IS RUNNING ON PORT 8081');
});
