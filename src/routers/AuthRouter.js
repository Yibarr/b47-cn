const express = require('express');
const { UserController } = require('../controllers/index.js');

const router = express.Router();

router.use('/login', UserController.login);
router.use('/signup', UserController.create);

module.exports = router;
