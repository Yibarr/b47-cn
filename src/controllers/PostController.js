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
  delete: async (req, res) => {
    try {
      const { id } = req.decoded;
      const { postId } = req.params;
      const post = await PostService.findOneById(postId);
      if (post.user_id !== id) throw new Error('Bad credentials');
      const deletedPost = await PostService.delete(postId);
      res.status(200).send({ payload: deletedPost });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  like: async (req, res) => {
    try {
      const { postId } = req.params;
      const { id } = req.decoded;
      const post = await PostService.like(postId, id).exec();
      res.status(200).send({ payload: post });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  likeRemove: async (req, res) => {
    try {
      const { postId } = req.params;
      const { id } = req.decoded;
      const post = await PostService.likeRemove(postId, id).exec();
      res.status(200).send({ payload: post });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  comment: async (req, res) => {
    try {
      const { body, params, decoded } = req;
      const comment = await PostService.comment(params.postId, decoded.id, body.comment);
      res.status(200).send({ payload: comment });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  commentRemove: async (req, res) => {
    try {
      const { body, params, decoded } = req;
      const post = await PostService.findOneById(params.postId);
      if (post.user_id !== decoded.id) throw new Error('Bad credentials');
      const deletedComment = await PostService.commentRemove(params.postId, body.comment_id);
      res.status(200).send({ payload: deletedComment });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
