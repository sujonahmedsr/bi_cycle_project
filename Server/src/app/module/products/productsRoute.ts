import { Router } from "express";
import { productController } from "./productsController";

const productsRouter = Router()

productsRouter.post('/', productController.createConProduct)
productsRouter.get('/', productController.getConProduct)
productsRouter.get('/:id', productController.getSingleConProduct)
productsRouter.put('/:id', productController.updateSingleConProduct)
productsRouter.delete('/:id', productController.deleteSingleConProduct)

export default productsRouter