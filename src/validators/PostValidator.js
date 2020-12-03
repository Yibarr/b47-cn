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
  delete: celebrate({
    [Segments.PARAMS]: Joi
      .object()
      .keys({
        postId: Joi.string().required(),
      }),
  }),
  like: celebrate({
    [Segments.PARAMS]: Joi
      .object()
      .keys({
        postId: Joi.string().required(),
      }),
  }),
  comment: celebrate({
    [Segments.PARAMS]: Joi
      .object()
      .keys({
        postId: Joi.string().required(),
      }),
    [Segments.BODY]: Joi
      .object()
      .keys({
        comment: Joi.string().required(),
      }),
  }),
  commentRemove: celebrate({
    [Segments.PARAMS]: Joi
      .object()
      .keys({
        postId: Joi.string().required(),
      }),
    [Segments.BODY]: Joi
      .object()
      .keys({
        comment_id: Joi.string().required(),
      }),
  }),
};
