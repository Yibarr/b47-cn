const express = require('express');
const { UserController } = require('../controllers/index.js');
const { verifyToken } = require('../middlewares/index.js');

const router = express.Router();

router.patch('/users', verifyToken, UserController.update);

module.exports = router;
