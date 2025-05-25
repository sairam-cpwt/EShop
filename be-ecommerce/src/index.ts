import "module-alias/register";

import e, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import auth from "./routes/auth.route";
import cookie from "cookie-parser";
import connect from "./db/connection";

const port = process.env.APP_PORT || 3500;

const app = e();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

app.use(cookie());

app.use(e.json());
app.use(e.urlencoded({ extended: true }));

app.get("/api/v1/status", (req: Request, res: Response) => {
  res.json({
    message: "OK",
  });
});

app.use("/api/v1/login", auth);

const startServer = async () => {
  try {
    const status = await connect();
    app.listen(port, () => {
      console.log(`Server ${status ? "and database" : ""} running...`, port);
    });
  } catch (error: unknown) {
    console.log(error);
    throw new Error(error as string);
  }
};

startServer();
