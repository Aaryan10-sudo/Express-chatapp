import { Router } from "express";
import {
  conversationController,
  conversationGetController,
} from "../controller/conversationController.js";

const conversationRouter = Router();
conversationRouter.route("/").post(conversationController);
conversationRouter.route("/:id").get(conversationGetController);

export default conversationRouter;
