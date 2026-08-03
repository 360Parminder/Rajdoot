// Sidebar.jsx
import { useNavigate } from 'react-router-dom';
import { House, ChevronsLeftRight, BadgePlus, SquareTerminal, LayoutDashboard, User, Settings, ChevronRight, X, CreditCard, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import icon from '../../assets/image/logo_dark.png';
import { useAuth } from '../../hooks/useAuth';

const Sidebar = ({ sidebarOpen, activeTab, handleTabClick, setShowProfileCard, openSubmenus, showProfileCard, setOpenSubmenus }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      icon: <House size={20} className="text-neutral-900 dark:text-neutral-100" />
    },
    {
      id: 'api-section',
      label: 'API Management',
      icon: <ChevronsLeftRight size={20} className="text-neutral-900 dark:text-neutral-100" />,
      subItems: [
        { id: 'new-api', label: 'Create New API', icon: <BadgePlus size={20} className="text-neutral-900 dark:text-neutral-100" /> },
        { id: 'message', label: 'Message', icon: <SquareTerminal size={20} className="text-neutral-900 dark:text-neutral-100" /> },
        { id: 'OTPVerification', label: 'OTP Verification', icon: <SquareTerminal size={20} className="text-neutral-900 dark:text-neutral-100" /> },
        { id: 'manage-api', label: 'Manage API', icon: <LayoutDashboard size={20} className="text-neutral-900 dark:text-neutral-100" /> },
      ]
    },
    {
      id: 'documentation',
      label: 'Documentation',
      icon: <LayoutDashboard size={20} className="text-neutral-900 dark:text-neutral-100" />
    },
    {
      id: 'user-section',
      label: 'User Settings',
      icon: <User size={20} className="text-neutral-900 dark:text-neutral-100" />,
      subItems: [
        { id: 'account', label: 'Account', icon: <User size={20} className="text-neutral-900 dark:text-neutral-100" /> },
        { id: 'settings', label: 'Settings', icon: <Settings size={20} className="text-neutral-900 dark:text-neutral-100" /> },
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
      className={`h-[95%] my-2 ml-2 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border-neutral-200 dark:border-neutral-700 backdrop-blur-sm border rounded-2xl flex flex-col py-3 relative transition-all duration-300`}
    >
      <div className={`flex items-center justify-between mx-2 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors`}>
        <button onClick={() => navigate('/')} className='flex items-center'>
          <div className={`${sidebarOpen ? "size-8" : "w-8 h-8"} rounded-tl-2xl rounded-tr-lg rounded-bl-lg rounded-br-2xl bg-neutral-200 dark:bg-neutral-700 p-1 flex items-center justify-center`}>
            <img src={icon} alt="logo" className="w-full h-full object-contain" />
          </div>
          <p>
            {sidebarOpen && <span className="ml-2 text-lg font-semibold text-neutral-900 dark:text-neutral-100">Rajdoot</span>}
          </p>
        </button>
      </div>

      <nav className="flex-grow mt-8 px-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id} className='flex flex-col'>
              {item.subItems ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(item.id)}
                    className={`flex items-center w-full ${sidebarOpen ? "px-4 py-3" : "p-2 mx-1"} justify-between rounded-lg transition-colors
                      ${openSubmenus[item.id] 
                        ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100' 
                        : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100'
                      }`}
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
                              ${activeTab === subItem.id 
                                ? 'bg-neutral-100 dark:bg-neutral-700 text-blue-600 dark:text-blue-400' 
                                : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                              }`}
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
                  className={`flex items-center w-full ${sidebarOpen ? "px-4 py-3" : "p-2 mx-3"} gap-3 rounded-lg transition-colors
                    ${activeTab === item.id 
                      ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100' 
                      : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100'
                    }`}
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
          className={`flex items-center ${sidebarOpen ? 'w-full p-2' : 'p-2'} rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors`}
        >
          <div className={`rounded-lg bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center overflow-hidden border border-neutral-300 dark:border-neutral-600
            ${sidebarOpen ? 'w-8 h-8 mr-2' : 'w-8 h-8'}`}>
            {user?.image ? (
              <img src={user.image} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <User className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
            )}
          </div>
          {sidebarOpen && (
            <div className="text-left">
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 capitalize">{user?.name}</p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 truncate">{user?.email}</p>
            </div>
          )}
        </button>
      </div>

      {showProfileCard && <ProfileCard user={user} setShowProfileCard={setShowProfileCard} />}
    </motion.div>
  );
};

export default Sidebar;