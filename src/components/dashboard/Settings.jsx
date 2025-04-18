import React, { useState } from 'react';
import { Shield, Bell, Mail, Smartphone, Save, Sliders } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import useMessageCard from '../../hooks/useMessageCard';
import MessageCard from '../Card/MessageCard';

const Settings = () => {
  const { message: messageCard, showMessage, setMessage: setMessageState } = useMessageCard();
  const [settings, setSettings] = useState({
    api: {
      rateLimiting: true,
      errorLogging: true,
      requestValidation: false,
      ipFiltering: false
    },
    notifications: {
      email: true,
      sms: false,
      slack: false,
      criticalAlerts: true
    }
  });

  const handleSettingChange = (category, setting) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: !prev[category][setting]
      }
    }));
  };

  const saveSettings = () => {
    showMessage("Success", "Settings saved successfully", "success");
    // Add your save logic here
    console.log('Settings saved:', settings);
  };

  return (
    <div className="p-6">
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
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
          Settings
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Configure your API preferences, notification settings, and security options.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* API Settings */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-blue-400" />
            <h2 className="text-xl font-semibold text-gray-200">API Configuration</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700">
              <div>
                <h3 className="font-medium text-gray-200">Rate Limiting</h3>
                <p className="text-sm text-gray-400">Prevent API abuse by limiting requests</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.api.rateLimiting}
                  onChange={() => handleSettingChange('api', 'rateLimiting')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700">
              <div>
                <h3 className="font-medium text-gray-200">Error Logging</h3>
                <p className="text-sm text-gray-400">Log API errors for debugging</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.api.errorLogging}
                  onChange={() => handleSettingChange('api', 'errorLogging')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700">
              <div>
                <h3 className="font-medium text-gray-200">Request Validation</h3>
                <p className="text-sm text-gray-400">Validate all incoming API requests</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.api.requestValidation}
                  onChange={() => handleSettingChange('api', 'requestValidation')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700">
              <div>
                <h3 className="font-medium text-gray-200">IP Filtering</h3>
                <p className="text-sm text-gray-400">Restrict API access to specific IPs</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.api.ipFiltering}
                  onChange={() => handleSettingChange('api', 'ipFiltering')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </motion.div>

        {/* Notification Settings */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-semibold text-gray-200">Notification Preferences</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700">
              <div>
                <h3 className="font-medium text-gray-200 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Notifications
                </h3>
                <p className="text-sm text-gray-400 ml-6">Receive important updates via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.email}
                  onChange={() => handleSettingChange('notifications', 'email')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700">
              <div>
                <h3 className="font-medium text-gray-200 flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  SMS Notifications
                </h3>
                <p className="text-sm text-gray-400 ml-6">Get alerts via text message</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.sms}
                  onChange={() => handleSettingChange('notifications', 'sms')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700">
              <div>
                <h3 className="font-medium text-gray-200">Slack Notifications</h3>
                <p className="text-sm text-gray-400">Send alerts to your Slack workspace</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.slack}
                  onChange={() => handleSettingChange('notifications', 'slack')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700">
              <div>
                <h3 className="font-medium text-gray-200">Critical Alerts</h3>
                <p className="text-sm text-gray-400">Notify me about urgent issues</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.criticalAlerts}
                  onChange={() => handleSettingChange('notifications', 'criticalAlerts')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 flex justify-end"
      >
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={saveSettings}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all"
        >
          <Save className="w-5 h-5" />
          <span>Save Settings</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Settings;