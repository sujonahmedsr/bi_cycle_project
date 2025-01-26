import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import { productInterface } from "./productsInterface";
import { productModel } from "./productsSchmeModel";


// create post 
const createProduct = async (payload: productInterface) => {
    const result = await productModel.create(payload)
    return result
}
// get all products 
const getProducts = async (filter: any) => {
    const result = await productModel.find(filter)
    return result
}
// get single product 
const getSingleProducts = async (id: string) => {

    const result = await productModel.findById(id)
    if (!result) {
        throw new AppError(StatusCodes.NOT_FOUND, 'This product is not found !')
    }
    return result
}
// update single product 
const updateSingleProducts = async (id: string, body: productInterface) => {
    const result = await productModel.findByIdAndUpdate(id, body, { new: true })
    if (!result) {
        throw new AppError(StatusCodes.NOT_FOUND, 'This product is not found !')
    }
    return result
}
// delete single product 
const deleteSingleProducts = async (id: string) => {
    const result = await productModel.findByIdAndDelete(id)
    if (!result) {
        throw new AppError(StatusCodes.NOT_FOUND, 'This product is not found !')
    }
    return result
}

export const productServices = {
    createProduct,
    getProducts,
    getSingleProducts,
    updateSingleProducts,
    deleteSingleProducts
}