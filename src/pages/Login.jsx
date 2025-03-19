import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Github, Mail, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FloatingParticles from '../components/Background/FloatingParticles';
import { useAuth } from '../hooks/useAuth';
// import { Particles } from '../components/magicui/Particles';
// Separate component for particles

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async(e) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
    await login(email, password);
  };

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden border bg-black ">
      <FloatingParticles/>
        {/* Animated floating particles using Framer Motion */}
      <div className="w-full max-w-md p-8 space-y-8 bg-[#3232329a] border-[1px] border-[#7170709a] backdrop-blur rounded-2xl shadow-2xl  overflow-hidden">
        {/* Login form with animated header */}
        <motion.div 
          className="text-center relative"
          animate={
            isAnimating ? 
            { scale: [1, 1.02, 0.98, 1] } : 
            { scale: 1 }
          }
          transition={{ duration: 1.5, ease: "easeInOut" }}
          >
          <h2 className="text-3xl font-extrabold text-indigo-300">
            Welcome Back
          </h2>
          <p className="mt-2 text-gray-400">
            Sign in to continue your journey
          </p>
          <motion.div 
            className="absolute -top-4 -left-4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            />
        </motion.div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            {/* Email input */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-4 py-3 pl-12  border border-[#7170709a] rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              </div>
            </div>

            {/* Password input */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full px-4 py-3 pl-12 pr-12  border border-[#7170709a] rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-300 focus:outline-none"
                  >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Remember me and Forgot password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Custom styled checkbox */}
              <div className="relative">
                <motion.div
                  className="w-5 h-5 rounded border border-gray-500 flex items-center justify-center cursor-pointer overflow-hidden"
                  style={{ 
                    backgroundColor: rememberMe ? 'rgb(79, 70, 229)' : 'transparent',
                    borderColor: rememberMe ? 'rgb(79, 70, 229)' : 'rgb(107, 114, 128)'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: rememberMe ? 'rgb(79, 70, 229)' : 'rgb(129, 140, 248)' 
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setRememberMe(!rememberMe)}
                  >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: rememberMe ? 1 : 0 }}
                    transition={{ duration: 0.1 }}
                    >
                    <Check size={14} className="text-white" />
                  </motion.div>
                </motion.div>
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="absolute opacity-0 w-0 h-0"
                  />
              </div>
              <label 
                htmlFor="remember-me" 
                className="ml-2 block text-sm text-gray-400 cursor-pointer"
                onClick={() => setRememberMe(!rememberMe)}
                >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300">
                Forgot password?
              </a>
            </div>
          </div>

          {/* Login button with animated gradient */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            >
            <button
              type="submit"
              className="relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-150"
              >
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: '200% 200%' }}
                />
              <span className="relative">Sign in</span>
              {isAnimating && (
                <motion.span 
                className="absolute right-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <div className="h-5 w-5 border-t-2 border-r-2 border-white rounded-full"></div>
                </motion.span>
              )}
            </button>
          </motion.div>

          {/* Social login options */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg- text-gray-400 bg-[#323232d1] rounded-lg">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-[#7170709a] rounded-lg shadow-sm text-sm font-medium text-gray-200  hover:bg-[#000] transition duration-150"
                  >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                      />
                  </svg>
                  Google
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-[#7170709a] rounded-lg shadow-sm text-sm font-medium text-gray-200  hover:bg-[#000] transition duration-150"
                  >
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              </motion.div>
            </div>
          </div>
        </form>

        {/* Sign up link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-400">
            Don't have an account?{' '}
            <motion.button 
                onClick={() => navigate('/register')}
                className="font-medium text-indigo-400 hover:text-indigo-300"
                whileHover={{ scale: 1.05 }}
                >
              Sign up
            </motion.button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;