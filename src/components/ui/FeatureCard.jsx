import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  color = "blue",
  className = "",
  onClick,
  delay = 0
}) => {
  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-500/10 text-blue-500",
      yellow: "bg-yellow-500/10 text-yellow-500",
      green: "bg-green-500/10 text-green-500",
      purple: "bg-purple-500/10 text-purple-500",
      pink: "bg-pink-500/10 text-pink-500",
      indigo: "bg-indigo-500/10 text-indigo-500",
      red: "bg-red-500/10 text-red-500",
      orange: "bg-orange-500/10 text-orange-500",
      teal: "bg-teal-500/10 text-teal-500",
      cyan: "bg-cyan-500/10 text-cyan-500",
      gray: "bg-gray-500/10 text-gray-500"
    };
    return colors[color] || colors.blue;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`bg-neutral-200/50   backdrop-blur-sm rounded-xl p-6 border border-neutral-200   transition-colors ${className} shadow-2xl`}
      whilehover={{ y: -5 }}
      onClick={onClick}
    >
      {icon && (
        <div className={`w-12 h-12 rounded-lg ${getColorClasses(color)} flex items-center justify-center mb-4`}>
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-neutral-900  mb-2">{title}</h3>
      {description && <div className="text-neutral-700 ">{description}</div>}
    </motion.div>
  );
};

export default FeatureCard; 