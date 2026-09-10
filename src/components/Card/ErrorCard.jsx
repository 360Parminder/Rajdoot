import { useState } from 'react';
import { AlertCircleIcon, Cancel01Icon } from 'hugeicons-react';

const ErrorCard = ({ message, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        if (onClose) onClose();
    };

    if (!isVisible) return null;

    return (
        <div className="bg-red-600 text-white rounded-md p-4 shadow-lg mb-4 sticky top-4 z-50">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <AlertCircleIcon size={24} className="mr-2 shrink-0" />
                    <span className="font-medium">{message}</span>
                </div>
                <button 
                    onClick={handleClose}
                    className="text-white hover:text-gray-100 focus:outline-none cursor-pointer"
                    aria-label="Close"
                >
                    <Cancel01Icon size={20} />
                </button>
            </div>
        </div>
    );
};

export default ErrorCard;