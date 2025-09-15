import React, { useContext } from 'react';
import { Copy, Plus, Key, Terminal, Eye, EyeOff } from 'lucide-react';
import ApiContext from '../../context/apiContext';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useMessageCard from '../../hooks/useMessageCard';

const Home = ({ toggleSidebar, activeTab, handleTabClick, sidebarOpen }) => {
  const { value } = useContext(ApiContext);
  const [showApiKeys, setShowApiKeys] = useState({});
  const [copied, setCopied] = useState(null);
  const { showMessage } = useMessageCard();

  const handleCopy = (text, field) => {
    if (!text) return;
    showMessage("Success", "API Key created successfully", "success");
    
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
    <div className="p-6 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 min-h-full transition-colors rounded-2xl h-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-neutral-200 mb-2"
          >
            API Dashboard
          </motion.h1>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Manage your APIs, view documentation, and monitor usage from your dashboard.
          </p>
        </div>
        
        <motion.button
          onClick={() => handleTabClick('new-api')}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 bg-gradient-to-tl from-neutral-600 to-neutral-800 text-white px-4 py-3 shadow-2xl rounded-lg hover:shadow-lg transition-all"
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
              className="bg-neutral-200 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-400 dark:border-neutral-700 rounded-xl p-6 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all shadow-sm dark:shadow-none"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 capitalize">{api.name}</h3>
                <span className={`text-sm font-medium ${api.isActive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                 {api.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-neutral-600 dark:text-neutral-400 mb-1">API ID</label>
                  <div className="relative">
                    <input
                      type="text"
                      readOnly
                      value={api.keyId}
                      className="w-full bg-neutral-100 dark:bg-neutral-700/50 border border-neutral-300 dark:border-neutral-600 rounded-lg py-2 px-3 text-neutral-900 dark:text-neutral-100 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                    />
                    <button
                      disabled={!api.isActive}
                      onClick={() => handleCopy(api.keyId, `id-${api.keyId}`)}
                      className="absolute right-2 top-2 p-1.5 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                      aria-label="Copy API ID"
                    >
                      <Copy size={16} className={copied === `id-${api.keyId}` ? 'text-green-600 dark:text-green-400' : 'text-neutral-500 dark:text-neutral-400'} />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-neutral-600 dark:text-neutral-400 mb-1">API Key</label>
                  <div className="relative">
                    <input
                      type={showApiKeys[api.keyId] ? "text" : "password"}
                      readOnly
                      value={api.secretKey}
                      className="w-full bg-neutral-100 dark:bg-neutral-700/50 border border-neutral-300 dark:border-neutral-600 rounded-lg py-2 px-3 pe-18 text-neutral-900 dark:text-neutral-100 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                    />
                    <div className="absolute right-2 top-2 flex gap-1">
                      <button
                        onClick={() => toggleShowKey(api.keyId)}
                        className="p-1.5 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                        aria-label={showApiKeys[api.keyId] ? "Hide API Key" : "Show API Key"}
                      >
                        {showApiKeys[api.keyId] ? (
                          <EyeOff size={16} className="text-neutral-500 dark:text-neutral-400" />
                        ) : (
                          <Eye size={16} className="text-neutral-500 dark:text-neutral-400" />
                        )}
                      </button>
                      <button
                        disabled={!api.isActive}
                        onClick={() => handleCopy(api.secretKey, `key-${api.keyId}`)}
                        className="p-1.5 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                        aria-label="Copy API Key"
                      >
                        <Copy size={16} className={copied === `key-${api.keyId}` ? 'text-green-600 dark:text-green-400' : 'text-neutral-500 dark:text-neutral-400'} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button 
                  onClick={() => handleTabClick('message')}
                  className="flex-1 flex items-center justify-center gap-2 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-neutral-700 dark:text-neutral-300 py-2 px-4 rounded-lg text-sm transition-colors"
                >
                  <Terminal size={16} />
                  <span>Try API</span>
                </button>
                <button 
                  onClick={() => handleTabClick('manage-api')}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400 py-2 px-4 rounded-lg text-sm transition-colors"
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
          className="bg-neutral-100 dark:bg-neutral-800/50 border border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl p-12 text-center mt-8"
        >
          <div className="mx-auto max-w-md">
            <Key size={48} className="mx-auto text-neutral-400 dark:text-neutral-500 mb-4" />
            <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-2">No APIs yet</h3>
            <p className="text-neutral-600 dark:text-neutral-500 mb-6">
              Get started by creating your first API to integrate with your applications.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleTabClick('new-api')}
              className="inline-flex items-center gap-2 bg-neutral-950 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all"
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