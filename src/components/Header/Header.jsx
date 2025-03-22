import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  return (
    <motion.nav
      className="py-4 border-b rounded-xl border-gray-900 sticky top-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.button
          onClick={() => navigate('/')}
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="text-2xl font-bold text-white">RAJDOOT</span>
        </motion.button>
        <div className="hidden md:flex space-x-10">
          {["Features", "Pricing", "Documentation", "Waitlist"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-blue-50 hover:text-white transition"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        <motion.div
          className="flex items-center gap-4"
        >
          {
            user ? (
              <>
                <motion.button
                  onClick={() => navigate('/dashboard')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                  whileHover={{ backgroundColor: "#2563eb",scale: 1.05  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Dashboard
                </motion.button>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                 className="flex items-center gap-4">
                  <img className='w-10 h-10 rounded-full' src={user?.image} alt="profile" />
                </motion.div>
              </>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Login
              </button>
            )
          }
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Header;