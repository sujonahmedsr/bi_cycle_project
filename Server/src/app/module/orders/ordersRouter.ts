import { Router } from "express";
import { orderController } from "./ordersController";

const orderRouter = Router()

orderRouter.post('/', orderController.createConOrder)
orderRouter.get('/revenue', orderController.getAllConOrder)

export default orderRouter;