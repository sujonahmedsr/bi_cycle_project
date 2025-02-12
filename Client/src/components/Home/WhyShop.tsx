import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import since from '@/assets/whyIcons/since.png'
import Assembly from '@/assets/whyIcons/Assembly.png'
import Advice from '@/assets/whyIcons/Advice.png'
import Shipping from '@/assets/whyIcons/Shipping.png'
import cycle from '@/assets/cycle/bike.png'

const WhyShop = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="text-center">
                <h1 className="text-2xl font-bold pb-5">WHY SHOP WITH CYCLE LABS?</h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
                <div className="p-10 flex items-center justify-between flex-col text-center border shadow space-y-3 bg-blue-50 rounded-md w-full">
                    <img src={since} className="w-10" alt="whyIcons" />
                    <h1 className="text-xl font-semibold">Since 1992</h1>
                    <p>Your trusted bike shop for over 32 years.</p>
                    <Link to={'/about'} className="w-full">
                        <Button variant={"outline"} className="w-full mt-5 rounded-none hover:bg-blue-700 hover:text-white">About Us →</Button>
                    </Link>
                </div>
                <div className="p-10 flex items-center justify-between flex-col text-center border shadow space-y-3 bg-blue-50 rounded-md">
                    <img src={Assembly} className="w-10" alt="whyIcons" />
                    <h1 className="text-xl font-semibold">Platinum Assembly</h1>
                    <p>Your new bike is professionally assembled, tuned and packaged.</p>
                    <Link to={'/products'} className="w-full">
                        <Button variant={"outline"} className="w-full mt-5 rounded-none hover:bg-blue-700 hover:text-white">Shop Now →</Button>
                    </Link>
                </div>
                <div className="p-10 flex items-center justify-between flex-col text-center border shadow space-y-3 bg-blue-50 rounded-md">
                    <img src={Advice} className="w-10" alt="whyIcons" />
                    <h1 className="text-xl font-semibold">Expert Advice</h1>
                    <p>Shopping for bikes online can be tough. Call us anytime or chat with a bike expert.</p>
                    <Link to={'/contact'} className="w-full">
                        <Button variant={"outline"} className="w-full mt-5 rounded-none hover:bg-blue-700 hover:text-white">Contact Us →</Button>
                    </Link>
                </div>
                <div className="p-10 flex items-center justify-between flex-col text-center border shadow space-y-3 bg-blue-50 rounded-md">
                    <img src={Shipping} className="w-10" alt="whyIcons" />
                    <h1 className="text-xl font-semibold">Free Shipping</h1>
                    <p>Shop with confidence, fast and free shipping on most orders</p>
                    <Link to={'/contact'} className="w-full">
                        <Button variant={"outline"} className="w-full mt-5 rounded-none hover:bg-blue-700 hover:text-white">More Info →</Button>
                    </Link>
                </div>
            </div>
            <section className="bg-white rounded-xl shadow-md mt-8 flex flex-col md:flex-row items-center">
                <img
                    src={cycle}
                    alt="Bicycle Workshop"
                    className="w-full md:w-1/2 rounded-lg"
                />
                <div className="md:ml-6 mt-4 md:mt-0">
                    <h3 className="text-2xl font-semibold text-gray-800">Our Story</h3>
                    <p className="text-gray-700 text-lg mt-2">
                        Founded by passionate cyclists, Cycle_Labs started as a small shop with a big dream: to make cycling accessible for everyone.
                        Today, we serve countless happy customers with our top-quality bicycles, expert repairs, and outstanding customer service.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default WhyShop;