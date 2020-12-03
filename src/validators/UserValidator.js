const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi
      .object()
      .keys({
        profile_image: Joi.string(),
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        birth_date: Joi.date().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
      }),
  }),
  login: celebrate({
    [Segments.BODY]: Joi
      .object()
      .keys({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
      }),
  }),
  update: celebrate({
    [Segments.BODY]: Joi
      .object()
      .keys({
        is_active: Joi.boolean(),
        profile_image: Joi.string(),
        first_name: Joi.string(),
        last_name: Joi.string(),
        email: Joi.string().email(),
        password: Joi.string(),
      }),
  }),
  follow: celebrate({
    [Segments.PARAMS]: Joi
      .object()
      .keys({
        id: Joi.string().required(),
      }),
  }),
};
