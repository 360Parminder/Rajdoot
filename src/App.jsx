import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import LandingPage from "./pages/LandingPage";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
// import APIKeys from "./pages/APIKeys";
// import Pricing from "./pages/Pricing";
import Docs from "./pages/Documentation";
import DashboardLayout from "./layouts/DashboardLayout";
// import NotFound from "./pages/NotFound";

function App() {
  return (
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/pricing" element={<Pricing />} /> */}
          <Route path="/docs" element={<Docs />} />
        </Route>

        {/* Auth Routes */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}

        {/* Private Routes (Require Authentication) */}
        <Route element={<PrivateRoutes />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/api-keys" element={<APIKeys />} /> */}
          </Route>
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<div>
          <h1>404 - Not Found</h1>
        </div>} />
      </Routes>
    
  );
}

export default App;
