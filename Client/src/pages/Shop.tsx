import LeftSide from "@/components/Shop/LeftSide";
import RightSide from "@/components/Shop/RightSide";

const Shop = () => {
    return (
        <div className="container mx-auto py-4 md:px-0 px-4 grid md:grid-cols-12 gap-7">
            <div className="lg:col-span-3 md:col-span-4 hidden md:block">
                <LeftSide />
            </div>
            <div className="lg:col-span-9 md:col-span-8 col-span-12">
                <RightSide />
            </div>
        </div>
    );
};

export default Shop;