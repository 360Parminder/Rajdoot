import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
const Header=()=>{
    const navigate=useNavigate();
    return(
        <motion.nav 
        className="py-6 border-b border-gray-900 sticky top-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.button
          onClick={()=>navigate('/')} 
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
                className="hover:text-white transition"
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-sm font-medium transition border border-gray-800">
              Sign In
            </button>
          </motion.div>
        </div>
      </motion.nav>
    )
}

export default Header;