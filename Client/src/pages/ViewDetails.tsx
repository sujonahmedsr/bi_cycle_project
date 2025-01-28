import cycle1 from "@/assets/cycle/bike.png"
import { Button } from "@/components/ui/button";
const ViewDetails = () => {
    return (
        <div className="container mx-auto py-5 grid grid-cols-5 gap-10">
            <div className="col-span-2 border">
                <img src={cycle1} className="w-full mx-auto" alt="cycle" />
            </div>
            <div className="col-span-3 space-y-5">
                <h1 className="text-3xl font-bold">vittoria corsa pro tr road tyre</h1>
                <div className="border">
                </div>
                <p className="text-base text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cum nemo consectetur molestiae voluptate et sequi atque quos, autem repellat nobis delectus dolor saepe nisi.</p>
                <div className="border">
                </div>
                <p className="text-2xl font-semibold">R 2,399.99</p>
                <div className="border">
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded">Add To Cart</Button>
            </div>
        </div>
    );
};

export default ViewDetails;