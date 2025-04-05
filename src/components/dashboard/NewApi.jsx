import React, { useState } from 'react';
import { Plus, Loader2 } from 'lucide-react';
import useApi from '../../hooks/useApi';
import useMessageCard from '../../hooks/useMessageCard';
import { motion } from 'framer-motion';

const NewApi = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { post, loading } = useApi();
  const { showMessage } = useMessageCard();

  const createApi = async (e) => {
    e.preventDefault();
    try {
      const response = await post("/api-keys/create-api-key", { name, description });
      console.log(response);
      showMessage("Success", "API Key created successfully", "success");
      setName('');
      setDescription('');
    } catch (error) {
      showMessage("Error", error.message, "error");
    }
  };

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
          Create New API
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Set up a new API endpoint for your application. Provide a name and description to get started.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        onSubmit={createApi}
        className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 shadow-lg"
      >
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              API Name
              <span className="text-red-400 ml-1">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-2.5 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all"
              placeholder="e.g., User Authentication API"
              required
            />
            <p className="mt-1 text-xs text-gray-500">
              Choose a descriptive name for your API (3-50 characters)
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-2.5 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all min-h-[120px]"
              placeholder="Describe what this API endpoint does..."
              rows={4}
            />
            <p className="mt-1 text-xs text-gray-500">
              Optional but recommended for better documentation
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="pt-2"
          >
            <button
              type="submit"
              disabled={loading || !name.trim()}
              className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-white font-medium transition-all ${
                loading || !name.trim()
                  ? 'bg-gray-700 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Creating API...</span>
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5" />
                  <span>Create API</span>
                </>
              )}
            </button>
          </motion.div>
        </div>
      </motion.form>
    </div>
  );
};

export default NewApi;