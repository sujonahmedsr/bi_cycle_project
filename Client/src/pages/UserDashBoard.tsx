import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { IoMdBicycle } from "react-icons/io";
import { useAppDispatch } from "@/Redux/hooks";
import { useLogoutMutation } from "@/Redux/Features/Auth/AuthApi";
import { logout } from "@/Redux/Features/Auth/AuthSlice";
import { toast } from "sonner";
import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";

const userNavItems = [
    {
        title: 'Home',
        icons: <FaHome className="text-xl"/>,
        link: '/userDashboard',
        path: '/userDashboard'
    },
    {
        title: 'View Orders',
        icons: <MdGridView className="text-xl"/>,
        link: 'viewOrders',
        path: '/userDashboard/viewOrders'
    },
    {
        title: 'Profile Settings',
        icons: <FaUser className="text-xl"/>,
        link: 'profileSetting',
        path: '/userDashboard/profileSetting'
    },
    {
        title: 'Update Password',
        icons: <IoMdSettings className="text-xl"/>,
        link: 'updatePassword',
        path: '/userDashboard/updatePassword'
    },
]

export default function UserDashBoard() {
    const dispatch = useAppDispatch()
    const [logoutDb] = useLogoutMutation()
    const handleLogout = async () => {
        await dispatch(logout())
        await logoutDb(undefined)
        toast.success("Log Out Ok...")
    }
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const location = useLocation();

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`bg-gray-200  ${isSidebarOpen ? "w-64 block" : "hidden"
                    } transition-all duration-300 overflow-y-auto`}
            >
                <div className="p-4 text-lg font-semibold border-b border-gray-700">
                    <Link to={'/'} className="text-2xl font-bold flex items-center gap-2">
                        <IoMdBicycle className="text-3xl text-blue-600" />
                        <h1>Cycle<span className="text-blue-600">_Labs</span></h1>
                    </Link>
                </div>

                <ul className="mt-4 space-y-3 px-4">

                    {
                        userNavItems.map((item, index) =>
                            <li key={index + 1}>
                                <Link
                                    to={item?.link}
                                    className={`w-full`}
                                >
                                    <button className={`w-full ${location.pathname === item.path ? "text-blue-600" : ""} text-start px-4 py-2 bg-white rounded flex items-center gap-2`}>
                                        {
                                            item.icons
                                        }
                                        {item?.title}
                                    </button>
                                </Link>
                            </li>)
                    }

                    <li >
                        <button
                            onClick={handleLogout}
                            className={"w-full px-4 py-2 bg-white rounded font-semibold text-center mt-10 flex items-center gap-2 hover:text-blue-600 "}
                        >
                            <IoLogOut className="text-xl"/>
                            Log out
                        </button>
                    </li>
                </ul>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col p-4">
                <button
                    className="text-gray-700 p-2 focus:outline-none"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
                        />
                    </svg>
                </button>
                {/* Content */}
                <div className="flex-1 bg-gray-50 overflow-y-auto p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}