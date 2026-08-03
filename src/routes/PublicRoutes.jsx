import { Outlet } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const PublicRoutes = () => {
  return (
    <MainLayout>
      <Outlet /> {/* This will render the appropriate public page */}
    </MainLayout>
  );
};

export default PublicRoutes;
