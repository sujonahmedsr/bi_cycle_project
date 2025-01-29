import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { User } from "./User";

const DashboardProtected = ({ children, role }: { children: ReactNode, role: string }) => {
  const user = User()

  if (!user) {
    return <Navigate to={'/login'}></Navigate>;
  }

  if (user.role !== role) {
    return <Navigate to={user.role === "admin" ? "/AdminDashboard" : "/userDashboard"} />;
  }
  return children;
};

export default DashboardProtected;