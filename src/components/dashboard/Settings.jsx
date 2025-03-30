import React from 'react';

const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-200">Settings</h1>
      <p className="mb-4 text-gray-300">Configure your API preferences and notification settings.</p>
      <div className="bg-[#282729] shadow rounded p-4 mb-4">
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
      <div className="bg-[#282729] shadow rounded p-4">
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
};

export default Settings; 