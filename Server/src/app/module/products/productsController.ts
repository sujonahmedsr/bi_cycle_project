import { Request, Response } from "express";
import { productServices } from "./productsServices";

// create bycle product 
const createConProduct = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const result = await productServices.createProduct(body)
        res.status(200).send({
            messsage: 'Bicycle created successfully',
            success: true,
            data: result,
        })
    } catch (error: any) {
        res.status(500).send({
            messsage: error.message || 'Validation failed',
            success: false,
            error,
            stack: error?.stack
        })
    }
}

// get all bycles product 
const getConProduct = async (req: Request, res: Response) => {
    try {

        // serchterm query 
        const { searchTerm } = req.query;
        const filter: any = {};
        if (searchTerm) {
            filter.$or = [
                { name: { $regex: searchTerm, $options: 'i' } },
                { brand: { $regex: searchTerm, $options: 'i' } },
                { type: { $regex: searchTerm, $options: 'i' } }
            ];
        }

        const result = await productServices.getProducts(filter)
        res.status(200).send({
            messsage: 'Bicycles retrieved successfully',
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


// get single bycle product 
const getSingleConProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await productServices.getSingleProducts(id)
        res.status(200).send({
            messsage: 'Bicycle retrieved successfully',
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


// update single bycle product 
const updateSingleConProduct = async (req: Request, res: Response) => {
    try {
        const body = req.body
        const id = req.params.id
        const result = await productServices.updateSingleProducts(id, body)
        res.status(200).send({
            messsage: 'Bicycle updated successfully',
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

// delete single bycle 
const deleteSingleConProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        await productServices.deleteSingleProducts(id)
        res.status(200).send({
            messsage: 'Bicycle deleted successfully',
            status: true,
            data: {}
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

export const productController = {
    createConProduct,
    getConProduct,
    getSingleConProduct,
    updateSingleConProduct,
    deleteSingleConProduct
}