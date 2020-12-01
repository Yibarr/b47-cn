const express = require('express');
const { UserController } = require('../controllers/index.js');
const { UserValidator } = require('../validators/index.js');

const router = express.Router();

router.use('/login', UserValidator.login, UserController.login);
router.use('/signup', UserValidator.create, UserController.create);

module.exports = router;
