import { Response } from "express";

export const SuccessResponse = (
  res: Response,
  config?: {
    message?: string;
    data: unknown;
    statusCode?: number;
  }
) => {
  return res.status(config?.statusCode || 200).json({
    ...config,
  });
};

export const ErrorResponse = (
  res: Response,
  config?: {
    message?: string;
    data?: unknown;
    statusCode?: number;
  }
) => {
  return res.status(config?.statusCode || 200).json({
    ...config,
  });
};

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
  message: unknown,
  statusCode: number = 500
) => {
  return res.status(statusCode ?? 500).json({
    success: false,
    message,
  });
};
