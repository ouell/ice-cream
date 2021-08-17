// @ts-ignore
import cuid from "cuid";
// @ts-ignore
import moment from "moment";

import { ClientModel, IClient } from "../models/clientModels";
import { HttpException } from "../middlewares/error-handler";
import { isEmailUsed } from "../middlewares/error-handler/error";

export const createRepository = async (
  clientRequest: Omit<IClient, "id" | "isActive">
) => {
  try {
    const client = new ClientModel({
      ...clientRequest,
      id: cuid(),
      isActive: true,
      created_at: moment().toISOString(),
    });

    return await client.save();
  } catch (err) {
    if (isEmailUsed(err)) {
      throw new HttpException(400, ["Email already in use"]);
    }
  }
};
