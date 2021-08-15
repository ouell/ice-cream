const ClientRepository = require('../repositories/client');
const { ErrorHandler } = require('../middlewares/error-handler');

exports.create = async (ClientRepository, client) => {
  return ClientRepository.create(client);
};
