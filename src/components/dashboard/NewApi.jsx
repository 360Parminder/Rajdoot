import React, { useState } from 'react';
import useApi from '../../hooks/useApi';
import useMessageCard from '../../hooks/useMessageCard';

const NewApi = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { post, loading } = useApi();
  const { showMessage } = useMessageCard();

  const createApi = async () => {
    try {
      const response = await post("/api-keys/create-api-key", { name, description });
      console.log(response);
      showMessage("Created", "API Key created successfully", "success");
    } catch (error) {
      showMessage("Error", error.message, "error");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-200">Create New API</h1>
      <p className="mb-4 text-gray-300">Set up a new API endpoint for your application.</p>
      <div className="bg-[#282729] shadow rounded p-4">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-300">API Name</label>
          <input 
            type="text" 
            onChange={(e) => setName(e.target.value)} 
            className="w-full p-2 border rounded text-gray-200 border-[#7170709a]" 
            placeholder="e.g., User Authentication API" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-300">Description</label>
          <textarea 
            onChange={(e) => setDescription(e.target.value)} 
            className="w-full p-2 border rounded h-24 text-gray-200 border-[#7170709a]" 
            placeholder="Describe what this API endpoint does..."
          />
        </div>
        {loading ? (
          <span className="bg-[#18181a] text-white px-4 py-2 rounded">
            Creating...
          </span>
        ) : (
          <button 
            onClick={createApi} 
            className="bg-[#18181a] hover:bg-[#7170709a] text-white px-4 py-2 rounded"
          >
            Create API
          </button>
        )}
      </div>
    </div>
  );
};

export default NewApi; 