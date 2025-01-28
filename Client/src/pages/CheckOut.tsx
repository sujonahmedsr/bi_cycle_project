import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
const CheckOut = () => {
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
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
            </div>
            <div className="lg:col-span-5">
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
                        <Button variant={"outline"} className="w-full mt-4 p-2 rounded  hover:bg-blue-700 hover:text-white duration-200">Order Now</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;