import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Star, Crown } from 'lucide-react';

const getIcon = (iconName) => {
    switch (iconName) {
        case 'zap':
            return <Zap className="w-6 h-6" />;
        case 'star':
            return <Star className="w-6 h-6" />;
        case 'crown':
            return <Crown className="w-6 h-6" />;
        default:
            return null;
    }
};

const PlanCard = ({ plan, isCurrentPlan, onSelect }) => {
    return (
        <motion.div
            className={`relative bg-[#282729] rounded-lg p-6 border border-[#7170709a] ${
                plan.recommended 
                    ? 'ring-2 ring-indigo-500' 
                    : ''
            }`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            {plan.recommended && (
                <motion.div 
                    className="absolute -top-3 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Recommended
                    </span>
                </motion.div>
            )}
            
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <motion.div 
                        className={`p-2 rounded-lg bg-gradient-to-r ${plan.color} mr-3`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                    >
                        {getIcon(plan.icon)}
                    </motion.div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-200">{plan.name}</h3>
                        <p className="text-gray-200 text-sm mt-1">Perfect for {plan.name === 'Starter' ? 'individuals' : plan.name === 'Pro' ? 'growing businesses' : 'large organizations'}</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-2xl font-bold text-gray-200">{plan.price}</p>
                    <p className="text-gray-400">per {plan.period}</p>
                </div>
            </div>

            <div className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                    <motion.div 
                        key={index} 
                        className="flex items-center text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <Check className="w-5 h-5 mr-2 text-indigo-400" />
                        <span className="group-hover:text-dark-200 transition-colors">{feature}</span>
                    </motion.div>
                ))}
            </div>

            <motion.button
                onClick={() => onSelect(plan)}
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    isCurrentPlan
                        ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                        : 'bg-[#323232] text-gray-300 hover:bg-[#404040]'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {isCurrentPlan ? 'Current Plan' : 'Get Started'}
            </motion.button>
        </motion.div>
    );
};

export default PlanCard; 