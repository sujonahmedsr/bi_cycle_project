import { Request, Response } from "express";
import { orderServices } from "./orderServices";
import { productModel } from "../products/productsSchmeModel";

const createConOrder = async (req: Request, res: Response) => {
    try {
        const body = req.body;

        // find product from productsModel Db 
        const products = await productModel.findById(body.product)
        if (!products) {
            throw new Error('Product not found')
        }

        // quantity check 
        if (products.quantity < body.quantity) {
            throw new Error(
                `Insufficient stock. Only ${products.quantity} items available.`
            );
        }
        // reduce the quantity in the product model
        products.quantity -= body.quantity;

        // If the inventory quantity goes to zero, set inStock to false.
        if (products.quantity === 0) {
            products.inStock = false
        }
        // then save this 
        await products.save()

        // total price 
        body.totalPrice = body.quantity * products.price

        const result = await orderServices.createOrder(body);
        res.status(200).send({
            message: "Order created successfully",
            success: true,
            data: result
        })
    } catch (error: any) {
        res.status(500).send({
            success: false,
            messsage: error.message || 'Validation failed',
            error,
            stack: error?.stack
        })
    }
}
const getAllConOrder = async (req: Request, res: Response) => {
    try {
        const result = await orderServices.getAllOrder();
        res.status(200).send({
            message: "Revenue calculated successfully",
            status: true,
            data: result
        })
    } catch (error: any) {
        res.status(500).send({
            messsage: error.message || 'Something went wrong!',
            status: false,
            error,
            stack: error?.stack
        })
    }
}

export const orderController = {
    createConOrder,
    getAllConOrder
}