const express = require('express');
const { UserController } = require('../controllers/index.js');
const { UserValidator } = require('../validators/index.js');

const router = express.Router();

router.use('/signup', UserValidator.create, UserController.create);

router.use('/login', UserValidator.login, UserController.login);

module.exports = router;
