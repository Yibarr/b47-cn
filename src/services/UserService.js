const { User } = require('../models/index.js');

module.exports = {
  create: (body) => new User(body).save(),
  emailExists: (email) => User.exists({ email }),
  findOneByEmail: (email) => User.findOne({ email }),
  findOneById: (id) => User.findById(id),
  updateOne: (user, body) => {
    Object.assign(user, body);
    return user.save();
  },
  follow: (id, targetId, type) => User.findByIdAndUpdate(id, { $addToSet: { [type]: targetId } }),
  unfollow: (id, targetId, type) => User.findByIdAndUpdate(id, { $pull: { [type]: targetId } }),
};
