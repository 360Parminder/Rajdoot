import React, { useCallback, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import Documentation from './Documentation';
import useMessageCard from '../hooks/useMessageCard';
import { CreditCard, LogOut, User, X, Menu } from 'lucide-react';

// Import components
import MessageCard from '../components/Card/MessageCard';
import Sidebar from '../components/dashboard/Sidebar';
import Home from '../components/dashboard/Home';
import NewApi from '../components/dashboard/NewApi';
import ApiExplorer from '../components/dashboard/ApiExplorer';
import ManageApi from '../components/dashboard/ManageApi';
import Account from '../components/dashboard/Account';
import Settings from '../components/dashboard/Settings';
import PlanDetails from '../components/dashboard/PlanDetails';
import BillingHistory from '../components/dashboard/BillingHistory';
import Message from '../components/dashboard/Message';
import OTPVerification from '../components/dashboard/OTPVerification';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const { message, setMessage } = useMessageCard();
  const { user, userProfile } = useAuth();
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useCallback(() => {
    userProfile()
  }, [userProfile]);
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Close sidebar on mobile when tab is clicked
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close sidebar when clicking outside on mobile
  const handleBackdropClick = (e) => {
    if (isMobile && sidebarOpen && !e.target.closest('.sidebar-container')) {
      setSidebarOpen(false);
    }
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
      case 'message':
        return <Message />;
      case 'account':
        return <Account handleTabClick={handleTabClick} />;
      case 'settings':
        return <Settings />;
      case 'manage-api':
        return <ManageApi />;
      case 'plan-details':
        return <PlanDetails handleTabClick={handleTabClick} />;  
      case 'billing-history':
        return <BillingHistory />;
      case 'OTPVerification':
        return <OTPVerification />;
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
          className={`absolute z-[100] ${
            isMobile ? 'bottom-16 right-4' : 'left-72 bottom-4'
          } w-72 bg-neutral-300 text-neutral-900 dark:bg-neutral-800 backdrop-blur-sm rounded-xl shadow-xl border border-neutral-100 dark:border-neutral-700 overflow-hidden`}
        >
          <div className="p-6 border-b border-neutral-700 overflow-hidden">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center overflow-hidden border border-neutral-100 dark:border-neutral-700">
                  {user?.image ? (
                    <img src={user.image} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                <div className="ml-4">
                  <h3 className="text-md font-semibold text-neutral-900 dark:text-neutral-100 capitalize">{user?.name}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{user?.email}</p>
                </div>
              </div>
              <button
                onClick={() => setShowProfileCard(false)}
                className="p-1 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
              >
                <X className="w-4 h-4 text-red-400" />
              </button>
            </div>
          </div>
  
          <div className="p-4 border-b border-neutral-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-900 dark:text-neutral-100">Current Plan</p>
                <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{user.plan.plans[0].planId.name || 'Free'} Plan</p>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-indigo-500/20 text-indigo-400 rounded-full">
                Active
              </span>
            </div>
          </div>
  
          <div className="p-2">
            <button 
              onClick={() => [setActiveTab('account'), setShowProfileCard(false)]} 
              className="w-full flex items-center p-3 rounded-lg dark:hover:bg-neutral-700 transition-colors dark:text-neutral-100"
            >
              <User className="w-5 h-5 mr-3 text-blue-400" />
              <span>Account Settings</span>
            </button>
            <button
              onClick={() => [setActiveTab('plan-details'), setShowProfileCard(false)]}
              className="w-full flex items-center p-3 rounded-lg dark:hover:bg-neutral-700 transition-colors text-neutral-300"
            >
              <CreditCard className="w-5 h-5 mr-3 text-purple-400" />
              <span>Billing & Plans</span>
            </button>
            <button
              onClick={logout}
              className="w-full flex items-center p-3 rounded-lg hover:bg-neutral-700 transition-colors text-red-400"
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
    <>
      <div 
        className="flex h-screen bg-neutral-300 dark:bg-neutral-800 backdrop-blur-sm relative"
        onClick={handleBackdropClick}
      >
        {/* Mobile Header */}
        {isMobile && (
          <div className="absolute top-0 left-0 right-0 z-50 bg-white dark:bg-neutral-900 border-b border-neutral-700 p-4 flex justify-between items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
            >
              <Menu className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
            </button>
            <h1 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 capitalize">
              {activeTab.replace('-', ' ')}
            </h1>
            <button
              onClick={() => setShowProfileCard(!showProfileCard)}
              className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center overflow-hidden border border-neutral-300 dark:border-neutral-700"
            >
              {user?.image ? (
                <img src={user.image} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <User className="w-4 h-4 text-gray-400" />
              )}
            </button>
          </div>
        )}

        {/* Sidebar */}
        <AnimatePresence>
          {(sidebarOpen || !isMobile) && (
            <motion.div
              initial={{ x: isMobile ? -300 : 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isMobile ? -300 : 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`h-full sidebar-container ${
                isMobile 
                  ? 'fixed inset-y-0 left-0 z-40 w-64' 
                  : 'relative'
              }`}
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
                isMobile={isMobile}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Backdrop */}
        {isMobile && sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className={`flex-grow overflow-auto ${isMobile ? 'pt-16' : ''}`}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex-1 ${
              isMobile 
                ? 'max-w-full min-h-[calc(100vh-4rem)] m-0 rounded-none' 
                : 'max-w-[100vw] min-h-[95%] m-2 rounded-2xl'
            } bg-white dark:bg-neutral-900 backdrop-blur-sm border border-neutral-700 shadow-xl`}
          >
            {renderContent()}
          </motion.div>
        </div>

        {/* Message Card */}
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

      {/* Profile Card */}
      <AnimatePresence>
        {showProfileCard && (
          <ProfileCard user={user} setShowProfileCard={setShowProfileCard} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Dashboard;