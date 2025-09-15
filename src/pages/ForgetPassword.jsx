import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const { sendResetLink, message } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendResetLink(email);
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full bg-neutral-100 dark:bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-8 border border-neutral-300 dark:border-neutral-700 shadow-xl"
            >
                <Link 
                    to="/login" 
                    className="inline-flex items-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 mb-6 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Login
                </Link>

                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-2">
                        Forgot Password
                    </h1>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Enter your email to receive a password reset link
                    </p>
                </div>

                {message && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`px-4 py-3 rounded-lg mb-6 text-sm ${
                            message.type === 'success' 
                                ? 'bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 text-white dark:text-white'
                                : 'bg-blue-100 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700 text-white dark:text-white'
                        }`}
                    >
                        {message.text}
                    </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-neutral-700 dark:text-neutral-300 mb-2">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500 dark:text-neutral-400 w-5 h-5" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-neutral-200 dark:bg-neutral-700/50 border border-neutral-300 dark:border-neutral-600 rounded-lg py-3 pl-12 pr-4 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg py-3 font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-shadow"
                    >
                        Send Reset Link
                    </motion.button>
                </form>

                <div className="mt-6 p-4 bg-neutral-200 dark:bg-neutral-700/30 rounded-lg border border-neutral-300 dark:border-neutral-600">
                    <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">What to expect:</h3>
                    <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
                        <li>• Password reset link will be sent to your email</li>
                        <li>• Link expires in 1 hour for security</li>
                        <li>• Check your spam folder if you don't see it</li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
};

export default ForgetPassword;