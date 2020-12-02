const { Post } = require('../models/index.js');

module.exports = {
  create: (post) => new Post(post).save(),
};
