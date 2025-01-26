import { Request, Response } from "express";
import { productServices } from "./productsServices";
import asyncFunc from "../../utils/asyncFunc";
import sendResponse from "../../utils/sendRespose";
import { StatusCodes } from "http-status-codes";

// create bycle product 
const createConProduct = asyncFunc(async (req, res) => {
    const body = req.body;
    const result = await productServices.createProduct(body)
    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        message: 'Bi_Cycle created successfully',
        data: result
    })
})

// get all bycles product 
const getConProduct = asyncFunc(async (req, res) => {
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
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        message: 'Bicycles retrieved successfully',
        data: result
    })
})


// get single bycle product 
const getSingleConProduct = asyncFunc(async (req, res) => {
    const id = req.params.id
    const result = await productServices.getSingleProducts(id)
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        message: 'Bicycle retrieved successfully',
        data: result
    })
})
// async (req: Request, res: Response) => {
//     try {
//         const id = req.params.id
//         const result = await productServices.getSingleProducts(id)
//         res.status(200).send({
//             messsage: 'Bicycle retrieved successfully',
//             status: true,
//             data: result
//         })
//     } catch (error: any) {
//         res.status(500).send({
//             messsage: error.message || 'Something went wrong!',
//             status: false,
//             error,
//             stack: error?.stack
//         })
//     }
// }


// update single bycle product 
const updateSingleConProduct = asyncFunc(async (req, res) => {
    const body = req.body
    const id = req.params.id
    const result = await productServices.updateSingleProducts(id, body)
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        message: 'Bicycle updated successfully',
        data: result
    })
})
// async (req: Request, res: Response) => {
//     try {
//         const body = req.body
//         const id = req.params.id
//         const result = await productServices.updateSingleProducts(id, body)
//         res.status(200).send({
//             messsage: 'Bicycle updated successfully',
//             status: true,
//             data: result
//         })
//     } catch (error: any) {
//         res.status(500).send({
//             messsage: error.message || 'Something went wrong!',
//             status: false,
//             error,
//             stack: error?.stack
//         })
//     }
// }

// delete single bycle 
const deleteSingleConProduct = asyncFunc(async (req, res) => {
    const id = req.params.id
        await productServices.deleteSingleProducts(id)
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        message: 'Bicycle deleted successfully',
        data: null
    })
})
// async (req: Request, res: Response) => {
//     try {
//         const id = req.params.id
//         await productServices.deleteSingleProducts(id)
//         res.status(200).send({
//             messsage: 'Bicycle deleted successfully',
//             status: true,
//             data: {}
//         })
//     } catch (error: any) {
//         res.status(500).send({
//             messsage: error.message || 'Something went wrong!',
//             status: false,
//             error,
//             stack: error?.stack
//         })
//     }
// }

export const productController = {
    createConProduct,
    getConProduct,
    getSingleConProduct,
    updateSingleConProduct,
    deleteSingleConProduct
}