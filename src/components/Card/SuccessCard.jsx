import React, { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

const SuccessCard = ({ title, message }) => {
    const [isVisible, setIsVisible] = useState(true);

    // if (!isVisible) return null;

    return (
        <div className="border border-green-500 rounded-md p-4 bg-green-50 shadow-sm sticky top-4 z-50">
            <button 
                className="absolute top-2 right-2 text-green-600 hover:text-green-800"
                onClick={() => setIsVisible(false)}
                aria-label="Close"
            >
                <X className="h-4 w-4" />
            </button>
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div className="ml-3">
                    <h3 className="text-lg font-medium text-green-800">{title}</h3>
                    <div className="mt-2">
                        <p className="text-sm text-green-700">{message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SuccessCard;