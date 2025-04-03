import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import FloatingCapsule from '../components/Background/Floatingcapsule';
import {User} from "lucide-react"
import { useAuth } from '../hooks/useAuth';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });
    const {register,loading}=useAuth();
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
       await register(formData.name, formData.email, formData.password,formData.confirmPassword);
    };
    

    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
            <FloatingCapsule />
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="backdrop-blur-sm bg-[#32323272] p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700"
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
                    {[
                        { name: 'name', icon: <User size={18} /> },
                        { name: 'email', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
                        { name: 'phone', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> },
                        { name: 'password', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> },
                        { name: 'confirmPassword', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg> }
                    ].map((field, index) => (
                        <motion.div
                            key={field.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="group relative"
                        >
                            <input
                                type={field.name.includes('password') ? 'password' : field.name === 'email' ? 'email' : 'text'}
                                name={field.name}
                                placeholder={
                                    field.name === 'confirmPassword' ? 'Confirm Password' : field.name.charAt(0).toUpperCase() + field.name.slice(1)
                                }
                                value={formData[field.name]}
                                onChange={handleChange}
                                className="relative w-full p-4 pl-13 rounded-lg text-gray-300 border border-gray-600 focus:border-blue-400 focus:outline-none transition-all duration-300 placeholder-gray-500"
                                required
                            />

                            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors">
                                {field.icon}
                            </div>
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

                  {
                        loading ? <motion.button
                        
                        type="submit"
                        disabled
                        className="w-full p-4 rounded-lg bg-gradient-to-r from-blue-700 to-blue-800 text-white font-semibold"
                    >
                        Registering...
                    </motion.button> :
                  <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(59, 130, 246, 0.9)' }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full p-4 rounded-lg bg-gradient-to-r from-blue-700 to-blue-800 text-white font-semibold hover:from-blue-800 hover:to-blue-900 transition-all duration-300 shadow-lg"
                    >
                        Register
                    </motion.button>}
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
