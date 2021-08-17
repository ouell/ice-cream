// @ts-ignore
import cuid from "cuid";

import { ErrorRequestHandler } from "express";

export class HttpException extends Error {
  public statusCode: number;
  public details: string[];
  constructor(statusCode: number, details: string[]) {
    super();
    this.statusCode = statusCode;
    this.details = details;
  }
}

export const handleError: ErrorRequestHandler = (
  err: HttpException,
  req,
  res,
  next
) => {
  const { statusCode, details } = err;

  res.status(statusCode).json({
    errors: {
      id: cuid(),
      details,
    },
  });
};
