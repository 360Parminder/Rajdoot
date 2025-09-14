import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import logoDark from '../../assets/image/logo_dark.png'
import logoLight from '../../assets/image/logo_light.png'
const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  return (
    <motion.nav
      className="py-2 px-3 fixed min-w-[90%] top-4 z-50 bg-opacity-30 backdrop-blur-lg shadow-xl dark:text-neutral-100 text-neutral-900 mx-10 rounded-full border-[1px] border-neutral-300/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <motion.button
          onClick={() => navigate('/')}
          className="flex items-center cursor-pointer gap-0.5 ml-1"
          whilehover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/* {
            isDarkMode ?  <img className='w-auto h-[1.25rem]' src={logoLight} alt="RAJDOOT" />:<img className='w-auto h-[1.25rem]' src={logoDark} alt="RAJDOOT" /> 
          } */}
          <img className='w-auto h-[1.25rem]' src={logoLight} alt="RAJDOOT" />
          <span className="text-xl text-neutral-900 dark:text-neutral-100">Rajdoot</span>
        </motion.button>
        <div className="hidden md:flex space-x-10">
          {[
            {
              name:"Home",
              path:"/"
            },
            // {
            //   name:"Pricing",
            //   path:"/plans"
            // },
            {
              name:"About",
              path:"/about"
            },
            {
              name:"Documentation",
              path:"/docs"
            },
            {
              name:"Contact",
              path:"/contact"
            },
            // {
            //   name:"Wishlist",
            //   path:"/wishlist"
            // }
            
            
          ].map((item, index) => (
            <motion.button
              onClick={() => navigate(item.path)}
              key={index}

              className="text-neutral-800 dark:text-neutral-100 hover:text-white transition cursor-pointer"
              whilehover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
        <motion.div
          className=""
        >
          {
            user ? (
              <div
                className="hidden md:flex items-center gap-4">
                <motion.button
                  onClick={() => navigate('/dashboard')}
                  className="px-4 py-2 bg-transparent bg-gradient-to-tl from-neutral-600 to-neutral-800 text-white rounded-md hover:from-neutral-800 hover:to-neutral-600"
                  whilehover={{ backgroundColor: "#2563eb", scale: 1.05 }}
                  whiletap={{ scale: 0.95 }}
                >
                  Dashboard
                </motion.button>
                <motion.div
                  whilehover={{ scale: 1.05 }}
                  whiletap={{ scale: 0.95 }}
                  className="flex items-center gap-4">
                  <img className='w-10 h-10 rounded-full' src={user?.image} alt="profile" />
                </motion.div>
              </div>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="text-white px-6 py-1 rounded-3xl bg-neutral-900 cursor-pointer"
                whilehover={{ scale: 1.05, boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }}
                whiletap={{ scale: 0.95 }}
              >
                Login
              </button>
            )
          }

          {/* <motion.span
            className="text-white px-4 py-2 rounded-md border border-blue-500 bg-gradient-to-r from-blue-600 to-indigo-600"
            whilehover={{ scale: 1.05, boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }}
            whiletap={{ scale: 0.95 }}
          >
            Coming Soon
          </motion.span> */}
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Header;