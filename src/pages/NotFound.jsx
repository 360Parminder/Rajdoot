import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#18181a] flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-gray-800">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-gray-200">Page Not Found</h2>
          </div>
        </div>

        {/* Message */}
        <div className="bg-[#282729] rounded-lg p-8 mb-8">
          <p className="text-xl text-gray-300 mb-4">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-gray-400">
            Don't worry, you can navigate back to safety using the buttons below.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 bg-[#282729] hover:bg-[#333] text-gray-300 px-6 py-3 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Help Text */}
        <p className="mt-8 text-gray-500 text-sm">
          If you believe this is a mistake, please contact us at{' '}
          <a href="mailto:360.parminder@gmail.com" className="text-blue-400 hover:text-blue-300">
            360.parminder@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default NotFound; 