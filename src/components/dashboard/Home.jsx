import React, { useContext } from 'react';
import { Copy, Plus, Key, Terminal, Eye, EyeOff } from 'lucide-react';
import ApiContext from '../../context/apiContext';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const { value } = useContext(ApiContext);
  const navigate = useNavigate();
  const [showApiKeys, setShowApiKeys] = useState({});
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, field) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  const toggleShowKey = (id) => {
    setShowApiKeys(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2"
          >
            API Dashboard
          </motion.h1>
          <p className="text-gray-400 max-w-2xl">
            Manage your APIs, view documentation, and monitor usage from your dashboard.
          </p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/dashboard/new-api')}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all"
        >
          <Plus size={18} />
          <span>Create New API</span>
        </motion.button>
      </div>

      {value?.apis?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {value.apis.map((api, index) => (
            <motion.div
              key={api.keyId || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-200 capitalize">{api.name}</h3>
                <span className={`text-sm font-medium ${api.isActive ? 'text-green-400' : 'text-red-400'}`}>
                 {api.isActive?'Active':'Inactive'}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">API ID</label>
                  <div className="relative">
                    <input
                      type="text"
                      readOnly
                      value={api.keyId}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-2 px-3 text-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                    />
                    <button
                      disabled={!api.isActive}
                      onClick={() => handleCopy(api.keyId, `id-${api.keyId}`)}
                      className="absolute right-2 top-2 p-1.5 rounded-md hover:bg-gray-700 transition-colors"
                      aria-label="Copy API ID"
                    >
                      <Copy size={16} className={copied === `id-${api.keyId}` ? 'text-green-400' : 'text-gray-400'} />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">API Key</label>
                  <div className="relative">
                    <input
                      type={showApiKeys[api.keyId] ? "text" : "password"}
                      readOnly
                      value={api.secretKey}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-2 px-3 pe-18 text-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                    />
                    <div className="absolute right-2 top-2 flex gap-1">
                      <button
                        
                        onClick={() => toggleShowKey(api.keyId)}
                        className="p-1.5 rounded-md hover:bg-gray-700 transition-colors"
                        aria-label={showApiKeys[api.keyId] ? "Hide API Key" : "Show API Key"}
                      >
                        {showApiKeys[api.keyId] ? (
                          <EyeOff size={16} className="text-gray-400" />
                        ) : (
                          <Eye size={16} className="text-gray-400" />
                        )}
                      </button>
                      <button
                        disabled={!api.isActive}
                        onClick={() => handleCopy(api.secretKey, `key-${api.keyId}`)}
                        className="p-1.5 rounded-md hover:bg-gray-700 transition-colors"
                        aria-label="Copy API Key"
                      >
                        <Copy size={16} className={copied === `key-${api.keyId}` ? 'text-green-400' : 'text-gray-400'} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button 
                  onClick={() => navigate(`/dashboard/try?api=${api.keyId}`)}
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 px-4 rounded-lg text-sm transition-colors"
                >
                  <Terminal size={16} />
                  <span>Try API</span>
                </button>
                <button 
                  onClick={() => navigate(`/dashboard/manage-api/${api.keyId}`)}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 py-2 px-4 rounded-lg text-sm transition-colors"
                >
                  <Key size={16} />
                  <span>Manage</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gray-900/50 border border-dashed border-gray-700 rounded-xl p-12 text-center mt-8"
        >
          <div className="mx-auto max-w-md">
            <Key size={48} className="mx-auto text-gray-600 mb-4" />
            <h3 className="text-lg font-medium text-gray-300 mb-2">No APIs yet</h3>
            <p className="text-gray-500 mb-6">
              Get started by creating your first API to integrate with your applications.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/dashboard/new-api')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all"
            >
              <Plus size={18} />
              <span>Create New API</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;