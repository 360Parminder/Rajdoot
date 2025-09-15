import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, MessageSquare, Server, Zap, Shield } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import MessageCard from '../components/Card/MessageCard';

const Register = () => {
  const { register, loading } = useAuth();
  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage({
        title: "Info",
        message: "Passwords do not match",
        type: "info"
      });
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
      setMessage({
        title: "Error",
        message: error.message || "Registration failed",
        type: "error"
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 overflow-hidden">
      {message && (
        <MessageCard
          title={message.title}
          message={message.message}
          type={message.type}
          onClose={() => setMessage(null)}
        />
      )}
      
      <div className="h-full flex w-full">
        {/* Left Side - Aura Effects & Content */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 dark:from-blue-600/20 dark:to-purple-600/20">
            {/* Animated orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400/30 dark:bg-blue-600/30 filter blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-purple-400/30 dark:bg-purple-600/30 filter blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-pink-400/20 dark:bg-pink-600/20 filter blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          
          {/* Content overlay for the left side */}
          <div className="relative z-10 flex flex-col justify-center items-center text-center h-full w-full p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-md"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                Welcome to <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Rajdoot</span>
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                Powerful messaging API platform for developers. Send SMS, WhatsApp messages, and verify OTPs with simple API integration.
              </p>
              
              <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                  Why Choose Rajdoot?
                </h2>
                <ul className="text-left text-neutral-700 dark:text-neutral-300 space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Server className="w-3 h-3 text-blue-500" />
                    </div>
                    <span>Robust REST API for seamless integration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <MessageSquare className="w-3 h-3 text-purple-500" />
                    </div>
                    <span>Send SMS & WhatsApp messages globally</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Shield className="w-3 h-3 text-green-500" />
                    </div>
                    <span>Secure OTP verification system</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Zap className="w-3 h-3 text-pink-500" />
                    </div>
                    <span>High delivery rates and fast performance</span>
                  </li>
                </ul>
                
                <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Join thousands of developers who trust Rajdoot for their messaging needs
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-2 py-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg w-full"
          >
            <div className="bg-neutral-100 dark:bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-8 border border-neutral-300 dark:border-neutral-700 shadow-xl">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-2">
                  Create Account
                </h1>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Get started with Rajdoot API in minutes
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-2">
                <div>
                  <label className="block text-neutral-700 dark:text-neutral-300 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500 dark:text-neutral-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-neutral-200 dark:bg-neutral-700/50 border border-neutral-300 dark:border-neutral-600 rounded-lg py-3 pl-12 pr-4 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-700 dark:text-neutral-300 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500 dark:text-neutral-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-neutral-200 dark:bg-neutral-700/50 border border-neutral-300 dark:border-neutral-600 rounded-lg py-3 pl-12 pr-4 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-700 dark:text-neutral-300 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500 dark:text-neutral-400 w-5 h-5" />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full bg-neutral-200 dark:bg-neutral-700/50 border border-neutral-300 dark:border-neutral-600 rounded-lg py-3 pl-12 pr-4 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Create a password"
                      required
                      minLength="6"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-700 dark:text-neutral-300 mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500 dark:text-neutral-400 w-5 h-5" />
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full bg-neutral-200 dark:bg-neutral-700/50 border border-neutral-300 dark:border-neutral-600 rounded-lg py-3 pl-12 pr-4 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Confirm your password"
                      required
                      minLength="6"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-neutral-300 dark:border-neutral-600 rounded bg-neutral-200 dark:bg-neutral-700/50"
                    required
                  />
                  <label className="ml-2 text-neutral-700 dark:text-neutral-300 text-sm">
                    I agree to the{' '}
                    <Link to="/terms-of-service" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg py-3 font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-shadow flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span className="ml-2">Creating Account...</span>
                    </div>
                  ) : (
                    'Create Account & Get API Key'
                  )}
                </motion.button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-neutral-600 dark:text-neutral-400">
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Sign in to your dashboard
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Register;