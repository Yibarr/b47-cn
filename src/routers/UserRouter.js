const express = require('express');
const { UserController } = require('../controllers/index.js');
const { UserValidator } = require('../validators/index.js');
const { verifyToken } = require('../middlewares/index.js');

const router = express.Router();

router.patch('/users', verifyToken, UserValidator.update, UserController.update);

router.patch('/follow/:id', verifyToken, UserValidator.follow, UserController.follow);

router.patch('/unfollow/:id', verifyToken, UserValidator.follow, UserController.unfollow);

module.exports = router;
