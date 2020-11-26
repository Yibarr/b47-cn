const express = require('express');
const UserRouter = require('./UserRouter.js');
const PostRouter = require('./PostRouter.js');

const router = express.Router();

router.use(UserRouter);
router.use(PostRouter);

module.exports = router;
