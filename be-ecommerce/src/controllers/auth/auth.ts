import { Request, Response } from "express";

class AuthController {
  authAdmin = async (req: Request, res: Response) => {
    console.log(req.body);
    res.send("");
  };
}

export default AuthController;
