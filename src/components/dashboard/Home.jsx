import React from 'react';
import { Copy } from 'lucide-react';
import ApiContext from '../../context/apiContext';
import { useContext } from 'react';

const Home = () => {
  const { value } = useContext(ApiContext);

  const handleCopy = (text, label) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    // You might want to add a toast notification here
  };

  return (
    <div className="p-6 bg-[#18181a] m-4 rounded-2xl">
      <h1 className="text-2xl font-bold mb-4 text-gray-200">Welcome to your Dashboard</h1>
      <p className="mb-4 text-gray-300">Get started with your API integration journey.</p>
      <div className="flex gap-5 flex-wrap">
        {value?.apis.map((item, index) => (
          <div key={index} className='bg-[#282729] p-4 rounded shadow w-full flex flex-col gap-4'>
            <div className='relative'>
              <label className='text-white' htmlFor="">API ID</label>
              <div className='relative'>
                <input 
                  type="text" 
                  disabled={true} 
                  defaultValue={item?.keyId} 
                  className='relative appearance-none w-full p-2 pr-12 border border-[#7170709a] rounded-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150' 
                  placeholder='API ID' 
                />
                <button 
                  onClick={() => handleCopy(item?.keyId, "API ID")} 
                  className='bg-[#282729] hover:bg-[#282729] text-white px-4 py-2 rounded'
                >
                  <Copy size={20} color="#fff" className='absolute right-3 top-2.5 cursor-pointer' />
                </button>
              </div>
            </div>
            <div>
              <label className='text-white' htmlFor="">API Key</label>
              <div className='relative'>
                <input 
                  type="password" 
                  defaultValue={item?.secretKey} 
                  className='w-full p-2 border rounded text-gray-200 border-[#7170709a]' 
                  placeholder='API Key' 
                />
                <button 
                  onClick={() => handleCopy(item?.secretKey, "API Key")} 
                  className='bg-[#282729] hover:bg-[#282729] text-white px-4 py-2 rounded'
                >
                  <Copy size={20} color="#fff" className='absolute right-3 top-2.5 cursor-pointer' />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; 