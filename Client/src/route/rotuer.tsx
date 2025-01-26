import App from "@/App";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Singup from "@/pages/Singup";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
      }
    ]
  },
]);

export default router;
