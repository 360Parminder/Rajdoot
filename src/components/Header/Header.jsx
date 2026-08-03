import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

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
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-neutral-200 py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-1 cursor-pointer z-50"
          >
            <span className="text-[#E8825C] font-bold text-xl">/</span>
            <span className="text-xl font-bold text-neutral-900 tracking-widest">
              RAJDOOT
            </span>
          </Link>

          {/* Desktop Navigation (Center) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-[15px] text-neutral-700 hover:text-neutral-900 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Section (Right) */}
          <div className="hidden md:flex items-center gap-6">
            {user ? (
              <>
                <Link to="/dashboard">
                  <button className="px-5 py-2.5 bg-neutral-900 text-white text-sm font-semibold rounded-lg hover:bg-neutral-800 transition-colors">
                    Dashboard
                  </button>
                </Link>
                <div className="w-9 h-9 rounded-full overflow-hidden border border-neutral-200">
                  <img className="w-full h-full object-cover" src={user?.image} alt="profile" />
                </div>
              </>
            ) : (
              <>
                <Link 
                  to="/login"
                  className="text-[15px] text-neutral-700 hover:text-neutral-900 font-medium transition-colors"
                >
                  Log in
                </Link>
                <Link to="/register">
                  <button className="px-5 py-2.5 bg-neutral-900 text-white text-sm font-semibold rounded-lg hover:bg-neutral-800 transition-colors shadow-sm">
                    Sign up
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
              className="w-6 h-0.5 bg-neutral-900 mb-1.5 rounded-full transition-colors"
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-neutral-900 mb-1.5 rounded-full transition-colors"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-neutral-900 rounded-full transition-colors"
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
                    <button className="w-full py-4 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white text-lg font-semibold rounded-xl">
                      Log in
                    </button>
                  </Link>
                  <Link to="/register" className="w-full">
                    <button className="w-full py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-lg font-semibold rounded-xl shadow-lg shadow-neutral-200 dark:shadow-none">
                      Sign up
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