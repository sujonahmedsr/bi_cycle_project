import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
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
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";

const userNavItems = [
  {
    title: 'Admin Dashboard',
    icons: <FaHome className="text-xl" />,
    link: '/adminDashboard',
    path: '/adminDashboard'
  },
  {
    title: 'All Products',
    icons: <MdGridView className="text-xl" />,
    link: 'allProducts',
    path: '/adminDashboard/allProducts'
  },
  {
    title: 'All User',
    icons: <FaUsers className="text-xl" />,
    link: 'allUsers',
    path: '/adminDashboard/allUsers'
  },
  {
    title: 'All Order',
    icons: <MdGridView className="text-xl" />,
    link: 'allOrders',
    path: '/adminDashboard/allOrders'
  },
  {
    title: 'Profile Settings',
    icons: <FaUser className="text-xl" />,
    link: 'profileSetting',
    path: '/adminDashboard/profileSetting'
  },
  {
    title: 'Update Password',
    icons: <IoMdSettings className="text-xl" />,
    link: 'updatePassword',
    path: '/adminDashboard/updatePassword'
  },
]

export default function AdminDashBoard() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [logoutDb] = useLogoutMutation()
  const handleLogout = async () => {
    await dispatch(logout())
    await logoutDb(undefined)
    navigate("/login")
    toast.success("Log Out Ok...")
  }
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-200 md:w-64 w-full
          md:block ${isSidebarOpen ? "block" : "hidden"} 
          transition-all duration-300 overflow-y-auto`}
      >
        <div className="p-4 text-lg font-semibold border-gray-700">
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
              <IoLogOut className="text-xl" />
              Log out
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between bg-gray-200 p-4">
        <button
            className="text-gray-700 p-2 focus:outline-none md:hidden block"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {
              isSidebarOpen ? <HiOutlineBars3BottomRight className="text-2xl" /> : <IoClose className="text-2xl" />
            }
          </button>
        </div>
        {/* Content */}
        <div className="flex-1 bg-gray-50 overflow-y-auto p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}