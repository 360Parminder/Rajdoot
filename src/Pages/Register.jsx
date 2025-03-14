import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        console.log(formData);
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 bg-black">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 animate-gradient">
                <div className="absolute inset-0">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 2}rem`,
                                height: `${Math.random() * 3}rem`,
                                background: `rgba(255, 255, 255, ${Math.random() * 0.9})`,
                                animation: `float ${Math.random() * 15 + 5}s infinite linear`
                            }}
                        />
                    ))}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="backdrop-blur-xl bg-gray-900/80 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700"
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-bold text-gray-200 mb-6 text-center"
                >
                    Create Account
                </motion.h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                    {['name', 'email', 'phone', 'password', 'confirmPassword'].map((field, index) => (
                        <motion.div
                            key={field}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="group"
                        >
                            <input
                                type={field.includes('password') ? 'password' : field === 'email' ? 'email' : 'text'}
                                name={field}
                                placeholder={
                                    field === 'confirmPassword' ? 'Confirm Password' : field.charAt(0).toUpperCase() + field.slice(1)
                                }
                                value={formData[field]}
                                onChange={handleChange}
                                className="w-full p-4 rounded-lg bg-gray-800 text-gray-300 border border-gray-600 focus:border-blue-400 focus:outline-none transition-all duration-300 placeholder-gray-500"
                                required
                            />
                        </motion.div>
                    ))}

                    {error && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-red-400 text-sm"
                        >
                            {error}
                        </motion.p>
                    )}

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(59, 130, 246, 0.9)' }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full p-4 rounded-lg bg-gradient-to-r from-blue-700 to-blue-800 text-white font-semibold hover:from-blue-800 hover:to-blue-900 transition-all duration-300 shadow-lg"
                    >
                        Register
                    </motion.button>
                </form>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 text-gray-400 text-center"
                >
                    Already have an account?{' '}
                    <span
                        onClick={() => navigate('/login')}
                        className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors"
                    >
                        Login
                    </span>
                </motion.p>
            </motion.div>

            <style>
                {`
                    @keyframes float {
                        0% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
                        50% { transform: translateY(-50px) rotate(180deg); opacity: 0.1; }
                        100% { transform: translateY(0) rotate(360deg); opacity: 0.3; }
                    }
                `}
            </style>
        </div>
    );
};

export default Register;
