import { FaEdit } from "react-icons/fa";


const productList = [
    { id: 1, image: "/images/product1.png", name: "HOM", category: "Home", price: 100, salePrice: 20, stock: 9792, status: "Selling", published: false },
    { id: 2, image: "/images/product2.png", name: "gh", category: "Tuna", price: 676, salePrice: 676, stock: 56, status: "Selling", published: false },
    { id: 3, image: "/images/product3.png", name: "Cross Tape Wearing", category: "Cleaner", price: 1000.01, salePrice: 950, stock: 46, status: "Selling", published: false },
    { id: 4, image: "/images/product4.png", name: "suntest", category: "Others", price: 2000, salePrice: 2000, stock: 0, status: "Sold Out", published: true },
    { id: 5, image: "/images/product5.png", name: "test3", category: "Fish & Meat", price: 1000, salePrice: 0, stock: 0, status: "Sold Out", published: true },
];
const AllOrders = () => {
    return (
        <div className="space-y-5">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">All Customers</h1>
            </div>
            <div className=" bg-gray-100 min-h-screen">

                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-3">Customer Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">role</th>
                                <th className="p-3">isBlocked</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productList.map((product) => (
                                <tr key={product.id} className="border-t hover:bg-gray-100">
                                    <td className="p-3 flex items-center gap-2">
                                        <img src={product.image} alt={product.name} className="w-8 h-8 rounded-full" />
                                        {product.name}
                                    </td>
                                    <td className="p-3">{product.category}</td>
                                    <td className="p-3 font-bold">${product.price.toFixed(2)}</td>
                                    <td className="p-3">{product.stock}</td>
                                    <td className="p-3 flex items-center gap-3">
                                        <FaEdit className="text-blue-600 cursor-pointer" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllOrders;