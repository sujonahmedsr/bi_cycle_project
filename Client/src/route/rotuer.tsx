import App from "@/App";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Shop from "@/pages/Shop";
import Singup from "@/pages/Singup";
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
        path: '/login',
        element: <Login />
      },
      {
        path: '/singup',
        element: <Singup />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  },
]);

export default router;
