import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const port = 3000;

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// creating this for generating much more clear and formatted way to displya error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
