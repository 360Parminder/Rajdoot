import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const Account = () => {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-200">Account Settings</h1>
      <p className="mb-4 text-gray-300">Manage your account information and preferences.</p>
      <div className="bg-[#282729] shadow rounded p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-200">Profile Information</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-300">Name</label>
          <input 
            type="text" 
            className="w-full p-2 border rounded text-gray-200 border-[#7170709a] capitalize" 
            defaultValue={user?.name} 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-300">Email</label>
          <input 
            type="email" 
            className="w-full p-2 border rounded text-gray-200 border-[#7170709a]" 
            defaultValue={user.email} 
          />
        </div>

        <button className="bg-[#18181a] hover:bg-[#7170709a] text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Account; 