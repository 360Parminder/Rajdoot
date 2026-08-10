import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useAuth } from '../hooks/useAuth';
import MessageCard from '../components/Card/MessageCard';
import posthog from 'posthog-js';
import { ViewIcon, ViewOffIcon } from 'hugeicons-react';
import { cn } from "../lib/utils";

const Login = () => {
  const { login, googleLogin } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login(formData.email, formData.password);
      posthog.identify();
      setMessage({
        title: 'Login Successful',
        message: 'You have successfully logged in.',
        type: 'success',
      });
    } catch (error) {
      setError(error.message || "Login failed");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
    } catch (err) {
      setError('Google login failed');
    }
  };

  return (
    <div className={cn('min-h-screen', 'flex', 'flex-col', 'items-center', 'justify-center', 'bg-[#FAFAFA]', 'dark:bg-neutral-950', 'text-neutral-900', 'dark:text-neutral-100', 'py-12', 'px-4', 'sm:px-6', 'lg:px-8', 'font-inter')}>
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
        className={cn('w-full', 'max-w-[400px]', 'space-y-8')}
      >
        <div className={cn('flex', 'flex-col', 'items-center', 'text-center')}>
          {/* Logo */}
          <Link to="/" className={cn('flex', 'items-center', 'gap-1.5', 'mb-6')}>
             <div className={cn('bg-[#F05B43]', 'text-white', 'p-1', 'rounded')}>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="9" y1="10" x2="15" y2="10"></line><line x1="12" y1="7" x2="12" y2="13"></line></svg>
             </div>
             <span className={cn('text-xl', 'font-bold', 'tracking-tight', 'text-neutral-800', 'dark:text-neutral-100')}>Rajdoot</span>
          </Link>
          
          <h2 className={cn('text-2xl', 'font-semibold', 'text-neutral-800', 'dark:text-neutral-100', 'tracking-tight', 'mb-2')}>
            Log in to your account
          </h2>
          <p className={cn('text-[15px]', 'text-neutral-500', 'dark:text-neutral-400')}>
            Enter your email and password below to log in
          </p>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn('bg-red-50', 'dark:bg-red-900/20', 'border', 'border-red-200', 'dark:border-red-800', 'text-red-600', 'dark:text-red-400', 'px-4', 'py-3', 'rounded-lg', 'text-sm')}
          >
            {error}
          </motion.div>
        )}

        <div className="space-y-3">
          <button
            type="button"
            className={cn('w-full', 'flex', 'items-center', 'justify-center', 'gap-2', 'bg-[#F3F4F6]', 'dark:bg-neutral-800', 'hover:bg-[#E5E7EB]', 'dark:hover:bg-neutral-700', 'text-neutral-700', 'dark:text-neutral-200', 'py-2.5', 'px-4', 'rounded-md', 'text-sm', 'font-medium', 'transition-colors')}
          >
           <svg width="16px" height="16px"  viewBox="0 0 1024 1024" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#ffff"/></svg>
            Continue with GitHub
          </button>
          
          <button
            type="button"
            onClick={handleGoogleLogin}
            className={cn('w-full', 'flex', 'items-center', 'justify-center', 'gap-2', 'bg-white', 'dark:bg-neutral-900', 'hover:bg-neutral-50', 'dark:hover:bg-neutral-800', 'border', 'border-neutral-200', 'dark:border-neutral-700', 'text-neutral-700', 'dark:text-neutral-200', 'py-2.5', 'px-4', 'rounded-md', 'text-sm', 'font-medium', 'transition-colors', 'shadow-sm')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="16px" height="16px">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
            </svg>
            Continue with Google
          </button>
        </div>

        <div className={cn('relative', 'flex', 'items-center', 'py-2')}>
          <div className={cn('flex-grow', 'border-t', 'border-neutral-200', 'dark:border-neutral-700')}></div>
          <span className={cn('flex-shrink-0', 'mx-4', 'text-xs', 'font-medium', 'text-neutral-400', 'dark:text-neutral-500', 'tracking-wider', 'uppercase')}>
            Or continue with email
          </span>
          <div className={cn('flex-grow', 'border-t', 'border-neutral-200', 'dark:border-neutral-700')}></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className={cn('block', 'text-[13px]', 'font-medium', 'text-neutral-700', 'dark:text-neutral-300')}>
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={cn('w-full', 'bg-white', 'dark:bg-neutral-900', 'border', 'border-neutral-300', 'dark:border-neutral-700', 'rounded-md', 'px-3', 'py-2', 'text-[15px]', 'text-neutral-900', 'dark:text-neutral-100', 'placeholder-neutral-400', 'focus:outline-none', 'focus:ring-4', 'focus:ring-blue-500/20', 'focus:border-blue-500', 'transition-all')}
              placeholder="email@example.com"
              required
            />
          </div>

          <div className="space-y-1.5">
            <div className={cn('flex', 'items-center', 'justify-between')}>
              <label className={cn('block', 'text-[13px]', 'font-medium', 'text-neutral-700', 'dark:text-neutral-300')}>
                Password
              </label>
              <Link
                to="/forget-password"
                className={cn('text-[13px]', 'font-medium', 'text-neutral-500', 'dark:text-neutral-400', 'hover:text-neutral-800', 'dark:hover:text-neutral-200')}
              >
                Forgot password?
              </Link>
            </div>
            <div className={cn('relative', 'flex', 'items-center')}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={cn('w-full', 'bg-white', 'dark:bg-neutral-900', 'border', 'border-neutral-300', 'dark:border-neutral-700', 'rounded-md', 'pl-3', 'pr-10', 'py-2', 'text-[15px]', 'text-neutral-900', 'dark:text-neutral-100', 'placeholder-neutral-400', 'focus:outline-none', 'focus:ring-4', 'focus:ring-blue-500/20', 'focus:border-blue-500', 'transition-all')}
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={cn('absolute', 'right-3', 'text-neutral-400', 'hover:text-neutral-600', 'dark:hover:text-neutral-200', 'transition-colors')}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <ViewOffIcon size={18} /> : <ViewIcon size={18} />}
              </button>
            </div>
          </div>

          <div className={cn('flex', 'items-center', 'pt-1', 'pb-1')}>
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className={cn('h-4', 'w-4', 'rounded', 'border-neutral-300', 'text-[#F05B43]', 'focus:ring-[#F05B43]', 'accent-[#F05B43]', 'cursor-pointer')}
            />
            <label htmlFor="remember" className={cn('ml-2', 'block', 'text-sm', 'text-neutral-600', 'dark:text-neutral-400', 'cursor-pointer', 'select-none')}>
              Remember me
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            className={cn('w-full', 'bg-[#F05B43]', 'hover:bg-[#E04D36]', 'text-white', 'rounded-md', 'py-2.5', 'text-[15px]', 'font-medium', 'transition-colors', 'shadow-sm')}
          >
            Log in
          </motion.button>
        </form>

        <p className={cn('text-center', 'text-[14px]', 'text-neutral-500', 'dark:text-neutral-400', 'pt-2')}>
          Don't have an account?{' '}
          <Link
            to="/register"
            className={cn('font-medium', 'text-neutral-700', 'dark:text-neutral-300', 'hover:text-neutral-900', 'dark:hover:text-white')}
          >
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;