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
      console.log('Ayura');
      // TODO: Agregar token
      // TODO: Enviar token
      res.status(200).send({ payload: 'Ok' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
