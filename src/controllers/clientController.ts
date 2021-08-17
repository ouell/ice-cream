import { applySpec, always, prop } from "ramda";
import * as ClientService from "../services/clientService";
import {RequestHandler} from "express";

const responseFormat = applySpec({
  data: {
    type: always("client"),
    id: prop("id"),
    name: prop("name"),
    phone: prop("phone"),
    email: prop("email"),
    address: prop("address"),
    addressNumber: prop("addressNumber"),
    addressCity: prop("addressCity"),
    addressPostalCode: prop("addressPostalCode"),
    birthDate: prop("birthDate"),
  },
});

export const create: RequestHandler = async (req, res, next) => {
  try {
    const { body: clientReq } = req;

    const createdClient = await ClientService.createService(clientReq);

    return res.status(201).json(responseFormat(createdClient));
  } catch (error) {
    next(error);
  }
};
