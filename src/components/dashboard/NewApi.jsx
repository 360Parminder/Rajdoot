import React, { useState } from 'react';
import { Plus, Loader2 } from 'lucide-react';
import useApi from '../../hooks/useApi';
import useMessageCard from '../../hooks/useMessageCard';
import { AnimatePresence, motion } from 'framer-motion';
import MessageCard from '../Card/MessageCard';

const NewApi = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { post, loading } = useApi();
  const { message: messageCard, showMessage, setMessage: setMessageState } = useMessageCard();
  const createApi = async (e) => {
    e.preventDefault();
    try {
      const response = await post("/api-keys/create-api-key", { name, description });
      showMessage("Success", "API Key created successfully", "success");
      setName('');
      setDescription('');
    } catch (error) {
      showMessage("Error", error.message, "error");
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 min-h-full transition-colors rounded-2xl">
      <AnimatePresence>
        {messageCard && (
          <MessageCard
            title={messageCard.title}
            message={messageCard.message}
            type={messageCard.type}
            onClose={() => setMessageState(null)}
          />
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          Create New API
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Set up a new API endpoint for your application. Provide a name and description to get started.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        onSubmit={createApi}
        className="bg-white dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 shadow-lg"
      >
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-2">
              API Name
              <span className="text-red-500 dark:text-red-400 ml-1">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-neutral-100 dark:bg-neutral-700/50 border border-neutral-300 dark:border-neutral-600 rounded-lg py-2.5 px-4 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all"
              placeholder="e.g., User Authentication API"
              required
            />
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              Choose a descriptive name for your API (3-50 characters)
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-neutral-100 dark:bg-neutral-700/50 border border-neutral-300 dark:border-neutral-600 rounded-lg py-2.5 px-4 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all min-h-[120px]"
              placeholder="Describe what this API endpoint does..."
              rows={4}
            />
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
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
              className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-white font-medium transition-all transform-3d ${
                loading || !name.trim()
                  ? 'bg-gradient-to-r from-neutral-900  to-purple-600 cursor-not-allowed text-neutral-500 dark:text-neutral-400'
                  : 'bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 hover:shadow-lg'
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