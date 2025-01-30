import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAppSelector } from "@/Redux/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const CheckOut = () => {
    const navigate = useNavigate()
    const { selectedItems, totalPrice } = useAppSelector(state => state.product)
    useEffect(() => {
        if(selectedItems === 0){
            navigate('/')
        }
    },[navigate, selectedItems])
    return (
        <div className="container mx-auto py-5 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 flex flex-col gap-5 rounded border p-5">
                <div className="flex gap-4">
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="firstname">First Name</Label>
                        <Input type="text" id="firstname" placeholder="First Name" />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="lastname">Last Name</Label>
                        <Input type="text" id="lastname" placeholder="Last Name" />
                    </div>
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="subject">Subject</Label>
                    <Input type="text" id="subject" placeholder="Subject" />
                </div>
                <div className="grid w-full gap-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea placeholder="Type your message here." id="message" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Order Now</Button>
            </div>
            <div className="lg:col-span-5">
                <div className="border bg-white p-4 rounded sticky top-24">
                    <h2 className="text-lg font-semibold text-center">Order Summary</h2>
                    <div className="flex justify-between mt-1">
                        <span>Total Item</span>
                        <span>{selectedItems}</span>
                    </div>

                    <div className="flex justify-between mt-2">
                        <span>Subtotal</span>
                        <span>Price: ${totalPrice}</span>
                    </div>
                    <div className='border my-3'>
                    </div>
                    <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>Price: ${totalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;