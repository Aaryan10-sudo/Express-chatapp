import { Router } from "express";
import {
  getUserController,
  loginUserController,
  userController,
} from "../controller/userController.js";

const userRouter = Router();
userRouter.route("/").post(userController);
userRouter.route("/").get(getUserController);
userRouter.route("/login").post(loginUserController);

export default userRouter;
