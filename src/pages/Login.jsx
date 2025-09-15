import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Github, MailIcon } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import MessageCard from '../components/Card/MessageCard';

const Login = () => {
  const { login, googleLogin, githubLogin } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState('');

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
      setMessage({
        title: 'Login Successful',
        message: 'You have successfully logged in.',
        type: 'success',
      });
    } catch (error) {
      setMessage({
        title: "Error",
        message: error.message || "Login failed",
        type: "error"
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
    } catch (err) {
      setError('Google login failed');
    }
  };

  const handleGithubLogin = async () => {
    setMessage({
      title: 'Info',
      message: 'Feature under development',
      type: 'info',
    });
  };

  return (
    <div className="min-h-screen flex bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      {message && (
        <MessageCard
          title={message.title}
          message={message.message}
          type={message.type}
          onClose={() => setMessage(null)}
        />
      )}

      {/* Left side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full"
        >
          <div className="bg-neutral-100 dark:bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-8 border border-neutral-300 dark:border-neutral-700 shadow-xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-2">
                Welcome Back
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400">
                Sign in to your Rajdoot account
              </p>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg mb-6"
              >
                {error}
              </motion.div>
            )}

            <div className="flex gap-4 mb-6">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={handleGoogleLogin}
                className="flex-1 flex items-center justify-center gap-2 bg-neutral-200 dark:bg-neutral-700/50 hover:bg-neutral-300 dark:hover:bg-neutral-700/70 border border-neutral-300 dark:border-neutral-600 rounded-lg py-3 px-4 text-neutral-800 dark:text-neutral-200 transition-colors"
              >
                {/* <MailIcon className="w-5 h-5" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-5 h-5">
                <path fill="#fff" d="M44.59 4.21a63.28 63.28 0 004.33 120.9 67.6 67.6 0 0032.36.35 57.13 57.13 0 0025.9-13.46 57.44 57.44 0 0016-26.26 74.33 74.33 0 001.61-33.58H65.27v24.69h34.47a29.72 29.72 0 01-12.66 19.52 36.16 36.16 0 01-13.93 5.5 41.29 41.29 0 01-15.1 0A37.16 37.16 0 0144 95.74a39.3 39.3 0 01-14.5-19.42 38.31 38.31 0 010-24.63 39.25 39.25 0 019.18-14.91A37.17 37.17 0 0176.13 27a34.28 34.28 0 0113.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0087.2 4.59a64 64 0 00-42.61-.38z" />
                  <path fill="#e33629" d="M44.59 4.21a64 64 0 0142.61.37 61.22 61.22 0 0120.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 00-13.64-8 37.17 37.17 0 00-37.46 9.74 39.25 39.25 0 00-9.18 14.91L8.76 35.6A63.53 63.53 0 0144.59 4.21z" />
                  <path fill="#f8bd00" d="M3.26 51.5a62.93 62.93 0 015.5-15.9l20.73 16.09a38.31 38.31 0 000 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 01-5.5-40.9z" />
                  <path fill="#587dbd" d="M65.27 52.15h59.52a74.33 74.33 0 01-1.61 33.58 57.44 57.44 0 01-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0012.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z" />
                  <path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0044 95.74a37.16 37.16 0 0014.08 6.08 41.29 41.29 0 0015.1 0 36.16 36.16 0 0013.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 01-25.9 13.47 67.6 67.6 0 01-32.36-.35 63 63 0 01-23-11.59A63.73 63.73 0 018.75 92.4z" />
                </svg>
                <span>Google</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={handleGithubLogin}
                className="flex-1 flex items-center justify-center gap-2 bg-neutral-200 dark:bg-neutral-700/50 hover:bg-neutral-300 dark:hover:bg-neutral-700/70 border border-neutral-300 dark:border-neutral-600 rounded-lg py-3 px-4 text-neutral-800 dark:text-neutral-200 transition-colors"
              >
                {/* <Github className="w-5 h-5" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-5 h-5">
                <g fill="#181616">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" />
                  <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0" />
                  </g>
                  </svg>
                <span>GitHub</span>
              </motion.button>
            </div>

            <div className="flex items-center mb-6">
              <div className="flex-1 border-t border-neutral-300 dark:border-neutral-600"></div>
              <span className="px-4 text-neutral-500 dark:text-neutral-400">or</span>
              <div className="flex-1 border-t border-neutral-300 dark:border-neutral-600"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-neutral-300 dark:border-neutral-600 rounded bg-neutral-200 dark:bg-neutral-700/50"
                  />
                  <label className="ml-2 text-neutral-700 dark:text-neutral-300">Remember me</label>
                </div>
                <Link
                  to="/forget-password"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg py-3 font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-shadow"
              >
                Sign In
              </motion.button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-neutral-600 dark:text-neutral-400">
                Don't have an account?{' '}
                <Link
                  to="/register"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right side - Aura Design */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>

        {/* Floating orbs with aura effect */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large central orb */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/10 backdrop-blur-3xl border border-white/20 shadow-2xl"></div>

          {/* Animated floating orbs */}
          {[1, 2, 3, 4, 5].map((item) => (
            <motion.div
              key={item}
              className="absolute rounded-full bg-gradient-to-br from-blue-300/30 to-purple-300/30 backdrop-blur-lg border border-white/20"
              style={{
                width: `${100 + item * 40}px`,
                height: `${100 + item * 40}px`,
                top: `${20 + item * 10}%`,
                left: `${item % 2 === 0 ? 30 : 60}%`,
              }}
              animate={{
                y: [0, 15, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4 + item,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item * 0.5
              }}
            />
          ))}

          {/* Particle effects */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col justify-center items-center text-white p-12 h-full w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-md text-center backdrop-blur-sm bg-black/20 p-8 rounded-2xl border border-white/10"
          >
            <motion.h2
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Welcome to Rajdoot
            </motion.h2>
            <motion.p
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Where your journey begins with seamless access to all our services
            </motion.p>
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {['Security', 'Speed', 'Reliability'].map((feature, index) => (
                <motion.div
                  key={index}
                  className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/10"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                >
                  {feature}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Subtle radial gradient overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/10"></div>
      </div>
    </div>
  );
};

export default Login;