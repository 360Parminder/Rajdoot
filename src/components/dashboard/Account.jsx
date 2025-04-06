import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Camera, Save, User, Mail, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Account = () => {
  const { user } = useAuth();
  console.log('user', user);
  
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [profilePic, setProfilePic] = useState(user?.image || '');
  const [messageLimit, setMessageLimit] = useState({
    used: user?.messageCount ,
    total: user?.monthlyMessageLimit,
  });

  const handleSaveChanges = () => {
    // Add your save logic here
    console.log('Changes saved:', { name, email, profilePic });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePic(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
          Account Settings
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Manage your account information, profile, and usage limits.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Section */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-200 mb-6 flex items-center gap-2">
            <User className="w-5 h-5 text-blue-400" />
            Profile Information
          </h2>

          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-4">
              <div className="w-32 h-32 rounded-full bg-gray-800 border-2 border-gray-700 overflow-hidden">
                {profilePic ? (
                  <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <User className="w-16 h-16 text-gray-500" />
                  </div>
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-gray-800 p-2 rounded-full border border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors">
                <Camera className="w-5 h-5 text-gray-300" />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            <h3 className="text-xl font-medium text-gray-200 capitalize">{name}</h3>
            <p className="text-gray-400 text-sm">{email}</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className=" text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                <User className="w-4 h-4 text-gray-400" />
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-2.5 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all"
              />
            </div>

            <div>
              <label className=" text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-2.5 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSaveChanges}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all mt-4"
            >
              <Save className="w-5 h-5" />
              <span>Save Changes</span>
            </motion.button>
          </div>
        </div>

        {/* Usage Stats Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Message Limit */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-400" />
              Message Usage
            </h2>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-400 mb-1">
                <span>{messageLimit.used.toLocaleString()} messages used</span>
                <span>{messageLimit.total.toLocaleString()} total limit</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                  style={{ width: `${(messageLimit.used / messageLimit.total) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h3 className="text-sm text-gray-400 mb-1">Daily Average</h3>
                <p className="text-xl font-semibold text-gray-200">
                  {Math.round(messageLimit.used / 30)}
                </p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h3 className="text-sm text-gray-400 mb-1">Remaining</h3>
                <p className="text-xl font-semibold text-gray-200">
                  {(messageLimit.total - messageLimit.used).toLocaleString()}
                </p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h3 className="text-sm text-gray-400 mb-1">Reset Date</h3>
                <p className="text-xl font-semibold text-gray-200">
                  {new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>

          {/* Plan Information */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-200 mb-4">Current Plan</h2>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-lg font-medium text-gray-200 capitalize">
                  {user?.plan?.type || 'Free'} Plan
                </h3>
                <p className="text-gray-400 text-sm">
                  {user?.plan?.type === 'pro' ? 'All features included' : 'Limited features'}
                </p>
              </div>
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors"
                >
                  View Plan Details
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  Upgrade Plan
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;