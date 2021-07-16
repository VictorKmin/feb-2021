const Joi = require('joi');

const { regexp, userRolesEnum } = require('../../constants');

const singleGirlScheme = Joi.object().keys({
  name: Joi.string(),
  age: Joi.number()
});

module.exports = {
  createUser: Joi.object().keys({
    name: Joi.string().required().min(3).max(50),
    email: Joi.string().regex(regexp.EMAIL_REGEXP),
    password: Joi.string().min(8).max(256).required(),
    age: Joi.number().min(1).max(120),
    // year: Joi.number().max(new Date().getFullYear())
    role: Joi.string().allow(...Object.values(userRolesEnum)),

    car: Joi.boolean(),

    girls: Joi.array()
      .items(singleGirlScheme)
      .when('car', { is: true, then: Joi.required() })
  })
};
