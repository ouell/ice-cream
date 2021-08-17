import { HttpException } from "../error-handler";
import { RequestHandler } from "express";
import * as yup from "yup";
import { parseDateString } from "../../commons/commons";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().required(),
  birthDate: yup.date().transform(parseDateString).required(),
  address: yup.string(),
  addressNumber: yup.string(),
  addressCity: yup.string(),
  addressPostalCode: yup.number(),
});

export const validations = (body: object) => {
  return schema.validate(body, {
    abortEarly: false
  });
};

export const clientValidationsMiddleware: RequestHandler = (req, res, next) => {
  const { body } = req;
  validations(body)
    .then(() => next())
    .catch((err) => next(new HttpException(400, err.errors)));
};
