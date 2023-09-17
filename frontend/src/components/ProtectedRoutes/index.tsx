import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const userId: string | null = localStorage.getItem("@userId") || "null";

  return userId != "null" ? <Outlet /> : <Navigate to="/" />;
};
