import LeftSide from "@/components/Shop/LeftSide";

const Shop = () => {
    return (
        <div className="container mx-auto md:p-0 px-4 grid md:grid-cols-12">
            <div className="md:col-span-3 hidden md:block w-full h-screen bg-blue-600">
                <LeftSide />
            </div>
            <div className="md:col-span-9 col-span-12 w-full h-screen bg-green-600">

            </div>
        </div>
    );
};

export default Shop;