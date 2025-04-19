import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import { useAuth } from '../hooks/useAuth';
import MessageCard from '../components/Card/MessageCard';

const Register = () => {
  const {register,loading,message,error,setError}=useAuth();
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
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
     await register(formData.name, formData.email, formData.password, formData.confirmPassword);
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <AnimatedBackground>
      {message|| error&&(
        <MessageCard
          title={"Success"}
          message={message|| error}
          type={message?"success":"error"}
          onClose={()=>{
            setTimeout(() => {
              
            }, 2000);
          }}
        />
      )}
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg w-full"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-2">
                Create Account
              </h1>
              <p className="text-gray-400">
                Join Rajdoot and start building amazing applications
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 grid grid-cols-2 gap-2">
              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Create a password"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center col-span-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-700 rounded bg-gray-800/50"
                  required
                />
                <label className="ml-2 text-gray-300">
                  I agree to the{' '}
                  <Link to="/terms-of-service" className="text-blue-400 hover:text-blue-300">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full col-span-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg py-3 font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-shadow flex items-center justify-center"
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
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z"
                      />
                    </svg>
                    <span className="ml-2">Creating...</span>
                  </div>
                ) : (
                  'Create Account'
                )}
              </motion.button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedBackground>
  );
};

export default Register;
