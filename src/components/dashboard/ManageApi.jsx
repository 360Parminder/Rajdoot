import React, { useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';
import ApiContext from '../../context/apiContext';
import { useContext } from 'react';

const ManageApi = () => {
  const [showApiKey, setShowApiKey] = useState(false);
  const { value } = useContext(ApiContext);
  const deleteAPi = async(id) => {
      await value.deleteApi(id);
  }

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

            {
              // If value is not null and has apis, map through them
              // Otherwise, display a message
              !value?.apis?.length ? (
                <tr>
                  <td colSpan="4" className="text-center py-3 text-gray-400">
                    No API keys found.
                  </td>
                </tr>
              ) : null
            }
            {
              // Map through the APIs and display them in the table
            value?.apis?.map((item, index) => (
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
                  <button
                    onClick={() => deleteAPi(item?.keyId)}
                   className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
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
};

export default ManageApi; 