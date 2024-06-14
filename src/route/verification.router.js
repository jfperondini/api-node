import { Router } from "express"
import VerificationController from "../controller/verification.controller.js";

const VerificationRouter = Router()

VerificationRouter.post("/", VerificationController.getByType);

export default VerificationRouter;


