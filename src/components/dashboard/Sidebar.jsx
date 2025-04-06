// Sidebar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { House, ChevronsLeftRight, BadgePlus, SquareTerminal, LayoutDashboard, User, Settings, ChevronRight, X, CreditCard, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import icon from '../../assets/image/logo.png';
import { useAuth } from '../../hooks/useAuth';

const ProfileCard = ({ user, setShowProfileCard }) => {
  const { logout } = useAuth();
  
  return (
    <AnimatePresence className="absolute z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="absolute z-[100] left-72 bottom-4 w-72 bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl border border-gray-700 overflow-hidden"
      >
        <div className="p-6 border-b border-gray-700">
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center overflow-hidden border border-gray-700">
                {user?.image ? (
                  <img src={user.image} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-5 h-5 text-gray-400" />
                )}
              </div>
              <div className="ml-4">
                <h3 className="text-md font-semibold text-gray-200 capitalize">{user?.name}</h3>
                <p className="text-sm text-gray-400">{user?.email}</p>
              </div>
            </div>
            <button
              onClick={() => setShowProfileCard(false)}
              className="p-1 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Current Plan</p>
              <p className="text-sm font-medium text-gray-200">{user.plan.plans[0].planId.name || 'Free'} Plan</p>
            </div>
            <span className="px-2 py-1 text-xs font-medium bg-indigo-500/20 text-indigo-400 rounded-full">
              Active
            </span>
          </div>
        </div>

        <div className="p-2">
          <button className="w-full flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors text-gray-300">
            <User className="w-5 h-5 mr-3 text-blue-400" />
            <span>Account Settings</span>
          </button>
          <button className="w-full flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors text-gray-300">
            <CreditCard className="w-5 h-5 mr-3 text-purple-400" />
            <span>Billing & Plans</span>
          </button>
          <button
            onClick={logout}
            className="w-full flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors text-red-400"
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span>Logout</span>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const Sidebar = ({ sidebarOpen, activeTab, handleTabClick }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      icon: <House size={20} className="text-gray-300" />
    },
    {
      id: 'api-section',
      label: 'API Management',
      icon: <ChevronsLeftRight size={20} className="text-gray-300" />,
      subItems: [
        { id: 'new-api', label: 'Create New API', icon: <BadgePlus size={20} className="text-gray-300" /> },
        // { id: 'api', label: 'API Explorer', icon: <ChevronsLeftRight size={20} className="text-gray-300" /> },
        { id: 'try', label: 'Try API', icon: <SquareTerminal size={20} className="text-gray-300" /> },
        { id: 'manage-api', label: 'Manage API', icon: <LayoutDashboard size={20} className="text-gray-300" /> },
      ]
    },
    {
      id: 'documentation',
      label: 'Documentation',
      icon: <LayoutDashboard size={20} className="text-gray-300" />
    },
    {
      id: 'user-section',
      label: 'User Settings',
      icon: <User size={20} className="text-gray-300" />,
      subItems: [
        { id: 'account', label: 'Account', icon: <User size={20} className="text-gray-300" /> },
        { id: 'settings', label: 'Settings', icon: <Settings size={20} className="text-gray-300" /> },
      ]
    }
  ];

  const toggleSubmenu = (id) => {
    setOpenSubmenus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <motion.div
      initial={{ width: sidebarOpen ? 256 : 56 }}
      animate={{ width: sidebarOpen ? 256 : 56 }}
      className="h-full bg-gray-900/80 backdrop-blur-sm border-r border-gray-800 flex flex-col py-3 relative"
    >
      <div className={`flex items-center justify-between mx-2 p-2 rounded-lg hover:bg-gray-800 transition-colors`}>
        <button onClick={() => navigate('/')} className='flex items-center'>
          <div className={`${sidebarOpen ? "w-10 h-10" : "w-8 h-8"} rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-1 flex items-center justify-center`}>
            <img src={icon} alt="logo" className="w-full h-full object-contain" />
          </div>
          {sidebarOpen && (
            <div className='mx-2 my-2'>
              <h2 className="font-medium leading-4 text-gray-200">Project</h2>
              <p className='text-sm text-gray-400 capitalize'>{user.plan.plans[0].planId.name || 'Free'}</p>
            </div>
          )}
        </button>
      </div>

      <nav className="flex-grow mt-8">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              {item.subItems ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(item.id)}
                    className={`flex items-center w-full ${sidebarOpen ? "px-4 py-3" : "p-2 mx-1"} justify-between rounded-lg transition-colors
                      ${openSubmenus[item.id] ? 'bg-gray-800 text-white' : 'hover:bg-gray-800 text-gray-300'}`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      {sidebarOpen && <span className="text-sm">{item.label}</span>}
                    </div>
                    {sidebarOpen && (
                      <ChevronRight
                        size={16}
                        className={`transition-transform ${openSubmenus[item.id] ? 'rotate-90' : ''}`}
                      />
                    )}
                  </button>

                  {openSubmenus[item.id] && sidebarOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="ml-8 mt-1 space-y-1"
                    >
                      {item.subItems.map(subItem => (
                        <li key={subItem.id}>
                          <button
                            onClick={() => handleTabClick(subItem.id)}
                            className={`flex items-center w-full px-4 py-2 gap-3 text-sm rounded-lg transition-colors
                              ${activeTab === subItem.id ? 'bg-blue-500/10 text-blue-400' : 'hover:bg-gray-800 text-gray-400'}`}
                          >
                            {subItem.icon}
                            <span>{subItem.label}</span>
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </>
              ) : (
                <button
                  onClick={() => handleTabClick(item.id)}
                  className={`flex items-center w-full ${sidebarOpen ? "px-4 py-3" : "p-2 mx-1"} gap-3 rounded-lg transition-colors
                    ${activeTab === item.id ? 'bg-gray-800 text-white' : 'hover:bg-gray-800 text-gray-300'}`}
                >
                  {item.icon}
                  {sidebarOpen && <span className="text-sm">{item.label}</span>}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-3 py-4">
        <button
          onClick={() => setShowProfileCard(true)}
          className={`flex items-center ${sidebarOpen ? 'w-full p-2' : 'justify-center p-2'} rounded-lg hover:bg-gray-800 transition-colors`}
        >
          <div className={`rounded-lg bg-gray-800 flex items-center justify-center overflow-hidden border border-gray-700
            ${sidebarOpen ? 'w-8 h-8 mr-2' : 'w-8 h-8'}`}>
            {user?.image ? (
              <img src={user.image} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <User className="w-4 h-4 text-gray-400" />
            )}
          </div>
          {sidebarOpen && (
            <div className="text-left">
              <p className="text-sm font-medium text-gray-200 capitalize">{user?.name}</p>
              <p className="text-xs text-gray-400 truncate">{user?.email}</p>
            </div>
          )}
        </button>
      </div>

      {showProfileCard && <ProfileCard user={user} setShowProfileCard={setShowProfileCard} />}
    </motion.div>
  );
};

export default Sidebar;