import express from "express";
import { test, updateUser } from "../controllers/user.controllers.js";

const userRouter = express.Router();

userRouter.get("/test", test);
userRouter.post("update/:id", updateUser);

export default userRouter;
