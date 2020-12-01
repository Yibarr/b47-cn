const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  compareSync: (password, hash) => bcrypt.compareSync(password, hash),
  // eslint-disable-next-line camelcase
  createToken: ({ id, email, first_name }) => {
    const payload = {
      id,
      email,
      first_name,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
  },
};
