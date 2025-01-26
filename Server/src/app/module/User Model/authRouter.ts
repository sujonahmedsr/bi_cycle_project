import { Router } from "express";
import { userController } from "./userController";
import validateRequest from "../../middlewares/validateRequest";
import { userValidation } from "./userValidation";
import authMid from "../Authentication/authMid";

const authRouter = Router()

authRouter.post('/register', validateRequest(userValidation.userValidationSchema), userController.registerUser)
authRouter.post('/login', validateRequest(userValidation.userLoginValidation), userController.loginUser)
authRouter.post('/update-password', authMid("admin", "customer"), userController.resetPassword)

export default authRouter