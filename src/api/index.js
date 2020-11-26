const express = require('express');
const router = require('../routers/index.js');

const app = express();
const PORT = process.env.PORT || 3006;

app.use(express.json({ extended: true }));

app.get('/', (req, res) => {
  res.send('<h1> Sean Bienvenidos </h1>');
});

app.use('/api/v1', router);

module.exports = {
  app,
  PORT,
};
