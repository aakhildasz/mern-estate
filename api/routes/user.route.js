import express from "express";
import {
  deleteUser,
  getUserListings,
  test,
  updateUser,
  getUser,
} from "../controllers/user.controllers.js";
import { verifyToken } from "../utils/verifyUser.js";

const userRouter = express.Router();

userRouter.get("/test", test);
userRouter.post("/update/:id", verifyToken, updateUser);
userRouter.delete("/delete/:id", verifyToken, deleteUser);

userRouter.get("/listings/:id", verifyToken, getUserListings);

userRouter.get("/:id", verifyToken, getUser);

export default userRouter;
