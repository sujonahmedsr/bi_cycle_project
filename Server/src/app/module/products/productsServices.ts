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
    return result
}
// update single product 
const updateSingleProducts = async (id: string, body: productInterface) => {
    const result = await productModel.findByIdAndUpdate(id, body, { new: true })
    return result
}
// delete single product 
const deleteSingleProducts = async (id: string) => {
    const result = await productModel.findByIdAndDelete(id)
    return result
}

export const productServices = {
    createProduct,
    getProducts,
    getSingleProducts,
    updateSingleProducts,
    deleteSingleProducts
}