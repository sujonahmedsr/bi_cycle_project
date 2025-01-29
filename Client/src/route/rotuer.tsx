import App from "@/App";
import MyProfile from "@/components/userDashBoard/MyProfile";
import About from "@/pages/About";
import Cart from "@/pages/Cart";
import CheckOut from "@/pages/CheckOut";
import Contact from "@/pages/Contact";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Shop from "@/pages/Shop";
import Singup from "@/pages/Singup";
import UpdatePass from "@/components/userDashBoard/UpdatePass";
import ViewDetails from "@/pages/ViewDetails";
import { createBrowserRouter } from "react-router-dom";
import ProfileSetting from "@/components/userDashBoard/ProfileSetting";
import ViewOrders from "@/components/userDashBoard/ViewOrders";
import ProtectedRoutes from "@/utils/ProtectedRoutes";
import DashboardProtected from "@/utils/DashboardProtected";
import UserDashBoard from "@/pages/DashBoard/UserDashBoard";
import AdminDashBoard from "@/pages/DashBoard/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Shop />
      },
      {
        path: '/viewDetails',
        element: <ViewDetails />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/checkOut',
        element: <ProtectedRoutes>
          <CheckOut />
        </ProtectedRoutes>
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/singup',
        element: <Singup />
      },
    ]
  },
  {
    path: "/userDashboard",
    element: <DashboardProtected role="customer">
      <UserDashBoard />
    </DashboardProtected>,
    children: [
      {
        index: true,
        element: <MyProfile />
      },
      {
        path: "viewOrders",
        element: <ViewOrders />
      },
      {
        path: "updatePassword",
        element: <UpdatePass />
      },
      {
        path: "profileSetting",
        element: <ProfileSetting />
      }
    ]
  },
  {
    path: "/AdminDashboard",
    element: <DashboardProtected role="admin">
      <AdminDashBoard />
    </DashboardProtected>,
    children: [
      {
        index: true,
        element: <MyProfile />
      },
      {
        path: "viewOrders",
        element: <ViewOrders />
      },
      {
        path: "updatePassword",
        element: <UpdatePass />
      },
      {
        path: "profileSetting",
        element: <ProfileSetting />
      }
    ]
  }
]);

export default router;
