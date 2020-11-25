const express = require('express');

const app = express();
const PORT = process.env.PORT || 3006;

app.get('/', (req, res) => {
  res.send('<h1> Sean Bienvenidos </h1>');
});

module.exports = {
  app,
  PORT,
};
