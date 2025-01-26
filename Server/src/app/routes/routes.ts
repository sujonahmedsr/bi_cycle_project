import { Router } from "express";
import authRouter from "../module/User Model/authRouter";
import adminRouter from "../module/admin/adminRouter";
import productsRouter from "../module/products/productsRoute";
const router = Router();
const moduleRoutes = [
  {
    path: "/auth",
    route: authRouter,
  },
  {
    path: "/admin",
    route: adminRouter,
  },
  {
    path: "/product",
    route: productsRouter,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
