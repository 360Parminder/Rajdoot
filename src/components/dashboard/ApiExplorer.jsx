import React from 'react';

const ApiExplorer = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-200">API Explorer</h1>
      <p className="mb-4 text-gray-300">Try out API endpoints and see responses in real-time.</p>
      <div className="bg-[#282729] p-4 rounded mb-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-200">Endpoint Selection</h2>
        <select className="w-full p-2 border rounded text-gray-200 bg-[#18181a] border-[#7170709a]">
          <option>GET /users</option>
          <option>POST /users</option>
          <option>GET /products</option>
          <option>POST /orders</option>
        </select>
      </div>
      <button className="bg-[#18181a] hover:bg-[#7170709a] text-white px-4 py-2 rounded">
        Send Request
      </button>
    </div>
  );
};

export default ApiExplorer; 