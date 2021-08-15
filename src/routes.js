const routes = require("express").Router();

const ClientController = require("./controllers/client");

const { clientValidationsMiddleware } = require("./middlewares");

routes.post("/client", clientValidationsMiddleware, ClientController.create);

routes.get("/_health_check", (req, res) => res.send("ok"));

module.exports = routes;
