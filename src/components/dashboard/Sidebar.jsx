import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { House, ChevronsLeftRight, BadgePlus, SquareTerminal, LayoutDashboard, User, Settings, ChevronRight } from 'lucide-react';
import icon from '../../assets/image/logo.png';
import { useAuth } from '../../hooks/useAuth';

const Sidebar = ({ sidebarOpen, activeTab, handleTabClick }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      icon: <House size={20} color="#fff" />
    },
    {
      id: 'api-section',
      label: 'API Management',
      icon: <ChevronsLeftRight size={20} color="#fff" />,
      subItems: [
        { id: 'new-api', label: 'Create New API', icon: <BadgePlus size={20} color="#fff" /> },
        { id: 'api', label: 'API Explorer', icon: <ChevronsLeftRight size={20} color="#fff" /> },
        { id: 'try', label: 'Try API', icon: <SquareTerminal size={20} color="#fff" /> },
        { id: 'manage-api', label: 'Manage API', icon: <LayoutDashboard size={20} color="#fff" /> },
      ]
    },
    {
      id: 'documentation',
      label: 'Documentation',
      icon: <LayoutDashboard size={20} color="#fff" />
    },
    {
      id: 'user-section',
      label: 'User Settings',
      icon: <User size={20} color="#fff" />,
      subItems: [
        { id: 'account', label: 'Account', icon: <User size={20} color="#fff" /> },
        { id: 'settings', label: 'Settings', icon: <Settings size={20} color="#fff" /> },
      ]
    }
  ];

  return (
    <div className={`${sidebarOpen ? 'w-64' : 'w-14'} bg-[#18181a] text-white transition-all duration-300 ease-in-out flex flex-col py-3`}>
      <div className={`${sidebarOpen ? "px-2 py-2" : "py-4"} flex items-center justify-between hover:bg-[#282729] mx-2 rounded-lg hover:shadow-lg transition-all duration-200`}>
        <button onClick={() => navigate('/')} className='flex items-center'>
          <div className={`${sidebarOpen ? "w-10 h-10" : "w-8 h-8"} rounded-lg bg-blue-500 p-1 flex items-center justify-center`}>
            <img src={icon} alt="logo" className="w-full h-full m-1" />
          </div>
          {sidebarOpen && (
            <div className='mx-2 my-2 transition-all duration-200'>
              <h2 className="font-medium leading-4">Project</h2>
              <p className='capitalize'>{user?.plan?.type}</p>
            </div>
          )}
        </button>
      </div>

      <nav className="flex-grow mt-20">
        <ul>
          {menuItems.map((item) => {
            const [isOpen, setIsOpen] = useState(false);

            if (item.subItems) {
              return (
                <li key={item.id} className="px-2">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`flex items-center w-full ${sidebarOpen ? "px-4 py-2" : "p-2 mx-2"} justify-between ${isOpen ? 'bg-[#282729]' : 'hover:bg-[#282729]'} transition-colors duration-200 rounded-lg`}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      {sidebarOpen && <span>{item.label}</span>}
                    </div>
                    {sidebarOpen && (
                      <ChevronRight
                        size={20}
                        color="#fff"
                        className={`transition-transform ${isOpen ? 'rotate-90' : ''}`}
                      />
                    )}
                  </button>

                  {isOpen && sidebarOpen && (
                    <ul className="ml-4 mt-1 space-y-1 px-2">
                      {item.subItems.map(subItem => (
                        <li key={subItem.id}>
                          <button
                            onClick={() => handleTabClick(subItem.id)}
                            className={`flex items-center w-full px-4 py-2 gap-2.5 ${activeTab === subItem.id ? 'bg-[#282729]' : 'hover:bg-[#282729]'} transition-colors duration-200 rounded-lg mx-2`}
                          >
                            {subItem.icon}
                            <span>{subItem.label}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            } else {
              return (
                <li key={item.id} className="mb-1 flex">
                  <button
                    onClick={() => handleTabClick(item.id)}
                    className={`flex items-center w-full justify-between ${sidebarOpen ? "px-4 py-2 mx-2" : "p-2 mx-2"} gap-2.5 ${activeTab === item.id ? 'bg-[#282729]' : 'hover:bg-[#282729]'} transition-colors duration-200 rounded-lg`}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      {sidebarOpen && <span>{item.label}</span>}
                    </div>
                    {sidebarOpen && <ChevronRight size={20} color="#fff" />}
                  </button>
                </li>
              );
            }
          })}
        </ul>
      </nav>

      <div className="px-4 py-2">
        {sidebarOpen ? (
          <div className="flex items-center hover:bg-[#282729] p-2 rounded-lg transition-all duration-200 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gray-600 flex items-center justify-center mr-2 overflow-hidden">
              <img src={user?.image} alt="" />
            </div>
            <div>
              <p className="font-medium capitalize">{user?.name}</p>
              <p className="text-xs">{user?.email}</p>
            </div>
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center mx-auto overflow-hidden">
            <img src={user?.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar; 