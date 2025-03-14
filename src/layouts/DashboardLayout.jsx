import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
import Header from "../components/Header/Header";

const DashboardLayout = () => {
  return (


    <div className="flex flex-col bg-gray-800 ">
      {/* <Header /> */}
      <main className="flex-1">
        <Outlet /> {/* Renders dashboard pages like API Keys, Profile, etc. */}
      </main>
    </div>

  );
};

export default DashboardLayout;
