const { PostService } = require('../services/index.js');

module.exports = {
  create: async (req, res) => {
    try {
      // eslint-disable-next-line camelcase
      const { img_url, description } = req.body;
      const { id } = req.decoded;
      const post = await PostService.create({ user_id: id, img_url, description });
      res.status(200).send({ payload: post });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
