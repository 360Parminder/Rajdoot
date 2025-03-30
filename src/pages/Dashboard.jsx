import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Documentation from './Documentation';
import useMessageCard from '../hooks/useMessageCard';
import MessageCard from '../components/Card/MessageCard';

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
        return <Home />;
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
    <div className="flex h-screen bg-[#000]">
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        activeTab={activeTab} 
        handleTabClick={handleTabClick} 
      />

      <div className="flex-grow overflow-auto">
        <TopBar 
          toggleSidebar={toggleSidebar} 
          activeTab={activeTab} 
          handleTabClick={handleTabClick}
          sidebarOpen={sidebarOpen}
        />
        <div className='flex-1 max-w-[80vw] min-h-max bg-[#18181a] m-2 rounded-2xl mt-16'>
          {renderContent()}
        </div>
      </div>
      {message && <MessageCard title={message.title} message={message.message} type={message.type} onClose={() => setMessage(null)} />}
    </div>
  );
};

export default Dashboard;