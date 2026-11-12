
import express from "express";
import authRoute from "./modules/auth-routes.js";
import errorHandler from "./common/middleware/error.middleware.js";
import cors from "cors";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());

app.use("/api/auth", authRoute);

app.use(errorHandler);

export default app;
