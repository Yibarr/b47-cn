const { User } = require('../models/index.js');

module.exports = {
  create: (body) => new User(body).save(),
};
