const { applySpec, always, prop } = require("ramda");

const ClientRepository = require("../repositories/client");
const ClientService = require("../services/client");

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

exports.create = async (req, res, next) => {
  try {
    const { body: clientReq } = req;

    const createdClient = await ClientService.create(
      ClientRepository,
      clientReq
    );

    return res.status(201).json(responseFormat(createdClient));
  } catch (error) {
    next(error);
  }
};
