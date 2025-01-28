import { Link } from "react-router-dom";
import Cycle from "../Shop/Cycle";
import { Button } from "../ui/button";

const LatestProducts = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="text-center">
                <h1 className="text-2xl font-bold pb-5">LATEST <span className="text-blue-600">PRODUCTS</span></h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                <Cycle />
                <Cycle />
                <Cycle />
                <Cycle />
                <Cycle />
                <Cycle />
                <Cycle />
                <Cycle />
            </div>
            <div className="mt-5 mx-auto text-center">
                <Link to={'/products'}>
                    <Button variant={"outline"}>Show All</Button>
                </Link>
            </div>
        </div>
    );
};

export default LatestProducts;