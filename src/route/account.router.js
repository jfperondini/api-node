import { Router } from "express"
import AccountController from "../controller/account.controller.js"
import authMiddleware from "../middlewares/authMiddleware.js";

const AccountRouter = Router()

AccountRouter.post("/singUp", AccountController.insert); 
AccountRouter.post("/login", AccountController.authenticate); 
AccountRouter.put("/user", AccountController.updateValue); 
AccountRouter.delete("/:uuid", authMiddleware, AccountController.deletar);

export default AccountRouter;


