const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi
      .object()
      .keys({
        description: Joi.string().required(),
        img_url: Joi.string(),
      }),
  }),
};
