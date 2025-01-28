import App from "@/App";
import DashboardLayout from "@/components/Layouts/DashBoard/DashboardLayout";
import About from "@/pages/About";
import Cart from "@/pages/Cart";
import CheckOut from "@/pages/CheckOut";
import Contact from "@/pages/Contact";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Shop from "@/pages/Shop";
import Singup from "@/pages/Singup";
import ViewDetails from "@/pages/ViewDetails";
import ProtectedRoute from "@/utils/ProtectedRoute";
import ProtectorSingInOrUp from "@/utils/ProtectorSingInOrUp";
import { createBrowserRouter } from "react-router-dom";

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
        element: <ProtectorSingInOrUp>
          <Login />
        </ProtectorSingInOrUp>
      },
      {
        path: '/singup',
        element: <ProtectorSingInOrUp>
          <Singup />
        </ProtectorSingInOrUp>
      },
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <div>
          Okay now
        </div>
      }
    ]
  }
]);

export default router;
