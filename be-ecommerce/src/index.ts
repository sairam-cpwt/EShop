import e, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import auth from "./routes/auth.route";
import cookie from "cookie-parser";

const port = process.env.APP_PORT || 3500;

const app = e();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5174"],
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

app.listen(port, () => {
  console.log("Server running...", port);
});
