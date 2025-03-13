import React, { useState } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);

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
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-200">Welcome to your Dashboard</h1>
            <p className="mb-4 text-gray-300">Get started with your API integration journey.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <DashboardCard 
                title="API Calls" 
                value="1,234" 
                change="+12.3%" 
              />
              <DashboardCard 
                title="Response Time" 
                value="42ms" 
                change="-5.7%" 
              />
              <DashboardCard 
                title="Error Rate" 
                value="0.8%" 
                change="+0.2%" 
              />
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
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-200">API Documentation</h1>
            <p className="mb-4 text-gray-300">Learn how to use our API effectively.</p>
            <div className="bg-gray-800 p-4 rounded">
              <h2 className="text-lg font-semibold mb-2 text-gray-200">Getting Started</h2>
              <p className="text-gray-300">Follow these steps to integrate our API into your application...</p>
            </div>
          </div>
        );
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
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-gray-800 text-white transition-all duration-300 ease-in-out flex flex-col`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {sidebarOpen && <h1 className="text-xl font-bold">API Dashboard</h1>}
          <button onClick={toggleSidebar} className="p-1 rounded hover:bg-gray-700">
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>
        <nav className="flex-grow">
          <ul>
            {[
              { id: 'new-api', label: 'Create New API', icon: '➕' },
              { id: 'home', label: 'Home', icon: '🏠' },
              { id: 'documentation', label: 'Documentation', icon: '📚' },
              { id: 'api', label: 'API Explorer', icon: '🔍' },
              { id: 'try', label: 'Try API', icon: '🧪' },
              { id: 'account', label: 'Account', icon: '👤' },
              { id: 'settings', label: 'Settings', icon: '⚙️' }
            ].map(item => (
              <li key={item.id}>
                <button
                  onClick={() => handleTabClick(item.id)}
                  className={`flex items-center w-full p-3 ${activeTab === item.id ? 'bg-gray-700' : 'hover:bg-gray-700'} transition-colors duration-200`}
                >
                  <span className="text-lg mr-3">{item.icon}</span>
                  {sidebarOpen && <span>{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">
          {sidebarOpen ? (
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center mr-2">
                J
              </div>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-xs text-gray-400">Admin</p>
              </div>
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center mx-auto">
              J
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow overflow-auto">
        {/* Top bar with username and balance */}
        <div className="bg-gray-800 p-4 shadow flex justify-between items-center">
          <div>
            <h2 className="text-lg font-medium text-gray-200">John Doe</h2>
            <p className="text-sm text-gray-400">Developer</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">Account Balance</p>
            <p className="text-lg font-bold text-gray-200">$1,250.00</p>
          </div>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;