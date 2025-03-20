import React from 'react';
import { CheckCircle, X, AlertTriangle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const messageStyles = {
    success: { border: "border-green-500", bg: "bg-green-50", text: "text-green-800", icon: <CheckCircle className="h-5 w-5 text-green-600" /> },
    error: { border: "border-red-500", bg: "bg-red-50", text: "text-red-800", icon: <XCircle className="h-5 w-5 text-red-600" /> },
    warning: { border: "border-yellow-500", bg: "bg-yellow-50", text: "text-yellow-800", icon: <AlertTriangle className="h-5 w-5 text-yellow-600" /> }
};

const MessageCard = ({ title, message, type = "success", onClose }) => {
    const style = messageStyles[type] || messageStyles.success;

    return (
        <AnimatePresence>
            <motion.div 
                className={`border ${style.border} rounded-md p-4 ${style.bg} shadow-sm fixed top-4 right-4 z-50 w-[30vw]`}
                initial={{ opacity: 0, y: -50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
            >
                <motion.button 
                    className={`absolute top-2 right-2 ${style.text} hover:opacity-75`}
                    onClick={onClose}
                    aria-label="Close"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                >
                    <X className="h-4 w-4" />
                </motion.button>
                <div className="flex items-center">
                    <motion.div 
                        className="flex-shrink-0"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                        {style.icon}
                    </motion.div>
                    <motion.div 
                        className="ml-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                    >
                        <h3 className={`text-lg font-medium ${style.text}`}>{title}</h3>
                        <p className="text-sm">{message}</p>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default MessageCard;
