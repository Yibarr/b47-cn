const { connect } = require('mongoose');

const options = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true };

connect(process.env.MONGO_URI, options)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`Error: ${err.message}`));
