const Joi = require("joi").extend(require("@joi/date"));
const { map, omit } = require("ramda");

const { ErrorHandler } = require("../error-handler");

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required(),
  birthDate: Joi.date(),
});

const validations = (body) => {
  return schema.validate(body, {
    convert: true,
    abortEarly: false,
  });
};

const removeUnusedProperties = map(omit(["type", "context"]));

const clientValidationsMiddleware = (req, res, next) => {
  try {
    const { body } = req;
    const { error } = validations(body);

    if (error) {
      const details = removeUnusedProperties(error.details);
      throw new ErrorHandler(400, details);
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  validations,
  clientValidationsMiddleware,
};
