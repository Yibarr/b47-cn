const bcrypt = require('bcrypt');

module.exports = {
  compareSync: (password, hash) => bcrypt.compareSync(password, hash),
};
