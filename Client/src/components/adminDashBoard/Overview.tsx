import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { useAdminAllOrdersQuery } from "@/Redux/Features/Order/OrderApi";
import { PirChart } from "./PirChart";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Overview = () => {
    const { data: allOrders } = useAdminAllOrdersQuery(undefined)
    const orders = allOrders?.data?.totalRevenue

    const salesData = {
        totalSalesRevenue: 125000,
        unitsSold: 350,
        topSellingBicycles: [
            { model: "Speedster 300", unitsSold: 85, revenue: 25500 },
            { model: "MountainX Pro", unitsSold: 70, revenue: 28000 },
            { model: "Urban Ride S1", unitsSold: 65, revenue: 19500 },
            { model: "Trail Blazer 500", unitsSold: 60, revenue: 24000 },
            { model: "Commuter Plus", unitsSold: 50, revenue: 10000 },
        ],
    };
    const chartData = {
        labels: salesData.topSellingBicycles.map((bike) => bike.model),
        datasets: [
            {
                label: "Revenue ($)",
                data: salesData.topSellingBicycles.map((bike) => bike.revenue),
                backgroundColor: "rgba(59, 130, 246, 0.7)", // Tailwind blue-500
                borderRadius: 5,
            },
        ],
    };
    return (
        <div>
            <h2 className="text-3xl font-bold text-blue-600 text-center">Sales Dashboard</h2>

            {/* Key Metrics */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 py-5">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <h3 className="text-lg font-semibold text-gray-600">Total Sales Revenue</h3>
                    <p className="text-2xl font-bold text-blue-600">${orders?.totalRevenue}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <h3 className="text-lg font-semibold text-gray-600">Total Cycle Sold</h3>
                    <p className="text-2xl font-bold text-green-600">{orders?.totalSell} Bikes</p>
                </div>
            </div>

            {/* Bar Chart Section */}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                <div className="bg-white p-6 rounded-lg shadow-lg mt-6 ">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Top-Selling Bicycles</h3>
                    <Bar data={chartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
                </div>
                <PirChart />
            </div>
        </div>
    );
};

export default Overview;