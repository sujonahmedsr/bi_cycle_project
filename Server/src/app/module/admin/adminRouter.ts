import { Router } from "express";
import authMid from "../Authentication/authMid";
import { adminController } from "./adminController";

const adminRouter = Router()

adminRouter.patch('/users/:userId/block', authMid('admin'), adminController.userBlockedByAdmin)


export default adminRouter