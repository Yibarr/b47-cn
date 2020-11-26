const express = require('express');
const UserRouter = require('./UserRouter.js');

const router = express.Router();

router.use(UserRouter);

module.exports = router;
