import { Router } from "express";
import {
  getMessageController,
  messageController,
} from "../controller/messageController.js";

export const messageRouter = Router();

messageRouter.route("/").post(messageController);
messageRouter.route("/:id").get(getMessageController);

export default messageRouter;
