import React from 'react';
import { CheckCircle, X, AlertTriangle, XCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const messageStyles = {
    success: { 
        bg: "bg-green-900/20 backdrop-blur-sm",
        border: "border-green-500/30",
        text: "text-green-400",
        icon: <CheckCircle className="h-5 w-5 text-green-400" />,
        iconBg: "bg-green-900/50"
    },
    error: { 
        bg: "bg-red-900/20 backdrop-blur-sm",
        border: "border-red-500/30",
        text: "text-red-400",
        icon: <XCircle className="h-5 w-5 text-red-400" />,
        iconBg: "bg-red-900/50"
    },
    warning: { 
        bg: "bg-yellow-900/20 backdrop-blur-sm",
        border: "border-yellow-500/30",
        text: "text-yellow-400",
        icon: <AlertTriangle className="h-5 w-5 text-yellow-400" />,
        iconBg: "bg-yellow-900/50"
    },
    info: {
        bg: "bg-blue-900/20 backdrop-blur-sm",
        border: "border-blue-500/30",
        text: "text-blue-400",
        icon: <Info className="h-5 w-5 text-blue-400" />,
        iconBg: "bg-blue-900/50"
    }
};

const MessageCard = ({ title, message, type = "success", onClose }) => {
    console.log("sdc");
    
    const style = messageStyles[type] || messageStyles.success;

    return (
        <AnimatePresence>
            <motion.div 
                className={`border ${style.border} rounded-xl p-4 ${style.bg} shadow-lg fixed top-6 right-6 z-[100] w-96 max-w-[90vw]`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
                <div className="flex items-start gap-3">
                    <motion.div 
                        className={`flex-shrink-0 p-2 rounded-lg ${style.iconBg} border ${style.border}`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, type: "spring" }}
                    >
                        {style.icon}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                        <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className={`text-sm font-medium ${style.text}`}>{title}</h3>
                            <p className="text-sm text-gray-300 mt-1">{message}</p>
                        </motion.div>
                    </div>
                    <motion.button 
                        className={`p-1 rounded-full hover:bg-gray-800/50 transition-colors ${style.text}`}
                        onClick={onClose}
                        aria-label="Close"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.1 }}
                    >
                        <X className="h-4 w-4" />
                    </motion.button>
                </div>
                <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-20"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 4, ease: "linear" }}
                />
            </motion.div>
        </AnimatePresence>
    );
};

export default MessageCard;