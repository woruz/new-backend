import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import articleRoutes from "./routes/article.routes.ts";
import authRoutes from "./routes/auth.routes.ts";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/articles", articleRoutes);
app.use("/api/auth", authRoutes);

export default app;
