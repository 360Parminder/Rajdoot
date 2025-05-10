// TopBar.jsx
import React from 'react';
import { PanelLeft, House, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';

const TopBar = ({ toggleSidebar, activeTab, handleTabClick, sidebarOpen }) => {
  const { user } = useAuth();

  const getActiveTabLabel = () => {
    switch(activeTab) {
      case 'new-api': return 'Create New API';
      case 'documentation': return 'Documentation';
      case 'api': return 'API Explorer';
      case 'try': return 'Try API';
      case 'account': return 'Account';
      case 'settings': return 'Settings';
      case 'manage-api': return 'Manage API';
      case 'plan-details': return 'Plan Details';
      default: return 'Dashboard';
    }
  };

  return (
    <motion.div
      initial={{ left: sidebarOpen ? 256 : 56 }}
      animate={{ left: sidebarOpen ? 256 : 56 }}
      className="fixed top-0 right-0 z-40 py-3 px-6 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 flex items-center justify-between shadow-sm"
    >
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-300"
        >
          <PanelLeft size={20} />
        </button>
        
        <nav className="text-gray-300 flex items-center">
          <button 
            onClick={() => handleTabClick('home')}
            className="flex items-center hover:text-gray-100 transition-colors"
          >
            <House size={16} className="mr-2" />
            <span>Dashboard</span>
          </button>
          
          {activeTab !== 'home' && (
            <>
              <ChevronRight size={14} className="mx-2 text-gray-500" />
              <span className="text-gray-100 font-medium">
                {getActiveTabLabel()}
              </span>
            </>
          )}
        </nav>
      </div>

      {activeTab === 'home' && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-gray-300"
        >
          <span className="text-sm">Welcome back, </span>
          <span className="font-medium capitalize text-gray-200">{user?.name}</span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TopBar;