import { Request, Response } from "express";
import { AdminUserModal } from "@/modals/auth/AdminAuthModal";
import { AdminLoginBody } from "@/routes/schema/auth.schema";
import {
  ErrorResponse,
  errorResponse,
  SuccessResponse,
  successResponse,
} from "@/utils/response";
import bcrypt from "bcrypt";
import { createToken } from "@/utils/token";

class AuthController {
  authAdmin = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body as AdminLoginBody;

      const isAdminExist = await AdminUserModal.findOne({ email }).select(
        "+password"
      );

      if (isAdminExist) {
        const isPasswordMatch = await bcrypt.compare(
          password,
          isAdminExist.password
        );
        if (!isPasswordMatch) {
          errorResponse(res, "Email / Password invalids", 400);
          return;
        }

        const token = await createToken({
          id: isAdminExist?.id,
          role: isAdminExist?.role,
        });

        res.cookie("access_token", token, {
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        });
        successResponse(res, "Login success", { token: token }, 200);
      } else {
        errorResponse(res, "Email / Password invalid", 400);
        return;
      }
    } catch (error) {
      errorResponse(res, "Something went wrong");
    }
  };

  getUser = async (req: Request, res: Response) => {
    const { id, role } = req;

    try {
      if (role === "admin") {
        const user = await AdminUserModal.findById({ id });
        SuccessResponse(res, {
          data: user,
          message: "User logged in successfully",
        });
        return;
      }

      ErrorResponse(res, {
        message: "User not a admin",
      });
      return;
    } catch (error) {
      ErrorResponse(res, {
        message: "Something went wrong",
        statusCode: 400,
      });
    }
  };
}

export default AuthController;
