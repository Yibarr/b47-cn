const { connect } = require('mongoose');

const options = { useNewUrlParser: true, useUnifiedTopology: true };

connect(process.env.MONGO_URI, options)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`Error: ${err.message}`));
