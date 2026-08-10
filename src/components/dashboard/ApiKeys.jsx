import React, { useContext, useState } from 'react';
import { Copy01Icon, PlusSignIcon, Key01Icon, ComputerTerminal01Icon, ViewIcon, ViewOffIcon, Search01Icon } from 'hugeicons-react';
import ApiContext from '../../context/apiContext';
import { motion, AnimatePresence } from 'framer-motion';
import useMessageCard from '../../hooks/useMessageCard';
import MessageCard from '../Card/MessageCard';
import { cn } from "../../lib/utils";

const ApiKeys = ({ handleTabClick }) => {
  const { value } = useContext(ApiContext);
  const [showApiKeys, setShowApiKeys] = useState({});
  const [copied, setCopied] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { message: messageCard, showMessage } = useMessageCard();

  const handleCopy = (text, field) => {
    if (!text) return;
    showMessage("Success", "API Key copied to clipboard", "success");
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

  const filteredApis = value?.apis?.filter(api =>
    api.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    api.keyId?.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div className={cn('p-6', 'bg-slate-50', 'dark:bg-neutral-900', 'text-neutral-900', 'dark:text-neutral-100', 'min-h-full', 'transition-colors', 'rounded-2xl', 'h-full')}>
      <AnimatePresence>
        {messageCard && (
          <MessageCard
            type={messageCard.type}
            title={messageCard.title}
            message={messageCard.message}
          />
        )}
      </AnimatePresence>

      <div className={cn('flex', 'flex-col', 'md:flex-row', 'justify-between', 'items-start', 'md:items-center', 'mb-8', 'gap-4')}>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn('text-3xl', 'font-bold', 'text-neutral-900', 'dark:text-neutral-100', 'mb-2', 'flex', 'items-center', 'gap-2')}
          >
            <Key01Icon className="w-8 h-8 text-orange-500" />
            API Keys
          </motion.h1>
          <p className={cn('text-neutral-600', 'dark:text-neutral-400', 'max-w-2xl')}>
            Manage, copy, and configure your active API credentials and integration keys.
          </p>
        </div>

        <div className={cn('flex', 'flex-wrap', 'items-center', 'gap-3')}>
          <div className="relative">
            <Search01Icon size={16} className="absolute left-3 top-3.5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search API keys..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-slate-200/80 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg pl-9 pr-4 py-2.5 text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            />
          </div>

          <motion.button
            onClick={() => handleTabClick && handleTabClick('new-api')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={cn('flex', 'items-center', 'gap-2', 'bg-gradient-to-r', 'from-orange-500', 'to-amber-500', 'hover:from-orange-600', 'hover:to-amber-600', 'text-white', 'px-4', 'py-2.5', 'shadow-lg', 'shadow-orange-500/20', 'rounded-lg', 'hover:shadow-orange-500/30', 'transition-all', 'font-medium')}
          >
            <PlusSignIcon size={18} />
            <span>Create New API</span>
          </motion.button>
        </div>
      </div>

      {filteredApis.length > 0 ? (
        <div className={cn('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-6')}>
          {filteredApis.map((api, index) => (
            <motion.div
              key={api.keyId || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className={cn('bg-slate-100/70', 'dark:bg-neutral-800/50', 'backdrop-blur-sm', 'border', 'border-neutral-300', 'dark:border-neutral-700', 'rounded-xl', 'p-6', 'hover:border-orange-500/40', 'transition-all', 'shadow-sm')}
            >
              <div className={cn('flex', 'justify-between', 'items-start', 'mb-4')}>
                <h3 className={cn('text-xl', 'font-semibold', 'text-neutral-900', 'dark:text-neutral-100', 'capitalize')}>{api.name}</h3>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${api.isActive ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' : 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20'}`}>
                  {api.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className={cn('block', 'text-xs', 'font-medium', 'text-neutral-600', 'dark:text-neutral-400', 'mb-1')}>API ID</label>
                  <div className="relative">
                    <input
                      type="text"
                      readOnly
                      value={api.keyId}
                      className={cn('w-full', 'bg-neutral-200/60', 'dark:bg-neutral-700/50', 'border', 'border-neutral-300', 'dark:border-neutral-600', 'rounded-lg', 'py-2', 'px-3', 'text-neutral-900', 'dark:text-neutral-100', 'text-sm', 'font-mono', 'focus:outline-none')}
                    />
                    <button
                      disabled={!api.isActive}
                      onClick={() => handleCopy(api.keyId, `id-${api.keyId}`)}
                      className={cn('absolute', 'right-2', 'top-2', 'p-1.5', 'rounded-md', 'hover:bg-neutral-300', 'dark:hover:bg-neutral-600', 'transition-colors')}
                      aria-label="Copy API ID"
                    >
                      <Copy01Icon size={16} className={copied === `id-${api.keyId}` ? 'text-emerald-600 dark:text-emerald-400' : 'text-neutral-500 dark:text-neutral-400'} />
                    </button>
                  </div>
                </div>

                <div>
                  <label className={cn('block', 'text-xs', 'font-medium', 'text-neutral-600', 'dark:text-neutral-400', 'mb-1')}>API Key</label>
                  <div className="relative">
                    <input
                      type={showApiKeys[api.keyId] ? "text" : "password"}
                      readOnly
                      value={api.secretKey}
                      className={cn('w-full', 'bg-neutral-200/60', 'dark:bg-neutral-700/50', 'border', 'border-neutral-300', 'dark:border-neutral-600', 'rounded-lg', 'py-2', 'px-3', 'pe-18', 'text-neutral-900', 'dark:text-neutral-100', 'text-sm', 'font-mono', 'focus:outline-none')}
                    />
                    <div className={cn('absolute', 'right-2', 'top-2', 'flex', 'gap-1')}>
                      <button
                        onClick={() => toggleShowKey(api.keyId)}
                        className={cn('p-1.5', 'rounded-md', 'hover:bg-neutral-300', 'dark:hover:bg-neutral-600', 'transition-colors')}
                        aria-label={showApiKeys[api.keyId] ? "Hide API Key" : "Show API Key"}
                      >
                        {showApiKeys[api.keyId] ? (
                          <ViewOffIcon size={16} className={cn('text-neutral-500', 'dark:text-neutral-400')} />
                        ) : (
                          <ViewIcon size={16} className={cn('text-neutral-500', 'dark:text-neutral-400')} />
                        )}
                      </button>
                      <button
                        disabled={!api.isActive}
                        onClick={() => handleCopy(api.secretKey, `key-${api.keyId}`)}
                        className={cn('p-1.5', 'rounded-md', 'hover:bg-neutral-300', 'dark:hover:bg-neutral-600', 'transition-colors')}
                        aria-label="Copy API Key"
                      >
                        <Copy01Icon size={16} className={copied === `key-${api.keyId}` ? 'text-emerald-600 dark:text-emerald-400' : 'text-neutral-500 dark:text-neutral-400'} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className={cn('mt-6', 'flex', 'gap-3')}>
                <button
                  onClick={() => handleTabClick && handleTabClick('message')}
                  className={cn('flex-1', 'flex', 'items-center', 'justify-center', 'gap-2', 'bg-neutral-200/80', 'dark:bg-neutral-700', 'hover:bg-neutral-300', 'dark:hover:bg-neutral-600', 'text-neutral-700', 'dark:text-neutral-300', 'py-2', 'px-4', 'rounded-lg', 'text-sm', 'transition-colors')}
                >
                  <ComputerTerminal01Icon size={16} />
                  <span>Try API</span>
                </button>
                <button
                  onClick={() => handleTabClick && handleTabClick('manage-api')}
                  className={cn('flex-1', 'flex', 'items-center', 'justify-center', 'gap-2', 'bg-orange-100', 'dark:bg-orange-950/40', 'hover:bg-orange-200', 'dark:hover:bg-orange-900/40', 'text-orange-600', 'dark:text-orange-400', 'border', 'border-orange-200', 'dark:border-orange-800/40', 'py-2', 'px-4', 'rounded-lg', 'text-sm', 'transition-colors', 'font-medium')}
                >
                  <Key01Icon size={16} />
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
          className={cn('bg-slate-100/70', 'dark:bg-neutral-800/50', 'border', 'border-dashed', 'border-neutral-300', 'dark:border-neutral-700', 'rounded-xl', 'p-12', 'text-center', 'mt-8')}
        >
          <div className={cn('mx-auto', 'max-w-md')}>
            <Key01Icon size={48} className={cn('mx-auto', 'text-neutral-400', 'dark:text-neutral-500', 'mb-4')} />
            <h3 className={cn('text-lg', 'font-medium', 'text-neutral-900', 'dark:text-neutral-100', 'mb-2')}>No APIs yet</h3>
            <p className={cn('text-neutral-600', 'dark:text-neutral-500', 'mb-6')}>
              Get started by creating your first API to integrate with your applications.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleTabClick && handleTabClick('new-api')}
              className={cn('inline-flex', 'items-center', 'gap-2', 'bg-gradient-to-r', 'from-orange-500', 'to-amber-500', 'hover:from-orange-600', 'hover:to-amber-600', 'text-white', 'px-6', 'py-3', 'rounded-lg', 'shadow-md', 'shadow-orange-500/20', 'transition-all', 'font-medium')}
            >
              <PlusSignIcon size={18} />
              <span>Create New API</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ApiKeys;
