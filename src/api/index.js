const express = require('express');
const morgan = require('morgan');
const celebrate = require('celebrate');
const cors = require('cors');
const router = require('../routers/index.js');
const { dateNow } = require('../middlewares/index.js');

const app = express();
const PORT = process.env.PORT || 3006;

// closure
const bodyParser = express.json({ extended: true });

app.use(morgan('dev'));
app.use(bodyParser);
app.use(dateNow);
app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1> Sean Bienvenidos </h1>');
});

app.use('/api/v1', router);

app.use(celebrate.errors());

module.exports = {
  app,
  PORT,
};
