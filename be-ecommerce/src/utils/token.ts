import jwt from "jsonwebtoken";
import { Types } from "mongoose";

export const createToken = async (data: {
  id: Types.ObjectId;
  role: string;
}) => {
  const token = jwt.sign(data, process.env.SECRET as string, {
    expiresIn: "7d",
  });

  return token;
};
