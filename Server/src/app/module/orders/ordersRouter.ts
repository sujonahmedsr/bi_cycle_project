import { Router } from "express";
import { orderController } from "./ordersController";
import authMid from "../Authentication/authMid";

const orderRouter = Router()

orderRouter.get("/verify", authMid("customer", "admin"), orderController.verifyPayment);

orderRouter.post('/create-order', authMid("customer", "admin"), orderController.createConOrder)
orderRouter.get('/allOrders', orderController.getAllConOrder)

export default orderRouter;