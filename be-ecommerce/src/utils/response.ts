import { Response } from "express";

export const successResponse = (
  res: Response,
  message: string = "ok",
  data?: unknown,
  statusCode: number = 200
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const errorResponse = (
  res: Response,
  message: string,
  statusCode: number = 500
) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};
