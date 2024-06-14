import { Router } from "express";
import UserController from "../controller/user.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const UserRouter = Router();

UserRouter.post("/shared",authMiddleware,  UserController.getByType);
UserRouter.patch("/:uuid",authMiddleware, UserController.updateValue);

export default UserRouter;