import { Router } from "express";
import { productController } from "./productsController";
import authMid from "../Authentication/authMid";

const productsRouter = Router()

productsRouter.post('/create', authMid("admin"), productController.createConProduct)
productsRouter.get('/', authMid("admin"), productController.getConProduct)
productsRouter.get('/:id', authMid("admin"), productController.getSingleConProduct)
productsRouter.patch('/:id', authMid("admin"), productController.updateSingleConProduct)
productsRouter.delete('/:id',  authMid("admin"), productController.deleteSingleConProduct)

export default productsRouter