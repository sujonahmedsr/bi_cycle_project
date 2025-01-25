import App from "@/App";
import Login from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
]);

export default router;
