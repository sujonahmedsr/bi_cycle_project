/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAdminAllOrdersQuery } from "@/Redux/Features/Order/OrderApi";
import { Skeleton } from "../ui/skeleton";

const AllOrders = () => {
    const { data: allOrders, isLoading, isError } = useAdminAllOrdersQuery(undefined)
    const orders = allOrders?.data?.allOrders

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
    if (!isLoading && !isError && orders?.length === 0) {
        content = <div>
            <h1 className="text-red-600 font-semibold">No product found...</h1>
        </div>
    }
    if (!isLoading && !isError && orders?.length > 0) {
        content = orders?.map((item: any, index: number) => <tr key={index} className="border-t hover:bg-gray-100">
            <td className="p-3 first-line:gap-2">
                {item?.transaction?.id}
            </td>
            <td className="p-3  gap-2">
                {item?.user?.name}
            </td>
            <td className="p-3  gap-2">
                {item?.user?.email}
            </td>
            <td className="p-3  gap-2">
                {new Date(item?.createdAt).toLocaleDateString()}
            </td>
            <td className="p-3  gap-2">
                {item?.totalPrice}
            </td>
            <td className="p-3  gap-2">
                {item?.status}
            </td>
        </tr>)
    }
    return (
        <div className="space-y-5 container mx-auto">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">All Customers</h1>
            </div>
            <div className=" bg-gray-100 min-h-screen">

                <div className="bg-white shadow-lg rounded-lg overflow-x-scroll">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-3">Transaction Id</th>
                                <th className="p-3">Customer Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Date</th>
                                <th className="p-3">Total</th>
                                <th className="p-3">Status</th>
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

export default AllOrders;