import React, { useContext, useState, useCallback, useMemo } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Documentation from './Documentation';
import icon from '../assets/image/logo.png';
import { PanelLeft, ChevronRight, House, Copy, SquareTerminal, Settings, BadgePlus, LayoutDashboard, ChevronsLeftRight, User, Eye, EyeClosed } from 'lucide-react';
import ApiContext from '../context/apiContext';
import SuccessCard from '../components/Card/SuccessCard';
import useMessageCard from '../hooks/useMessageCard';
import MessageCard from '../components/Card/MessageCard';
import useApi from '../hooks/useApi';
const Dashboard = () => {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showApiKey, setShowApiKey] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { user } = useAuth();
  const { post, loading } = useApi();
  const { value } = useContext(ApiContext);
  console.log(value);
  const { message, showMessage, setMessage } = useMessageCard();
  const handleCopy = (text, label) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    showMessage("Copied", `${label} copied to clipboard`, "success");
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const createApi = async () => {
    try {
      const response = await post("/api-keys/create-api-key", { name, description });
      console.log(response);

      showMessage("Created", "API Key created successfully", "success");
    } catch (error) {
      showMessage("Error", error.message, "error");
    }
  };

  // Render the content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="p-6 bg-[#18181a] m-4 rounded-2xl">
            <h1 className="text-2xl font-bold mb-4 text-gray-200">Welcome to your Dashboard</h1>
            <p className="mb-4 text-gray-300">Get started with your API integration journey.</p>
            <div className="flex gap-5 flex-wrap">
              {/* <DashboardCard
                title="API Calls"
                value="1,234"
                change="+12.3%"
              /> */}
              {value?.apis.map((item, index) => (
                <div key={index} className='bg-[#282729] p-4 rounded shadow w-full flex flex-col gap-4'>
                  <div className=' relative'>
                    <label className=' text-white' htmlFor="">API ID</label>
                    <div className='relative'>
                      <input type="text" disabled={true} defaultValue={item?.keyId} className=' relative appearance-none w-full p-2 pr-12  border border-[#7170709a] rounded-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150' placeholder='API ID' />
                      <button onClick={() => handleCopy(item?.keyId, "API ID")} className='bg-[#282729] hover:bg-[#282729] text-white px-4 py-2 rounded'>
                        <Copy size={20} color="#fff" className='absolute right-3 top-2.5 cursor-pointer' />
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className='text-white' htmlFor="">API Key</label>
                    <div className='relative'>
                      <input type="password" defaultValue={item?.secretKey} className='w-full p-2 border rounded text-gray-200 border-[#7170709a]' placeholder='API Key' />
                      <button onClick={() => handleCopy(item?.secretKey, "API Key")} className='bg-[#282729] hover:bg-[#282729] text-white px-4 py-2 rounded'>
                        <Copy size={20} color="#fff" className='absolute right-3 top-2.5 cursor-pointer' />
                      </button>
                    </div>
                  </div>
                </div>
              ))}


            </div>
            
          </div>
        );
      case 'new-api':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-200">Create New API</h1>
            <p className="mb-4 text-gray-300">Set up a new API endpoint for your application.</p>
            <div className="bg-[#282729] shadow rounded p-4">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-300">API Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded  text-gray-200 border-[#7170709a]" placeholder="e.g., User Authentication API" />
              </div>


              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-300">Description</label>
                <textarea onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border rounded h-24  text-gray-200 border-[#7170709a]" placeholder="Describe what this API endpoint does..."></textarea>
              </div>
              {
                loading ?
                 <span className="bg-[#18181a] text-white px-4 py-2 rounded">
                  Creating...
                </span> :
                 <button onClick={createApi} className="bg-[#18181a] hover:bg-[#7170709a] text-white px-4 py-2 rounded">
                  Create API
                </button>
              }
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
          <div className="p-6 ">
            <h1 className="text-2xl font-bold mb-4 text-gray-200">Account Settings</h1>
            <p className="mb-4 text-gray-300">Manage your account information and preferences.</p>
            <div className="bg-[#282729] shadow rounded p-4 mb-4">
              <h2 className="text-lg font-semibold mb-2 text-gray-200">Profile Information</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-300">Name</label>
                <input type="text" className="w-full p-2 border rounded  text-gray-200 border-[#7170709a] capitalize" defaultValue={user?.name} />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-300">Email</label>
                <input type="email" className="w-full p-2 border rounded  text-gray-200 border-[#7170709a]" defaultValue={user.email} />
              </div>

              <button className="bg-[#18181a] hover:bg-[#7170709a] text-white px-4 py-2 rounded">
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
      case 'manage-api':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-200">Manage API</h1>
            <p className="mb-4 text-gray-300">View and manage your API endpoints and keys.</p>
            <div className="bg-[#282729] p-4 rounded">
              <h2 className="text-lg font-semibold mb-2 text-gray-200">API Endpoints</h2>
              <table className="w-full text-left text-gray-200">
                <thead>
                  <tr className="border-b border-[#7170709a]">
                    <th className="py-3 px-2">API Id</th>
                    <th className="py-3 px-2">API Key</th>
                    <th className="py-3 px-2">Expires On</th>
                    <th className="py-3 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {value?.apis.map((item, index) => (
                    <tr key={index} className="border-b border-[#7170709a]">
                      <td className="py-3 px-2">{item?.keyId}</td>
                      <td className="py-3 px-2 relative">
                        <div className="flex items-center">
                          <input
                            type={showApiKey ? "text" : "password"}
                            className="w-[85%] p-2 border rounded text-gray-200 border-[#7170709a]"
                            value={item?.secretKey}
                            readOnly
                          />
                          <button
                            onClick={() => setShowApiKey(!showApiKey)}
                            className="absolute right-4 text-gray-300 hover:text-white"
                          >
                            {showApiKey ? <EyeClosed size={24} color='#fff' /> : <Eye size={24} color='#fff' />}
                          </button>
                        </div>
                      </td>
                      <td className="py-3 px-2">
                        {item?.expiresOn || "Never"}
                      </td>
                      <td className="py-3 px-2">
                        <button className="bg-[#18181a] hover:bg-[#7170709a] text-white px-3 py-1 rounded mr-2">
                          Update
                        </button>
                        <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
          <button onClick={() => navigate('/')} className='flex items-center '>
            <div className={`${sidebarOpen ? "w-10 h-10" : "w-8 h-8"} rounded-lg bg-blue-500 p-1 flex items-center justify-center`}>
              <img src={icon} alt="logo" className="w-full h-full m-1" />
            </div>
            {sidebarOpen &&
              <div className='mx-2 my-2 transition-all duration-200 '>
                <h2 className=" font-medium leading-4">Project</h2>
                <p className='capitalize'>{user?.plan?.type}</p>
              </div>
            }
          </button>
        </div>
        <nav className="flex-grow mt-20">
          <ul>
            {[
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
            ].map((item, index) => {
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
                              <>
                                {subItem.icon}
                                <span>{subItem.label}</span>
                              </>
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
                        <span>{item.label}</span>
                      </div>
                      {sidebarOpen && (

                        <ChevronRight size={20} color="#fff" />

                      )}
                    </button>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
        {/* user profile details */}
        <div className="px-4 py-2">
          {sidebarOpen ? (
            <div className="flex items-center hover:bg-[#282729] p-2 rounded-lg transition-all duration-200 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-gray-600 flex items-center justify-center mr-2 overflow-hidden">
                <img src={user?.image} alt="" srcSet="" />
              </div>
              <div>
                <p className="font-medium capitalize ">{user?.name}</p>
                <p className="text-xs ">{user?.email}</p>
              </div>
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center mx-auto overflow-hidden">
              <img src={user?.image} alt="" srcSet="" />
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow overflow-auto">
        {/* Top bar with username and balance */}
        <div className="py-2 px-4 shadow flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button onClick={toggleSidebar} className="p-2 rounded hover:bg-[#18181a]">
              <PanelLeft size={20} color="#fff" />
            </button>
            {/* Breadcrumb navigation */}
            <nav className="text-gray-300">
              <ol className="flex items-center space-x-2">
                <li className="flex items-center">
                  <House size={16} className="mr-1" />
                  <span className="hover:text-gray-100 cursor-pointer" onClick={() => handleTabClick('home')}>Dashboard</span>
                </li>
                {activeTab !== 'home' && (
                  <>
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
                  </>
                )}
              </ol>
            </nav>
          </div>
          <div>
            <h3 className="text-gray-200 capitalize">{activeTab == 'home' ? `Hello ${user?.name}` : ""}</h3>
          </div>
        </div>
        <div className='flex-1 max-w-[80vw] min-h-max bg-[#18181a] m-2 rounded-2xl'>
          {renderContent()}
        </div>
      </div>
      {message && <MessageCard title={message.title} message={message.message} type={message.type} onClose={() => setMessage(null)} />}
    </div>
  );
};

export default Dashboard;