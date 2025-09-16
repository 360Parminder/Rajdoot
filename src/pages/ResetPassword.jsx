import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Check, ArrowLeft } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ResetPassword = () => {
    const { resetPassword, loading, message } = useAuth();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const { token } = useParams(); 
    
    const validatePassword = (password) => {
        if (password.length < 8) {
            return "Password must be at least 8 characters long";
        }
        if (!/(?=.*[a-z])/.test(password)) {
            return "Password must contain at least one lowercase letter";
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            return "Password must contain at least one uppercase letter";
        }
        if (!/(?=.*\d)/.test(password)) {
            return "Password must contain at least one number";
        }
        if (!/(?=.*[@$!%*?&])/.test(password)) {
            return "Password must contain at least one special character";
        }
        return "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const validationError = validatePassword(password);
        if (validationError) {
            setPasswordError(validationError);
            return;
        }
        
        if (password !== confirmPassword) {
            setPasswordError("Passwords do not match");
            return;
        }
        
        setPasswordError('');
        await resetPassword(token, password, confirmPassword);
    };

    const passwordRequirements = [
        { id: 1, text: "At least 8 characters", met: password.length >= 8 },
        { id: 2, text: "One lowercase letter", met: /(?=.*[a-z])/.test(password) },
        { id: 3, text: "One uppercase letter", met: /(?=.*[A-Z])/.test(password) },
        { id: 4, text: "One number", met: /(?=.*\d)/.test(password) },
        { id: 5, text: "One special character", met: /(?=.*[@$!%*?&])/.test(password) },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 mt-16">
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
                        Reset Password
                    </h1>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Create a new password for your account
                    </p>
                </div>

                {message && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`px-4 py-3 rounded-lg mb-6 text-sm ${
                            message.type === 'success' 
                                ? 'bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 text-green-700 dark:text-green-300'
                                : 'bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300'
                        }`}
                    >
                        {message.text}
                    </motion.div>
                )}

                {passwordError && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg mb-6 text-sm"
                    >
                        {passwordError}
                    </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-neutral-700 dark:text-neutral-300 mb-2">New Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500 dark:text-neutral-400 w-5 h-5" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setPasswordError('');
                                }}
                                className="w-full bg-neutral-200 dark:bg-neutral-700/50 border border-neutral-300 dark:border-neutral-600 rounded-lg py-3 pl-12 pr-4 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                placeholder="Enter new password"
                                required
                                autoComplete='new-password'
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-neutral-700 dark:text-neutral-300 mb-2">Confirm Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500 dark:text-neutral-400 w-5 h-5" />
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                    setPasswordError('');
                                }}
                                className="w-full bg-neutral-200 dark:bg-neutral-700/50 border border-neutral-300 dark:border-neutral-600 rounded-lg py-3 pl-12 pr-4 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                placeholder="Confirm new password"
                                required
                                autoComplete='new-password'
                            />
                        </div>
                    </div>

                    {/* Password Requirements */}
                    <div className="bg-neutral-200 dark:bg-neutral-700/30 rounded-lg p-4 border border-neutral-300 dark:border-neutral-600">
                        <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                            Password Requirements:
                        </h3>
                        <ul className="space-y-2">
                            {passwordRequirements.map((req) => (
                                <li key={req.id} className="flex items-center">
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                                        req.met 
                                            ? 'bg-green-500 text-white' 
                                            : 'bg-neutral-300 dark:bg-neutral-600 text-transparent'
                                    }`}>
                                        <Check className="w-3 h-3" />
                                    </div>
                                    <span className={`text-sm ${req.met ? 'text-green-600 dark:text-green-400' : 'text-neutral-600 dark:text-neutral-400'}`}>
                                        {req.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg py-3 font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <div className="flex items-center justify-center">
                                <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Resetting Password...
                            </div>
                        ) : (
                            'Reset Password'
                        )}
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default ResetPassword;