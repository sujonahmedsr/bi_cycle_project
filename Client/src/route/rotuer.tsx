import App from "@/App";
import MyProfile from "@/components/userDashBoard/MyProfile";
// import DashboardLayout from "@/components/Layouts/DashBoard/DashboardLayout";
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
import UserDashBoard from "@/pages/UserDashBoard";
import ViewDetails from "@/pages/ViewDetails";
import ProtectedRoute from "@/utils/ProtectedRoute";
import { createBrowserRouter } from "react-router-dom";
import ProfileSetting from "@/components/userDashBoard/ProfileSetting";
import ViewOrders from "@/components/userDashBoard/ViewOrders";

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
        element: <ProtectedRoute>
          <CheckOut />
        </ProtectedRoute>
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
    element: <ProtectedRoute>
      <UserDashBoard />
    </ProtectedRoute>,
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
  // {
  //   path: "/dashboard",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <div>
  //         Okay now
  //       </div>
  //     }
  //   ]
  // }
]);

export default router;
