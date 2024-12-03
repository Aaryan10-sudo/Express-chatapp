import { Router } from "express";
import { fetchMessages, testController } from "../controller/testController.js";

const testRouter = Router();
testRouter.route("/").post(testController);
testRouter.route("/").get(fetchMessages);

export default testRouter;
