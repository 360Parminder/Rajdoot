import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import Documentation from './Documentation';
import useMessageCard from '../hooks/useMessageCard';
import MessageCard from '../components/Card/MessageCard';
import AnimatedBackground from '../components/ui/AnimatedBackground';

// Import components
import Sidebar from '../components/dashboard/Sidebar';
import TopBar from '../components/dashboard/TopBar';
import Home from '../components/dashboard/Home';
import NewApi from '../components/dashboard/NewApi';
import ApiExplorer from '../components/dashboard/ApiExplorer';
import TryApi from '../components/dashboard/TryApi';
import ManageApi from '../components/dashboard/ManageApi';
import Account from '../components/dashboard/Account';
import Settings from '../components/dashboard/Settings';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { message, setMessage } = useMessageCard();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Render the content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home handleTabClick={handleTabClick} />;
      case 'new-api':
        return <NewApi />;
      case 'documentation':
        return <Documentation />;
      case 'api':
        return <ApiExplorer />;
      case 'try':
        return <TryApi />;
      case 'account':
        return <Account />;
      case 'settings':
        return <Settings />;
      case 'manage-api':
        return <ManageApi />;
      default:
        return <div className="text-gray-300">Select a tab</div>;
    }
  };

  return (
    <AnimatedBackground>
      <div className="flex h-screen bg-gray-900/50 backdrop-blur-sm">
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="h-full"
            >
              <Sidebar 
                sidebarOpen={sidebarOpen} 
                activeTab={activeTab} 
                handleTabClick={handleTabClick} 
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex-grow overflow-auto">
          <TopBar 
            toggleSidebar={toggleSidebar} 
            activeTab={activeTab} 
            handleTabClick={handleTabClick}
            sidebarOpen={sidebarOpen}
          />
          
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='flex-1 max-w-[80vw] min-h-max bg-gray-900/70 backdrop-blur-sm m-4 rounded-2xl mt-20 border border-gray-800 shadow-xl'
          >
            {renderContent()}
          </motion.div>
        </div>

        <AnimatePresence>
          {message && (
            <MessageCard 
              title={message.title} 
              message={message.message} 
              type={message.type} 
              onClose={() => setMessage(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </AnimatedBackground>
  );
};

export default Dashboard;