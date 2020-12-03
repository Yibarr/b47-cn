const express = require('express');
const { PostController } = require('../controllers/index.js');
const { PostValidator } = require('../validators/index.js');
const { verifyToken } = require('../middlewares/index.js');

const router = express.Router();

router.post('/posts', verifyToken, PostValidator.create, PostController.create);

router.delete('/posts/:postId', verifyToken, PostValidator.delete, PostController.delete);

router.post('/posts/like/:postId', verifyToken, PostValidator.like, PostController.like);

router.delete('/posts/like/:postId', verifyToken, PostValidator.like, PostController.likeRemove);

router.post('/posts/comment/:postId', verifyToken, PostValidator.comment, PostController.comment);

router.delete('/posts/comment/:postId', verifyToken, PostValidator.commentRemove, PostController.commentRemove);

module.exports = router;
