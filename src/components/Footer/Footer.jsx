import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TwitterIcon, Facebook01Icon, InstagramIcon, GithubIcon } from 'hugeicons-react';
import { motion } from 'motion/react';

const Footer = () => {
  const navigate = useNavigate();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Works', path: '#' },
    { name: 'Support', path: '/contact' },
    { name: 'Help', path: '/docs' },
  ];

  return (
    <footer className="w-full bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 py-16 mt-auto border-t border-neutral-100 dark:border-neutral-800">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-1 mb-10 cursor-pointer"
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-[#E8825C] font-bold text-xl">/</span>
          <span className="font-bold text-xl tracking-widest">RAJDOOT</span>
        </motion.div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-10">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => link.path !== '#' && navigate(link.path)}
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-medium transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Decorative Divider */}
        <div className="text-neutral-200 dark:text-neutral-800 tracking-[0.2em] text-sm mb-10 select-none overflow-hidden whitespace-nowrap max-w-full">
          //////////////////////////////////////////////////
        </div>

        {/* Social Icons */}
        <div className="flex gap-8 mb-10">
          <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors" aria-label="Twitter">
            <TwitterIcon size={20} strokeWidth={2} />
          </a>
          <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors" aria-label="Facebook">
            <Facebook01Icon size={20} strokeWidth={2} />
          </a>
          <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors" aria-label="Instagram">
            <InstagramIcon size={20} strokeWidth={2} />
          </a>
          <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors" aria-label="GitHub">
            <GithubIcon size={20} strokeWidth={2} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-neutral-500 dark:text-neutral-500 font-medium">
          © Copyright {new Date().getFullYear()}, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;