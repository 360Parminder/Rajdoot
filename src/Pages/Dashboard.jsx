import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Documentation from './Documentation';
import icon from '../assets/image/logo.png';
import { PanelLeft, ChevronRight, House,Copy, SquareTerminal, Settings, BadgePlus, LayoutDashboard, ChevronsLeftRight, User } from 'lucide-react';
const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user, loading } = useAuth();

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
        return (
          <div className="p-6 bg-[#18181a] m-4 rounded-2xl">
            <h1 className="text-2xl font-bold mb-4 text-gray-200">Welcome to your Dashboard</h1>
            <p className="mb-4 text-gray-300">Get started with your API integration journey.</p>
            <div className="flex gap-5">
              {/* <DashboardCard
                title="API Calls"
                value="1,234"
                change="+12.3%"
              /> */}
              <div className='bg-[#282729] p-4 rounded shadow w-full flex flex-col gap-4'> 
                  <div className=' relative'>
                    <label className=' text-white' htmlFor="">API ID</label>
                    <div className='relative'>
                    <input type="text" disabled="true" className=' relative appearance-none w-full p-2 pr-12  border border-[#7170709a] rounded-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150' placeholder='API ID'/>
                    <Copy size={20} color="#fff" className='absolute right-3 top-2.5 cursor-pointer'/>                  
                    </div>
                  </div>
                  <div>
                    <label className='text-white' htmlFor="">API Key</label>
                    <div className='relative'>
                    <input type="text" className='w-full p-2 border rounded text-gray-200 border-[#7170709a]' placeholder='API Key'/>
                    <Copy size={20} color="#fff" className='absolute right-3 top-2.5 cursor-pointer'/>
                    </div>
                  </div>
              </div>
            
             
            </div>
          </div>
        );
      case 'new-api':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-200">Create New API</h1>
            <p className="mb-4 text-gray-300">Set up a new API endpoint for your application.</p>
            <div className="bg-gray-800 shadow rounded p-4">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-300">API Name</label>
                <input type="text" className="w-full p-2 border rounded bg-gray-700 text-gray-200 border-gray-600" placeholder="e.g., User Authentication API" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-300">Endpoint Path</label>
                <input type="text" className="w-full p-2 border rounded bg-gray-700 text-gray-200 border-gray-600" placeholder="e.g., /auth/login" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-300">Method</label>
                <select className="w-full p-2 border rounded bg-gray-700 text-gray-200 border-gray-600">
                  <option>GET</option>
                  <option>POST</option>
                  <option>PUT</option>
                  <option>DELETE</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-300">Description</label>
                <textarea className="w-full p-2 border rounded h-24 bg-gray-700 text-gray-200 border-gray-600" placeholder="Describe what this API endpoint does..."></textarea>
              </div>
              <button className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded">
                Create API
              </button>
            </div>
          </div>
        );
      case 'documentation':

        return <Documentation />;
      case 'api':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-200">API Explorer</h1>
            <p className="mb-4 text-gray-300">Try out API endpoints and see responses in real-time.</p>
            <div className="bg-gray-800 p-4 rounded mb-4">
              <h2 className="text-lg font-semibold mb-2 text-gray-200">Endpoint Selection</h2>
              <select className="w-full p-2 border rounded bg-gray-700 text-gray-200 border-gray-600">
                <option>GET /users</option>
                <option>POST /users</option>
                <option>GET /products</option>
                <option>POST /orders</option>
              </select>
            </div>
            <button className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded">
              Send Request
            </button>
          </div>
        );
      case 'try':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-200">Try API</h1>
            <p className="mb-4 text-gray-300">Test our API capabilities with sample requests.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded">
                <h2 className="text-lg font-semibold mb-2 text-gray-200">Request</h2>
                <textarea
                  className="w-full h-40 p-2 border rounded font-mono text-sm bg-gray-700 text-gray-200 border-gray-600"
                  defaultValue={`{\n  "method": "GET",\n  "endpoint": "/users",\n  "params": {\n    "limit": 10\n  }\n}`}
                />
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <h2 className="text-lg font-semibold mb-2 text-gray-200">Response</h2>
                <div className="w-full h-40 p-2 border rounded font-mono text-sm bg-gray-700 text-gray-200 border-gray-600 overflow-auto">
                  {`{\n  "status": 200,\n  "data": [\n    {"id": 1, "name": "User 1"},\n    {"id": 2, "name": "User 2"}\n  ]\n}`}
                </div>
              </div>
            </div>
          </div>
        );
      case 'account':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-200">Account Settings</h1>
            <p className="mb-4 text-gray-300">Manage your account information and preferences.</p>
            <div className="bg-gray-800 shadow rounded p-4 mb-4">
              <h2 className="text-lg font-semibold mb-2 text-gray-200">Profile Information</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-300">Name</label>
                <input type="text" className="w-full p-2 border rounded bg-gray-700 text-gray-200 border-gray-600" defaultValue="John Doe" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-300">Email</label>
                <input type="email" className="w-full p-2 border rounded bg-gray-700 text-gray-200 border-gray-600" defaultValue="john@example.com" />
              </div>
              <button className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded">
                Save Changes
              </button>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-200">Settings</h1>
            <p className="mb-4 text-gray-300">Configure your API preferences and notification settings.</p>
            <div className="bg-gray-800 shadow rounded p-4 mb-4">
              <h2 className="text-lg font-semibold mb-2 text-gray-200">API Settings</h2>
              <div className="mb-4">
                <label className="flex items-center text-gray-300">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span>Enable rate limiting</span>
                </label>
              </div>
              <div className="mb-4">
                <label className="flex items-center text-gray-300">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span>Enable error logging</span>
                </label>
              </div>
            </div>
            <div className="bg-gray-800 shadow rounded p-4">
              <h2 className="text-lg font-semibold mb-2 text-gray-200">Notification Settings</h2>
              <div className="mb-4">
                <label className="flex items-center text-gray-300">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span>Email notifications</span>
                </label>
              </div>
              <div className="mb-4">
                <label className="flex items-center text-gray-300">
                  <input type="checkbox" className="mr-2" />
                  <span>SMS notifications</span>
                </label>
              </div>
            </div>
          </div>
        );
      default:
        return <div className="text-gray-300">Select a tab</div>;
    }
  };

  // Dashboard card component
  const DashboardCard = ({ title, value, change }) => (
    <div className="bg-gray-800 p-4 rounded shadow">
      <h3 className="text-lg font-medium text-gray-300">{title}</h3>
      <p className="text-2xl font-bold mt-2 text-gray-200">{value}</p>
      <p className="text-sm mt-1 text-gray-400">
        {change}
      </p>
    </div>
  );

  return (
    <div className="flex h-screen bg-[#000]">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-14'} bg-[#18181a] text-white transition-all duration-300 ease-in-out flex flex-col py-3 `}>
        <div className={` ${sidebarOpen ? "px-2 py-2" : "py-4"}flex items-center justify-between hover:bg-[#282729] mx-2 rounded-lg hover:shadow-lg transition-all duration-200`}>
          <div className='flex items-center '>
            <div className={`${sidebarOpen ? "w-10 h-10" : "w-8 h-8"} rounded-lg bg-blue-500 p-1 flex items-center justify-center`}>
              <img src={icon} alt="logo" className="w-full h-full m-1" />
            </div>
            {sidebarOpen && <div className='mx-2 my-2 transition-all duration-200 '>
              <h2 className=" font-medium leading-4">Project</h2>
              <p className=' capitalize'>{user?.plan?.type}</p>
            </div>}
          </div>

        </div>
        <nav className="flex-grow mt-20">
          <ul>
            {[
              { id: 'new-api', label: 'Create New API' },
              { id: 'home', label: 'Home', icon: '🏠' },
              { id: 'documentation', label: 'Documentation' },
              { id: 'api', label: 'API Explorer' },
              { id: 'try', label: 'Try API' },
              { id: 'account', label: 'Account' },
              { id: 'settings', label: 'Settings' }
            ].map(item => (
              <li key={item.id} className="mb-1 flex justify-between">
                <button
                  onClick={() => handleTabClick(item.id)}
                  className={`flex items-center w-full px-4 py-2 gap-1 ${activeTab === item.id ? 'bg-[#282729]' : 'hover:bg-[#282729]'} transition-colors duration-200 rounded-lg mx-2`}
                >
                  {item.id == "home" ? <House size={20} color="#fff" />
                    : item.id == "try" ? <SquareTerminal size={20} color="#fff" /> :
                      item.id == "settings" ? <Settings size={20} color="#fff" /> :
                        item.id == "new-api" ? <BadgePlus size={20} color="#fff" /> :
                          item.id == "documentation" ? <LayoutDashboard size={20} color="#fff" /> :
                            item.id == "api" ? <ChevronsLeftRight size={20} color="#fff" /> :
                              item.id == "account" ? <User size={20} color="#fff" /> :
                                <span>{item.icon}</span>}
                  {sidebarOpen && <span>{item.label}</span>}
                  <ChevronRight size={20} color="#fff" />
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="px-4 py-2">
          {sidebarOpen ? (
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-gray-600 flex items-center justify-center mr-2 overflow-hidden">
                <img src={user?.image} alt="" srcset="" />
              </div>
              <div>
                <p className="font-medium capitalize">{user?.name}</p>
                <p className="text-xs ">{user?.email}</p>
              </div>
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center mx-auto overflow-hidden">
              <img src={user?.image} alt="" srcset="" />
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow overflow-auto">
        {/* Top bar with username and balance */}
        <div className="py-2 px-4 shadow flex items-center ">
          <button onClick={toggleSidebar} className="p-2 rounded hover:bg-[#18181a]">
            <PanelLeft size={20} color="#fff" />
          </button>
          <div>
            <h3 className="text-gray-200 capitalize">{activeTab=='home'?`Hello ${user?.name}`:""}</h3>
          </div>
        </div>
        <div className='flex-1 min-h-max bg-[#18181a] m-2 rounded-2xl'>
        {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;