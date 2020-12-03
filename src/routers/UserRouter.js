const express = require('express');
const { UserController } = require('../controllers/index.js');
const { UserValidator } = require('../validators/index.js');
const { verifyToken } = require('../middlewares/index.js');

const router = express.Router();

router.patch('/users', verifyToken, UserValidator.update, UserController.update);

router.post('/follow/:id', verifyToken, UserValidator.follow, UserController.follow);

router.delete('/follow/:id', verifyToken, UserValidator.follow, UserController.unfollow);

module.exports = router;
