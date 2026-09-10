import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useAuth } from '../hooks/useAuth';
import MessageCard from '../components/Card/MessageCard';
import { ViewIcon, ViewOffIcon } from 'hugeicons-react';
import icon from '../assets/image/icon.png';

const Register = () => {
  const { register, googleLogin, loading } = useAuth();
  const [message, setMessage] = useState(null);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await register(formData.name, formData.email, formData.password, formData.confirmPassword);
      setMessage({
        title: "Success",
        message: "Account created successfully",
        type: "success"
      });
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      setError(error.message || "Registration failed");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
    } catch (err) {
      setError('Google signup failed');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA] dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 py-12 px-4 sm:px-6 lg:px-8 font-['Inter']">
      {message && (
        <MessageCard
          title={message.title}
          message={message.message}
          type={message.type}
          onClose={() => setMessage(null)}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-[400px] space-y-8"
      >
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 mb-6">
             <img src={icon} alt="Rajdoot Logo" className="w-8 h-8 object-contain" />
             <span className="text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100">Rajdoot</span>
          </Link>
          
          <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 tracking-tight mb-2">
            Create an account
          </h2>
          <p className="text-[15px] text-neutral-500 dark:text-neutral-400">
            Enter your details below to get started
          </p>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm"
          >
            {error}
          </motion.div>
        )}

        <div className="space-y-3">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 py-2.5 px-4 rounded-md text-sm font-medium transition-colors shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="16px" height="16px">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
            </svg>
            Sign up with Google
          </button>
        </div>

        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-neutral-200 dark:border-neutral-700"></div>
          <span className="flex-shrink-0 mx-4 text-xs font-medium text-neutral-400 dark:text-neutral-500 tracking-wider uppercase">
            Or sign up with email
          </span>
          <div className="flex-grow border-t border-neutral-200 dark:border-neutral-700"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-[13px] font-medium text-neutral-700 dark:text-neutral-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md px-3 py-2 text-[15px] text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[13px] font-medium text-neutral-700 dark:text-neutral-300">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md px-3 py-2 text-[15px] text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              placeholder="email@example.com"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[13px] font-medium text-neutral-700 dark:text-neutral-300">
              Password
            </label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md pl-3 pr-10 py-2 text-[15px] text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                placeholder="Create a password"
                required
                minLength="6"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <ViewOffIcon size={18} /> : <ViewIcon size={18} />}
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[13px] font-medium text-neutral-700 dark:text-neutral-300">
              Confirm Password
            </label>
            <div className="relative flex items-center">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md pl-3 pr-10 py-2 text-[15px] text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                placeholder="Confirm your password"
                required
                minLength="6"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? <ViewOffIcon size={18} /> : <ViewIcon size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-center pt-2 pb-2">
            <input
              type="checkbox"
              id="terms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              required
              className="h-4 w-4 rounded border-neutral-300 text-[#F05B43] focus:ring-[#F05B43] accent-[#F05B43] cursor-pointer"
            />
            <label htmlFor="terms" className="ml-2 block text-xs text-neutral-600 dark:text-neutral-400 cursor-pointer select-none">
              I agree to the{' '}
              <Link to="/terms-of-service" className="text-blue-600 dark:text-blue-400 hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={loading}
            className="w-full bg-[#F05B43] hover:bg-[#E04D36] text-white rounded-md py-2.5 text-[15px] font-medium transition-colors shadow-sm disabled:opacity-70 flex justify-center items-center"
          >
            {loading ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Account...
              </div>
            ) : (
              'Create Account'
            )}
          </motion.button>
        </form>

        <p className="text-center text-[14px] text-neutral-500 dark:text-neutral-400 pt-2">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
          >
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;