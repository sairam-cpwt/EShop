import e from "express";
import AuthController from "../controllers/auth/auth";
import { validate } from "../middleware/auth/login";
import { AdminLoginSchema } from "./schema/auth.schema";
import authMiddleware from "@/middleware/jwt/auth";

const auth = e.Router();
const authController = new AuthController();

auth
  .route("/admin")
  .post(authMiddleware, validate(AdminLoginSchema), authController.authAdmin);

export default auth;
