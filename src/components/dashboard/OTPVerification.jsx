// src/components/dashboard/OTPVerification.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Send, Check } from 'lucide-react';

const OTPVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleSendOtp = () => {
    // Add your OTP sending logic here
    setShowOtpInput(true);
  };

  const handleVerifyOtp = () => {
    // Add your OTP verification logic here
  };

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
          OTP Verification
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Verify your phone number with an OTP sent to your device.
        </p>
      </motion.div>

      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 mb-6">
        <div className="space-y-6">
          {!showOtpInput ? (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-2.5 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSendOtp}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all"
              >
                <Send className="w-5 h-5" />
                <span>Send OTP</span>
              </motion.button>
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Enter OTP
              </label>
              <input
                type="text"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-2.5 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleVerifyOtp}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all"
              >
                <Check className="w-5 h-5" />
                <span>Verify OTP</span>
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;