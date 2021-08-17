// @ts-ignore
import express from 'express';
import * as ClientController from './controllers/clientController'
import { clientValidationsMiddleware } from "./middlewares";

export const itemsRouter = express.Router();

itemsRouter.post("/client", clientValidationsMiddleware, ClientController.create);
itemsRouter.get("/_health_check", (Request, Response) => Response.send("ok"));

