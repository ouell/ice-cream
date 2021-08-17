// @ts-ignore
import express from "express";

import { itemsRouter } from "./routes";
import { mongooseConnect } from "./database/mongo";
import { handleError } from "./middlewares/error-handler";

const app = express();

app.use(express.json());
app.use(itemsRouter);
app.use(handleError);

mongooseConnect();

app.listen(3000);
