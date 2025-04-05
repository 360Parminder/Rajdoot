import React, { useState, useContext } from 'react';
import { Eye, EyeOff, Trash2, RefreshCw, Key, Copy, Loader2 } from 'lucide-react';
import ApiContext from '../../context/apiContext';
import { motion } from 'framer-motion';
import useMessageCard from '../../hooks/useMessageCard';

const ManageApi = () => {
  const [showApiKey, setShowApiKey] = useState({});
  const [deletingId, setDeletingId] = useState(null);
  const [copied, setCopied] = useState(null);
  const { value } = useContext(ApiContext);
  const { showMessage } = useMessageCard();

  const toggleShowKey = (id) => {
    setShowApiKey(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const deleteApi = async (id) => {
    try {
      setDeletingId(id);
      await value.deleteApi(id);
      showMessage("Success", "API deleted successfully", "success");
    } catch (error) {
      showMessage("Error", error.message, "error");
    } finally {
      setDeletingId(null);
    }
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
    showMessage("Copied", `${field} copied to clipboard`, "success");
  };

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
          Manage API Keys
        </h1>
        <p className="text-gray-400 max-w-2xl">
          View, manage, and control access to your API endpoints and keys.
        </p>
      </motion.div>

      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800/50 border-b border-gray-800">
              <tr>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-300">API Name</th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-300">API ID</th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-300">API Key</th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-300">Expires</th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {!value?.apis?.length ? (
                <tr>
                  <td colSpan="5" className="py-8 text-center">
                    <div className="flex flex-col items-center justify-center text-gray-500">
                      <Key size={48} className="mb-4 text-gray-600" />
                      <p className="text-lg">No API keys found</p>
                      <p className="text-sm mt-1">Create your first API key to get started</p>
                    </div>
                  </td>
                </tr>
              ) : (
                value.apis.map((api, index) => (
                  <motion.tr
                    key={api.keyId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors"
                  >
                    <td className="py-4 px-6 text-gray-300 capitalize">{api.name || 'Unnamed API'}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300 font-mono text-sm">{api.keyId}</span>
                        <button
                          onClick={() => copyToClipboard(api.keyId, `id-${api.keyId}`)}
                          className="p-1.5 rounded hover:bg-gray-700 transition-colors"
                          aria-label="Copy API ID"
                        >
                          <Copy size={16} className={copied === `id-${api.keyId}` ? 'text-green-400' : 'text-gray-400'} />
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <input
                          type={showApiKey[api.keyId] ? "text" : "password"}
                          value={api.secretKey}
                          readOnly
                          className="bg-gray-800/50 border border-gray-700 rounded-md py-1.5 px-3 text-gray-300 text-sm font-mono w-64"
                        />
                        <div className="flex gap-1">
                          <button
                            onClick={() => toggleShowKey(api.keyId)}
                            className="p-1.5 rounded hover:bg-gray-700 transition-colors"
                            aria-label={showApiKey[api.keyId] ? "Hide API Key" : "Show API Key"}
                          >
                            {showApiKey[api.keyId] ? (
                              <EyeOff size={16} className="text-gray-400" />
                            ) : (
                              <Eye size={16} className="text-gray-400" />
                            )}
                          </button>
                          <button
                            onClick={() => copyToClipboard(api.secretKey, `key-${api.keyId}`)}
                            className="p-1.5 rounded hover:bg-gray-700 transition-colors"
                            aria-label="Copy API Key"
                          >
                            <Copy size={16} className={copied === `key-${api.keyId}` ? 'text-green-400' : 'text-gray-400'} />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-400">
                      {api.expiresOn || "Never"}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg transition-colors"
                          onClick={() => {/* Add update functionality */}}
                        >
                          <RefreshCw size={16} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors"
                          onClick={() => deleteApi(api.keyId)}
                          disabled={deletingId === api.keyId}
                        >
                          {deletingId === api.keyId ? (
                            <Loader2 size={16} className="animate-spin" />
                          ) : (
                            <Trash2 size={16} />
                          )}
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageApi;