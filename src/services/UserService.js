const { User } = require('../models/index.js');

module.exports = {
  create: (body) => new User(body).save(),
  emailExists: (email) => User.exists({ email }),
  findOneByEmail: (email) => User.findOne({ email }),
};
