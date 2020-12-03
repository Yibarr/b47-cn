const { Post } = require('../models/index.js');

module.exports = {
  findOneById: (postId) => Post.findById(postId),
  create: (post) => new Post(post).save(),
  delete: (postId) => Post.findByIdAndDelete(postId),
  like: (postId, userId) => Post.findByIdAndUpdate(postId, { $addToSet: { user_likes: userId } }),
  likeRemove: (postId, userId) => Post.findByIdAndUpdate(postId, { $pull: { user_likes: userId } }),
  comment: (postId, userId, comment) => {
    const query = {
      $push: {
        comments: {
          $each: [{ comment, user_id: userId }],
        },
      },
    };
    return Post.findByIdAndUpdate(postId, query);
  },
  commentRemove: (postId, commentId) => {
    const query = { $pull: { comments: { _id: commentId } } };
    return Post.findByIdAndUpdate(postId, query);
  },
};
