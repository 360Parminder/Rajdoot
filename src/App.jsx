import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Features from "./pages/Features";
import Docs from "./pages/Documentation";
import AuthLayout from "./layouts/AuthLayout";
import TermsService from "./pages/Policy/TermsService";
import PrivacyPolicy from "./pages/Policy/PrivacyPolicy";
import CookiePolicy from "./pages/Policy/CookiePolicy";
import Contact from "./pages/Policy/Contact";
import About from "./pages/Policy/About";
import NotFound from "./pages/NotFound";
import Plans from "./pages/Plans";
import PaymentComponent from "./components/PaymentComponent";
import APIReference from "./pages/APIReference";
import CancellationsRefunds from "./pages/Policy/CancellationsRefunds";
import Documentation from "./pages/Documentation";
import ScrollToTop from "./components/ScrollToTop";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import AuthCallback from "./hooks/AuthCallback";
import PaymentStatus from "./pages/PaymentStatus";


function App() {
  return (
   <>
       <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<Features />} />
          {/* <Route path="/pricing" element={<Pricing />} /> */}
          <Route path="/docs" element={<Docs />} />
          <Route path="/api-reference" element={<APIReference />} />
          <Route path="/terms-of-service" element={<TermsService/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/cookie-policy" element={<CookiePolicy/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/plans" element={<Plans/>} />
          <Route path="/payment" element={<PaymentComponent/>} />
          <Route path="/documentation" element={<Documentation/>} />
          <Route path="/CancellationsRefunds" element={<CancellationsRefunds/>} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/auth/callback" element={<AuthCallback />} />

        </Route>

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Protected Dashboard Routes with DashboardLayout */}
        <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/payment-status" element={<PaymentStatus />} />
            {/* <Route path="/api-keys" element={<APIKeys />} /> */}
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
  
   </>
    
  );
}

export default App;
