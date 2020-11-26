const { UserService } = require('../services/index.js');

module.exports = {
  create: async (req, res, next) => {
    try {
      const { body } = req;
      const newUser = await UserService.create(body);

      res.status(201).json({ payload: newUser });
    } catch (error) {
      next(error);
    }
  },
};
