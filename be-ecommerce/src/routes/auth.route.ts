import e from "express";
import AuthController from "../controllers/auth/auth";
import { validate } from "../middleware/auth/login";
import { AdminLoginSchema } from "./schema/auth.schema";

const auth = e.Router();
const authController = new AuthController();

auth.route("/admin").post(validate(AdminLoginSchema), authController.authAdmin);

export default auth;
