import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import DashboardLayout from "../layouts/DashboardLayout";

const PrivateRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>; // Prevents flicker

  return user ? (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  ):(
      <Navigate to="/login" replace />
    );
};

export default PrivateRoutes;
