import express from 'express';
import AccountRouter from './route/account.router.js';
import UserRouter from './route/user.router.js';
import ValidationRouter from './route/validation.router.js';
import VerificationRouter from './route/verification.router.js';


const router = express.Router();

router.use("/auth", AccountRouter);
router.use("/user", UserRouter);
router.use("/validation", ValidationRouter);
router.use("/verification", VerificationRouter)


export default router;
