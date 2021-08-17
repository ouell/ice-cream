import { config } from "dotenv";
// @ts-ignore
import mongoose from "mongoose";
config();

export const mongooseConnect = async () => {
  if (!process.env.CONNECTION_URL) return;
  await mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
