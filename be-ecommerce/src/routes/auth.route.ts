import e from "express";
import AuthController from "../controllers/auth/auth";

const auth = e.Router();
const authController = new AuthController();

auth.route("/admin").post(authController.authAdmin);

export default auth;
