import AppError from "../../errors/AppError";
import { Tuser } from "../../interfaces/errors";
import { productModel } from "../products/productsSchmeModel"
import { userModel } from "../User Model/userSchema.model";
import { orderUtils } from "./order.utils";
import { orderInterface } from "./ordersInterface"
import { orderModel } from "./ordersSchemaModel"


// create order 
const createOrder = async (user: Tuser, payload: { products: { product: string; quantity: number }[] }, client_ip: string) => {
    const id = user?.id

    const userData = await userModel.findById(id)


    if (!payload?.products?.length)
        throw new AppError(403, "Order is not specified");

    const products = payload.products;

    let totalPrice = 0;
    const productDetails = await Promise.all(
        products.map(async (item) => {
            const product = await productModel.findById(item.product);
            if (product) {
                const subtotal = product ? (product.price || 0) * item.quantity : 0;
                totalPrice += subtotal;
                return item;
            }
        })
    );
    // console.log(totalPrice);


    let order = await orderModel.create({
        user: id,
        products: productDetails,
        totalPrice,
    });

    // payment integration
    const shurjopayPayload = {
        amount: totalPrice,
        order_id: order._id,
        currency: "BDT",
        customer_name: userData?.name,
        customer_address: userData?.address,
        customer_email: userData?.email,
        customer_phone: userData?.phone,
        customer_city: userData?.city,
        client_ip,
    };

    const payment = await orderUtils.makePaymentAsync(shurjopayPayload);

    if (payment?.transactionStatus) {
        order = await order.updateOne({
            transaction: {
                id: payment.sp_order_id,
                transactionStatus: payment.transactionStatus,
            },
        });
    }

    return payment;


    // find product from productsModel Db 
    // const products = await productModel.findById(payload.product)
    // if (!products) {
    //     throw new Error('Product not found')
    // }

    // // quantity check 
    // if (products.quantity < payload.quantity) {
    //     throw new Error(
    //         `Insufficient stock. Only ${products.quantity} items available.`
    //     );
    // }
    // // reduce the quantity in the product model
    // products.quantity -= payload.quantity;

    // // If the inventory quantity goes to zero, set inStock to false.
    // if (products.quantity === 0) {
    //     products.inStock = false
    // }
    // // then save this 
    // await products.save()

    // // total price 
    // payload.totalPrice = payload.quantity * products.price


}

// for revenue 
const getAllOrder = async () => {
    // const result = await orderModel.aggregate([
    //     {
    //         $group: { _id: null, totalRevenue: { $sum: "$totalPrice" } },
    //     },
    //     {
    //         $project: { _id: 0, totalRevenue: 1 }
    //     }
    // ])
    const result = await orderModel.find()
    return result
}

const verifyPayment = async (order_id: string) => {
    const verifiedPayment = await orderUtils.verifyPaymentAsync(order_id);
  
    if (verifiedPayment.length) {
      await orderModel.findOneAndUpdate(
        {
          "transaction.id": order_id,
        },
        {
          "transaction.bank_status": verifiedPayment[0].bank_status,
          "transaction.sp_code": verifiedPayment[0].sp_code,
          "transaction.sp_message": verifiedPayment[0].sp_message,
          "transaction.transactionStatus": verifiedPayment[0].transaction_status,
          "transaction.method": verifiedPayment[0].method,
          "transaction.date_time": verifiedPayment[0].date_time,
          status:
            verifiedPayment[0].bank_status == "Success"
              ? "Paid"
              : verifiedPayment[0].bank_status == "Failed"
              ? "Pending"
              : verifiedPayment[0].bank_status == "Cancel"
              ? "Cancelled"
              : "",
        }
      );
    }
  
    return verifiedPayment;
  };
export const orderServices = {
    createOrder,
    getAllOrder,
    verifyPayment
}