import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
// import APIKeys from "./pages/APIKeys";
// import Pricing from "./pages/Pricing";
import Docs from "./pages/Documentation";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import PrivacyPolicy from "./pages/PrivacyPolicy";
// import NotFound from "./pages/NotFound";

function App() {
  return (
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/pricing" element={<Pricing />} /> */}
          <Route path="/docs" element={<Docs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        </Route>

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Protected Dashboard Routes with DashboardLayout */}
        <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/api-keys" element={<APIKeys />} /> */}
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<div>
          <h1>404 - Not Found</h1>
        </div>} />
      </Routes>
    
  );
}

export default App;
