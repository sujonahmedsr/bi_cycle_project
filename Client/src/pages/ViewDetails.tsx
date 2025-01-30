import cycle1 from "@/assets/cycle/bike.png"
import { Tproduct } from "@/components/Shop/RightSide";
import { Button } from "@/components/ui/button";
import { useSingleProductQuery } from "@/Redux/Features/Product/ProductApi";
import { addCard } from "@/Redux/Features/Product/ProductSlice";
import { useAppDispatch } from "@/Redux/hooks";
import { Link, useParams } from "react-router-dom";
const ViewDetails = () => {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const { data: singleProduct } = useSingleProductQuery(id)
    const cycle: Tproduct = singleProduct?.data

    
      const handleAddtoCart = () => {
        dispatch(addCard(cycle))
      }

    return (
        <div className="container mx-auto py-5 grid grid-cols-5 gap-10">
            <div className="col-span-2 border">
                <img src={cycle1} className="w-full mx-auto" alt="cycle" />
            </div>
            <div className="col-span-3 space-y-5">
                <p className="text-base">Created At: {new Date(cycle?.createdAt).toLocaleDateString()}</p>
                <h1 className="text-3xl font-bold">{cycle?.name}</h1>
                <h1 className="text-lg font-semibold">Brand: {cycle?.brand}</h1>
                <div className="border">
                </div>
                <h1 className="text-lg font-semibold">Type: {cycle?.type}</h1>
                <div className="border">
                </div>
                <p className="text-base text-gray-700">{cycle?.description}</p>
                <div className="border">
                </div>
                <p className="text-2xl font-semibold">Price: ${cycle?.price}</p>
                <div className="border">
                </div>
                <div className="flex items-center gap-5">
                    <Link to={'/cart'}>
                        <Button onClick={handleAddtoCart} variant={"outline"} className=" rounded">Buy Now</Button>
                    </Link>
                    <Button onClick={handleAddtoCart} className="bg-blue-600 hover:bg-blue-700 text-white rounded">Add To Cart</Button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;