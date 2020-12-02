const { UserService } = require('../services/index.js');
const auth = require('../utils/auth.js');

module.exports = {
  create: async (request, response) => {
    try {
      const { body } = request;
      const emailExists = await UserService.emailExists(body.email);
      if (emailExists) throw new Error('Este correo ya está registrado');
      const payload = await UserService.create(body);
      response.status(201).json({ payload });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await UserService.findOneByEmail(email);
      if (!user) throw new Error('Credenciales incorrectas');
      const sync = auth.compareSync(password, user.password);
      if (!sync) throw new Error('Credenciales incorrectas');
      const token = auth.createToken(user);
      res.status(200).send({ payload: token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const { decoded, body } = req;
      const user = await UserService.findOneById(decoded.id);
      if (!user) throw new Error('User not found');
      const modifiedUser = await UserService.updateOne(user, body);
      modifiedUser.password = undefined;
      res.status(200).send({ payload: modifiedUser });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  follow: async (req, res) => {
    try {
      const { decoded, params } = req;
      const followerUser = decoded.id;
      const followingUser = params.id;
      const follower = await UserService.follow(followerUser, followingUser, 'following');
      const following = await UserService.follow(followingUser, followerUser, 'followers');
      following.password = undefined;
      follower.password = undefined;
      res.status(200).send({ payload: { following, follower } });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  unfollow: async (req, res) => {
    try {
      const { decoded, params } = req;
      const followerUser = decoded.id;
      const followingUser = params.id;
      const following = await UserService.unfollow(followerUser, followingUser, 'following');
      const follower = await UserService.unfollow(followingUser, followerUser, 'followers');
      following.password = undefined;
      follower.password = undefined;
      res.status(200).send({ payload: { following, follower } });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
