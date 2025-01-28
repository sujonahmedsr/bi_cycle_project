import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import CartItem from "./CartItem";

const AllCart = () => {
    return (
        <div className="grid lg:grid-cols-12 gap-10 py-5">
            <div className="lg:col-span-8 flex flex-col gap-5">
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className="lg:col-span-4">
                <div className="border bg-white p-4 rounded sticky top-24">
                    <h2 className="font-semibold">Your Order</h2>
                    <div className="flex justify-between mt-2">
                        <span>Subtotal</span>
                        <span>R 2,599.99</span>
                    </div>
                    <div className="flex justify-between mt-1">
                        <span>Shipping</span>
                        <span>TBC</span>
                    </div>
                    <div className="flex justify-between mt-1 font-semibold">
                        <span>Total</span>
                        <span>R 2,599.99</span>
                    </div>
                    <Link to={"/checkOut"} className="w-full">
                        <Button className="w-full mt-4 p-2 rounded bg-blue-600 hover:bg-blue-700 text-white duration-200">Checkout Now</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllCart;