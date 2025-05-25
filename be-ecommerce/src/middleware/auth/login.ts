import { Request, Response, NextFunction } from "express";
import { ZodError, ZodSchema } from "zod";

export const validate = (schmea: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schmea.parse(req.body);
      next();
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((err) => {
          return {
            validation: err.path[0],
            message: err.message,
          };
        });

        res.status(400).json({
          message: "Validation Failed",
          errors: errorMessages,
        });
        return;
      }

      res.status(500).json({
        message: "Something went wrong",
      });
      return;
    }
  };
};
