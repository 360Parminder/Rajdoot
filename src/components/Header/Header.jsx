import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import icon from '../../assets/image/icon.png';

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for adding border/shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [navigate]);

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
    { name: "About us", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/plans" },
    { name: "Docs", path: "/docs" },
    { name: "Resources", path: "/api-reference" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Accent Stripe */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-[#E8825C] z-50" />

      <header
        className={`fixed top-[3px] left-0 w-full z-40 transition-all duration-200 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 ${
          isScrolled ? 'py-2.5 shadow-sm' : 'py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center">
          
          {/* Left: Logo & Navigation Links Grouped Together */}
          <div className="flex items-center gap-7 md:gap-9">
            <Link 
              to="/" 
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <div className="w-7 h-7 flex items-center justify-center">
                <img src={icon} alt="Rajdoot Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-[17px] font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
                rajdoot
              </span>
            </Link>

            {/* Desktop Navigation (Left aligned next to logo) */}
            <nav className="hidden md:flex items-center space-x-6">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-[14px] text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <Link to="/dashboard">
                  <button className="px-4 py-1.5 bg-[#EA580C] hover:bg-[#D4703E] text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
                    Dashboard
                  </button>
                </Link>
                <div className="w-8 h-8 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-700">
                  <img className="w-full h-full object-cover" src={user?.image} alt="profile" />
                </div>
              </>
            ) : (
              <>
                <Link 
                  to="/login"
                  className="px-4 py-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700/60 transition-colors shadow-sm"
                >
                  Login
                </Link>
                <Link to="/register">
                  <button className="px-4 py-1.5 bg-[#EA580C] hover:bg-[#D4703E] text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
                    Start free trial
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 relative"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-0.5 bg-neutral-900 dark:bg-neutral-100 mb-1.5 rounded-full transition-colors"
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-neutral-900 dark:bg-neutral-100 mb-1.5 rounded-full transition-colors"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-neutral-900 dark:bg-neutral-100 rounded-full transition-colors"
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-neutral-900 z-40 md:hidden pt-24 px-6 flex flex-col"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-6 text-center mt-8">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 hover:text-[#E8825C] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto mb-12 flex flex-col gap-4">
              {user ? (
                <>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <img className="w-12 h-12 rounded-full border border-neutral-200" src={user?.image} alt="profile" />
                    <div className="text-left">
                      <p className="font-semibold text-neutral-900 dark:text-neutral-100">{user?.name}</p>
                      <p className="text-sm text-neutral-500">{user?.email}</p>
                    </div>
                  </div>
                  <Link to="/dashboard" className="w-full">
                    <button className="w-full py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-lg font-semibold rounded-xl">
                      Dashboard
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="w-full">
                    <button className="w-full py-3.5 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-100 text-base font-medium rounded-xl shadow-sm">
                      Login
                    </button>
                  </Link>
                  <Link to="/register" className="w-full">
                    <button className="w-full py-3.5 bg-[#EA580C] hover:bg-[#D4703E] text-white text-base font-medium rounded-xl shadow-md shadow-[#EA580C]/20">
                      Start free trial
                    </button>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;