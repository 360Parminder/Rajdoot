import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
import Header from "../components/Header/Header";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6">
          <Outlet /> {/* Renders dashboard pages like API Keys, Profile, etc. */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
