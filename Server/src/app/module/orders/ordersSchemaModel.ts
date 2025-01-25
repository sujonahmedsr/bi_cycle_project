import mongoose, { model, Schema } from "mongoose";
import { orderInterface } from "./ordersInterface";
import validator from "validator";

// create scheme for orders 
const orderShchema = new Schema<orderInterface>({
    email: {type: String, required: [true, 'email field is required'], validate: {
        validator: (value: string) => validator.isEmail(value),
        message: '{VALUE} is no valid email'
    }},
    product: {type: mongoose.Types.ObjectId, required: [true, 'product field is required']},
    quantity: {type: Number, required: [true, 'quantity field is required'], min: [1, 'minimum 1 product select']},
    totalPrice: {type: Number, required: [true, 'totalPrice field is required']}
}, {timestamps: true, versionKey: false})

// create model for order 
export const orderModel = model<orderInterface>('orders', orderShchema)

