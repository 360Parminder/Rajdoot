import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import logoDark from '../../assets/image/logo_dark.png';
import logoLight from '../../assets/image/logo_light.png';

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [navigate]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Documentation",
      path: "/docs"
    },
    {
      name: "Contact",
      path: "/contact"
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.nav
        className="py-2 px-4 md:px-3 fixed w-[calc(100%-30rem)] md:min-w-5xl top-4 z-50 bg-opacity-30 backdrop-blur-lg shadow-xl dark:text-neutral-100 text-neutral-900 mx-10 rounded-full border-[1px] border-neutral-300/30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center">
          <motion.button
            onClick={() => navigate('/')}
            className="flex items-center cursor-pointer gap-0.5 ml-1"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img className='w-auto h-[1.25rem]' src={logoDark} alt="RAJDOOT" />
            <span className="text-xl text-neutral-900 dark:text-neutral-100">Rajdoot</span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {menuItems.map((item, index) => (
              <motion.button
                onClick={() => navigate(item.path)}
                key={index}
                className="text-neutral-800 dark:text-neutral-100 hover:text-black hover:font-[600] dark:hover:text-white transition cursor-pointer"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:block">
            {user ? (
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={() => navigate('/dashboard')}
                  className="px-4 py-2 bg-transparent bg-gradient-to-tl from-neutral-600 to-neutral-800 text-white rounded-md hover:from-neutral-800 hover:to-neutral-600"
                  whileHover={{ backgroundColor: "#2563eb", scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Dashboard
                </motion.button>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4"
                >
                  <img className='w-10 h-10 rounded-full' src={user?.image} alt="profile" />
                </motion.div>
              </div>
            ) : (
              <motion.button
                onClick={() => navigate('/login')}
                className="text-white dark:text-neutral-900 px-6 py-1 rounded-3xl bg-neutral-900 dark:bg-neutral-50 cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="w-6 h-0.5 bg-neutral-900 dark:bg-neutral-100 mb-1.5 rounded-full"
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-neutral-900 dark:bg-neutral-100 mb-1.5 rounded-full"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-neutral-900 dark:bg-neutral-100 rounded-full"
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-full bg-white dark:bg-neutral-900 shadow-2xl z-50 md:hidden flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              {/* Mobile Header */}
              <div className="p-6 border-b border-neutral-200 dark:border-neutral-700">
                <div className="flex items-center justify-between">
                  <motion.button
                    onClick={() => navigate('/')}
                    className="flex items-center cursor-pointer gap-2"
                    whileTap={{ scale: 0.95 }}
                  >
                    <img className='w-auto h-6' src={logoDark} alt="RAJDOOT" />
                    <span className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Rajdoot</span>
                  </motion.button>
                  
                  <motion.button
                    onClick={toggleMenu}
                    className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex-1 p-6">
                <nav className="space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={index}
                      onClick={() => navigate(item.path)}
                      className="block w-full text-left text-lg font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white py-3 border-b border-neutral-100 dark:border-neutral-800"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </nav>

                {/* Mobile Auth Section */}
                <div className="mt-12 space-y-4">
                  {user ? (
                    <>
                      <motion.button
                        onClick={() => navigate('/dashboard')}
                        className="w-full px-6 py-3 bg-gradient-to-tl from-neutral-600 to-neutral-800 text-white rounded-lg font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Dashboard
                      </motion.button>
                      <div className="flex items-center gap-4 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                        <img 
                          className='w-12 h-12 rounded-full' 
                          src={user?.image} 
                          alt="profile" 
                        />
                        <div>
                          <p className="font-medium text-neutral-900 dark:text-neutral-100">
                            {user.name}
                          </p>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <motion.button
                      onClick={() => navigate('/login')}
                      className="w-full px-6 py-3 bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 rounded-lg font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Login
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;