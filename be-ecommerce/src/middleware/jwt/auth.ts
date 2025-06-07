import { errorResponse } from "@/utils/response";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";

declare global {
  namespace Express {
    interface Request {
      id?: ObjectId;
      role?: string;
    }
  }
}

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { access_token } = req.cookies;

  if (!access_token) {
    errorResponse(
      res,
      {
        message: "Un Autorized, Please login",
      },
      401
    );
    return;
  }

  try {
    const decoded = jwt.verify(access_token, process.env.SECRET as string);

    const { id, role } = decoded as { id: ObjectId; role: string };

    req.id = id;
    req.role = role;

    next();
  } catch (error) {
    errorResponse(res, { message: "Failed with accesstoken" }, 500);
  }
};

export default authMiddleware;
