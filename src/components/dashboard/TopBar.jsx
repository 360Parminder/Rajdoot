import React from 'react';
import { PanelLeft, House, ChevronRight } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const TopBar = ({ toggleSidebar, activeTab, handleTabClick, sidebarOpen }) => {
  const { user } = useAuth();

  return (
    <div className={`fixed top-0 right-0 z-10 py-2 px-4 shadow bg-[#18181a] flex items-center justify-between transition-all duration-300 ${sidebarOpen ? 'left-64' : 'left-14'}`}>
      <div className="flex items-center gap-2">
        <button onClick={toggleSidebar} className="p-2 rounded hover:bg-[#282729]">
          <PanelLeft size={20} color="#fff" />
        </button>
        <nav className="text-gray-300">
          <ol className="flex items-center space-x-2">
            <li className="flex items-center">
              <House size={16} className="mr-1" />
              <span className="hover:text-gray-100 cursor-pointer" onClick={() => handleTabClick('home')}>Dashboard</span>
            </li>
            {activeTab !== 'home' && (
              <li className="flex items-center">
                <ChevronRight size={14} className="mx-1" />
                <span className="text-gray-100">
                  {activeTab === 'new-api' ? 'Create New API' :
                    activeTab === 'documentation' ? 'Documentation' :
                      activeTab === 'api' ? 'API Explorer' :
                        activeTab === 'try' ? 'Try API' :
                          activeTab === 'account' ? 'Account' :
                            'Settings'}
                </span>
              </li>
            )}
          </ol>
        </nav>
      </div>
      <div>
        <h3 className="text-gray-200 capitalize">{activeTab === 'home' ? `Hello ${user?.name}` : ""}</h3>
      </div>
    </div>
  );
};

export default TopBar; 