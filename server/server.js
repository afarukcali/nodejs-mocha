const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'My App'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Ahmet',
    age: 23
  }, {
    name: 'Faruk',
    age: 25
  }, {
    name: 'Cali',
    age: 26
  }]);
});

app.listen(3000);
module.exports.app = app;
