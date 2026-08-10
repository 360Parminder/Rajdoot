import React from 'react';
import { motion } from 'framer-motion';
import { Sun01Icon, Moon01Icon } from 'hugeicons-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = ({ className = '', size = 20, showLabel = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center gap-2 p-2 rounded-xl transition-all duration-200 border ${
        isDark
          ? 'bg-neutral-800/80 hover:bg-neutral-700 text-amber-400 border-neutral-700 shadow-inner'
          : 'bg-neutral-100 hover:bg-neutral-200 text-orange-500 border-neutral-300 shadow-sm'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.25 }}
        className="flex items-center justify-center"
      >
        {isDark ? <Sun01Icon size={size} /> : <Moon01Icon size={size} />}
      </motion.div>
      {showLabel && (
        <span className="text-xs font-semibold capitalize text-neutral-700 dark:text-neutral-200">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </motion.button>
  );
};

export default ThemeToggle;
