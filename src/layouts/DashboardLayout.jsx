import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
  return (
    <div className="flex flex-col bg-gray-800 ">
      <main className="flex-1">
        <Outlet /> {/* Renders dashboard pages like API Keys, Profile, etc. */}
      </main>
    </div>

  );
};

export default DashboardLayout;
