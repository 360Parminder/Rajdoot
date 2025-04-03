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
import TermsService from "./pages/TermsService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/Policy/CookiePolicy";
import Contact from "./pages/Policy/Contact";
import About from "./pages/Policy/About";
import NotFound from "./pages/NotFound";
import Plans from "./pages/Plans";


function App() {
  return (
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/pricing" element={<Pricing />} /> */}
          <Route path="/docs" element={<Docs />} />
          <Route path="/terms-of-service" element={<TermsService/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/cookie-policy" element={<CookiePolicy/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/plans" element={<Plans/>} />

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
        <Route path="*" element={<NotFound/>} />
      </Routes>
    
  );
}

export default App;
