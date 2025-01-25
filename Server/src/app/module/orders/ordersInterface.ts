import { ObjectId } from "mongoose";

export interface orderInterface{
    email: string,
    product: ObjectId,
    quantity: number,
    totalPrice: number
}