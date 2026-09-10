// Sidebar.jsx
import { useNavigate } from 'react-router-dom';
import { Home01Icon, ArrowLeftRightIcon, CheckmarkBadge01Icon, ComputerTerminal01Icon, DashboardSquare01Icon, UserIcon, Settings01Icon, ArrowRight01Icon, Cancel01Icon, CreditCardIcon, Logout01Icon, Key01Icon, BarChartIcon } from 'hugeicons-react';
import { motion, AnimatePresence } from 'framer-motion';
import icon from '../../assets/image/icon.png';
import { useAuth } from '../../hooks/useAuth';
import { cn } from "../../lib/utils";
import ThemeToggle from '../Common/ThemeToggle';

const Sidebar = ({ sidebarOpen, activeTab, handleTabClick, setShowProfileCard, openSubmenus, showProfileCard, setOpenSubmenus }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      icon: <Home01Icon size={20} className={cn('text-neutral-900', 'dark:text-neutral-100')} />
    },
    {
      id: 'api-section',
      label: 'API Management',
      icon: <ArrowLeftRightIcon size={20} className={cn('text-neutral-900', 'dark:text-neutral-100')} />,
      subItems: [
        { id: 'api-keys', label: 'API Keys', icon: <Key01Icon size={20} className={cn('text-neutral-900', 'dark:text-neutral-100')} /> },
        { id: 'api-analytics', label: 'API Analytics', icon: <BarChartIcon size={20} className={cn('text-neutral-900', 'dark:text-neutral-100')} /> },
        { id: 'new-api', label: 'Create New API', icon: <CheckmarkBadge01Icon size={20} className={cn('text-neutral-900', 'dark:text-neutral-100')} /> },
        { id: 'message', label: 'Message', icon: <ComputerTerminal01Icon size={20} className={cn('text-neutral-900', 'dark:text-neutral-100')} /> },
        { id: 'OTPVerification', label: 'OTP Verification', icon: <ComputerTerminal01Icon size={20} className={cn('text-neutral-900', 'dark:text-neutral-100')} /> },
        { id: 'manage-api', label: 'Manage API', icon: <DashboardSquare01Icon size={20} className={cn('text-neutral-900', 'dark:text-neutral-100')} /> },
      ]
    },
    {
      id: 'documentation',
      label: 'Documentation',
      icon: <DashboardSquare01Icon size={20} className={cn('text-neutral-900', 'dark:text-neutral-100')} />
    },
    {
      id: 'user-section',
      label: 'User Settings',
      icon: <UserIcon size={20} className={cn('text-neutral-900', 'dark:text-neutral-100')} />,
      subItems: [
        { id: 'account', label: 'Account', icon: <UserIcon size={20} className={cn('text-neutral-900', 'dark:text-neutral-100')} /> },
        { id: 'settings', label: 'Settings', icon: <Settings01Icon size={20} className={cn('text-neutral-900', 'dark:text-neutral-100')} /> },
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
      className={`h-[95%] my-2 ml-2 bg-slate-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border-neutral-300 dark:border-neutral-700 backdrop-blur-sm border rounded-2xl flex flex-col py-3 relative transition-all duration-300`}
    >
      <div className={`flex items-center justify-between mx-2 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors`}>
        <button onClick={() => navigate('/')} className={cn('flex', 'items-center')}>
          <div className={`${sidebarOpen ? "size-8" : "w-8 h-8"}  p-1 flex items-center justify-center`}>
            <img src={icon} alt="logo" className={cn('w-full', 'h-full', 'object-contain')} />
          </div>
          <p>
            {sidebarOpen && <span className={cn('ml-2', 'text-lg', 'font-semibold', 'text-neutral-900', 'dark:text-neutral-100')}>Rajdoot</span>}
          </p>
        </button>
      </div>

      <nav className={cn('flex-grow', 'mt-8', 'px-4')}>
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id} className={cn('flex', 'flex-col')}>
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
                    <div className={cn('flex', 'items-center', 'gap-3')}>
                      {item.icon}
                      {sidebarOpen && <span className="text-sm">{item.label}</span>}
                    </div>
                    {sidebarOpen && (
                      <ArrowRight01Icon
                        size={16}
                        className={`transition-transform ${openSubmenus[item.id] ? 'rotate-90' : ''}`}
                      />
                    )}
                  </button>

                  {openSubmenus[item.id] && sidebarOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className={cn('ml-8', 'mt-1', 'space-y-1')}
                    >
                      {item.subItems.map(subItem => (
                        <li key={subItem.id}>
                          <button
                            onClick={() => handleTabClick(subItem.id)}
                            className={`flex items-center w-full px-4 py-2 gap-3 text-sm rounded-lg transition-colors
                              ${activeTab === subItem.id
                                ? 'bg-orange-500/15 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 font-medium border-l-2 border-orange-500'
                                : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-orange-500 dark:hover:text-orange-400'
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
                      ? 'bg-orange-500/15 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 font-medium border-l-2 border-orange-500'
                      : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-orange-500 dark:hover:text-orange-400'
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

      <div className={cn('px-3', 'py-3', 'space-y-2', 'border-t', 'border-neutral-200', 'dark:border-neutral-800')}>
        <div className="flex items-center justify-between px-1">
          {sidebarOpen ? (
            <div className="flex items-center justify-between w-full py-1">
              <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Theme</span>
              <ThemeToggle showLabel={true} />
            </div>
          ) : (
            <ThemeToggle className="w-8 h-8 p-1 justify-center mx-auto" size={16} />
          )}
        </div>

        <button
          onClick={() => setShowProfileCard(true)}
          className={`flex items-center ${sidebarOpen ? 'w-full p-2' : 'p-2'} rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors`}
        >
          <div className={`rounded-lg bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center overflow-hidden border border-neutral-300 dark:border-neutral-600
            ${sidebarOpen ? 'w-8 h-8 mr-2' : 'w-8 h-8'}`}>
            {user?.image ? (
              <img src={user.image} alt="Profile" className={cn('w-full', 'h-full', 'object-cover')} />
            ) : (
              <UserIcon className={cn('w-4', 'h-4', 'text-neutral-600', 'dark:text-neutral-300')} />
            )}
          </div>
          {sidebarOpen && (
            <div className="text-left">
              <p className={cn('text-sm', 'font-medium', 'text-neutral-900', 'dark:text-neutral-100', 'capitalize')}>{user?.name}</p>
              <p className={cn('text-xs', 'text-neutral-600', 'dark:text-neutral-400', 'truncate')}>{user?.email}</p>
            </div>
          )}
        </button>
      </div>

      {showProfileCard && <ProfileCard user={user} setShowProfileCard={setShowProfileCard} />}
    </motion.div>
  );
};

export default Sidebar;