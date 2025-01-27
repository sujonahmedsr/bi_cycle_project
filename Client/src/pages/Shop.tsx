import LeftSide from "@/components/Shop/LeftSide";
import RightSide from "@/components/Shop/RightSide";

const Shop = () => {
    return (
        <div className="container mx-auto p-4 grid md:grid-cols-12">
            <div className="md:col-span-2 hidden md:block">
                <LeftSide />
            </div>
            <div className="md:col-span-10 col-span-12">
                <RightSide />
            </div>
        </div>
    );
};

export default Shop;