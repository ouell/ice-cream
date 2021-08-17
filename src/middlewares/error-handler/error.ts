import { MongoError } from "mongodb";

const alreadyInUseCode = 11000;

export const isEmailUsed = (err: MongoError) =>
  err.code === alreadyInUseCode;
