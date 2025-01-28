import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { IoMdBicycle } from "react-icons/io";
import { useAppDispatch } from "@/Redux/hooks";
import { useLogoutMutation } from "@/Redux/Features/Auth/AuthApi";
import { logout } from "@/Redux/Features/Auth/AuthSlice";
import { toast } from "sonner";

export default function UserDashBoard() {
    const dispatch = useAppDispatch()
    const [logoutDb] = useLogoutMutation()
    const handleLogout = async () => {
        await dispatch(logout())
        await logoutDb(undefined)
        toast.success("Log Out Ok...")
    }
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    // const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

    const location = useLocation();

    // const toggleSubMenu = (menu: string) => {
    //     setExpandedMenu((prev) => (prev === menu ? null : menu));
    // };

    const isActive = (path: string) => location.pathname === path;
    // const isSubmenuActive = (paths: string[]) => paths.includes(location.pathname);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`bg-gray-200  ${isSidebarOpen ? "w-64 block" : "hidden"
                    } transition-all duration-300 overflow-y-auto`}
            >
                <div className="p-4 text-lg font-semibold border-b border-gray-700">
                    <Link to={'/userDashboard'} className="text-2xl font-bold flex items-center gap-2">
                        <IoMdBicycle className="text-3xl text-blue-600" />
                        <h1>Cycle<span className="text-blue-600">_Labs</span></h1>
                    </Link>
                </div>

                <ul className="mt-4 space-y-2 px-2">

                    <li>
                        <Link
                            to="/"
                            className={`block p-2 rounded-md ${isActive("/customers") ? "bg-gray-700" : "hover:bg-gray-700"
                                }`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="viewOrders"
                            className={`block p-2 rounded-md ${isActive("/customers") ? "bg-gray-700" : "hover:bg-gray-700"
                                }`}
                        >
                            View Orders
                        </Link>
                    </li>


                    {/* Settings */}
                    <li>
                        <Link
                            to="profileSetting"
                            className={`block p-2 rounded-md ${isActive("/settings") ? "bg-gray-700" : "hover:bg-gray-700"
                                }`}
                        >
                            Profile Settings
                        </Link>
                    </li>
                    {/* Settings */}
                    <li>
                        <Link
                            to="updatePassword"
                            className={`block p-2 rounded-md ${isActive("/settings") ? "bg-gray-700" : "hover:bg-gray-700"
                                }`}
                        >
                            Update Password
                        </Link>
                    </li>
                    <li onClick={handleLogout}>
                        <Link
                            to="updatePassword"
                            className={`block p-2 rounded-md ${isActive("/settings") ? "bg-gray-700" : "hover:bg-gray-700"
                                }`}
                        >
                            Log out
                        </Link>
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