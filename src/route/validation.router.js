import { Router } from "express"
import ValidationController from "../controller/validation.controller.js";

const ValidationRouter = Router()

ValidationRouter.post("/", ValidationController.getByType);

export default ValidationRouter;


