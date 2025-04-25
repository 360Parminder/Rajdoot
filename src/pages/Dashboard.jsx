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
import { CreditCard, LogOut, User, X } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { message, setMessage } = useMessageCard();
  const { user } = useAuth();
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

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
  const ProfileCard = () => {
    const { logout } = useAuth();
    
    return (
      <AnimatePresence initial={false}>
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
                toggleSidebar={toggleSidebar}
                openSubmenus={openSubmenus}
                setOpenSubmenus={setOpenSubmenus}
                setShowProfileCard={setShowProfileCard}
                user={user}
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
      <AnimatePresence>
        {showProfileCard && (
          <ProfileCard user={user} setShowProfileCard={setShowProfileCard} />
        )}
      </AnimatePresence>

    </AnimatedBackground>
  );
};

export default Dashboard;