import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-xl">
        <Outlet /> {/* Renders Login or Register page */}
      </div>
    </div>
  );
};

export default AuthLayout;
