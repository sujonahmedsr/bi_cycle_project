import AddProduct from "./AddProduct";
import { useAllProductsQuery } from "@/Redux/Features/Product/ProductApi";
import { Skeleton } from "../ui/skeleton";
import { Tproduct } from "../Shop/RightSide";
import UpdateProduct from "./UpdateProduct";
import { IoClose } from "react-icons/io5";
import { AiOutlineCheck } from "react-icons/ai";

const AllProducts = () => {

    const { data: allProducts, isLoading, isError } = useAllProductsQuery(undefined)
    let content;

    if (isLoading && !isError) {
        content = <div className="flex items-center space-x-4 p-5">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    }
    if (!isLoading && isError) {
        content = <div>
            <h1 className="text-red-600 font-semibold">Something went wrong...</h1>
        </div>
    }
    if (!isLoading && !isError && allProducts?.data?.length === 0) {
        content = <div>
            <h1 className="text-red-600 font-semibold">No product found...</h1>
        </div>
    }
    if (!isLoading && !isError && allProducts?.data) {
        content = allProducts?.data?.map((item: Tproduct, index: number) =>
            <tr key={index} className="border-t hover:bg-gray-100 text-center">
                <td className="p-3 flex items-center gap-2">
                    <img src={item?.image} alt={item.name} className="w-8 h-8 rounded-full" />
                    {item.name}
                </td>
                <td className="p-3">{item.brand}</td>
                <td className="p-3 font-bold">${item.price.toFixed(2)}</td>
                <td className="p-3">{item.type}</td>
                <td className="p-3">
                    {item.quantity}
                </td>
                <td className="p-3 flex items-center justify-center">
                    {item?.quantity !== 0 ? <AiOutlineCheck className="text-blue-700"/> : <IoClose className="text-red-700"/>}
                </td>
                <td className="p-3 text-xl">
                    <UpdateProduct id={item?._id} />
                </td>
            </tr>
        )
    }


    return (
        <div className="space-y-5 w-full">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">Products</h1>
                <AddProduct />
            </div>
            <div className="w-full min-h-screen">

                <div className="rounded-lg">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-center">
                                <th className="p-3">Product Name</th>
                                <th className="p-3">brand</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">type</th>
                                <th className="p-3">quantity</th>
                                <th className="p-3">inStock</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {content}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;