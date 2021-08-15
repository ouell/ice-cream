const cuid = require("cuid");
const moment = require("moment");

const Client = require("../models/client");
const { ErrorHandler } = require("../middlewares/error-handler");
const { isEmailUsed } = require("../middlewares/error-handler/error");

exports.create = async ({
  name,
  email,
  phone,
  address,
  addressNumber,
  addressCity,
  addressPostalCode,
  birthDate,
}) => {
  try {
    const client = new Client({
      id: cuid(),
      name,
      email,
      phone,
      address,
      addressNumber,
      addressCity,
      addressPostalCode,
      birthDate,
      isActive: true,
      created_at: moment().toISOString(),
    });

    return await client.save();
  } catch (err) {
    if (isEmailUsed(err)) {
      throw new ErrorHandler(400, ["Email already in use"]);
    }
  }
};
