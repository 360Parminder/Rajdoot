import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Render code block with syntax highlighting
export const CodeBlock = ({ code }) => (
  <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
    <code className="text-sm text-gray-300">{code}</code>
  </div>
);

// Getting Started Section
export const GettingStartedSection = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeInUp}
  >
    <h2 className="text-2xl font-bold text-white mb-6">Getting Started with Rajdoot</h2>
    <div className="prose prose-invert max-w-none">
      <p className="text-gray-300 mb-4">
        Welcome to Rajdoot! This guide will help you get started with our messaging API platform.
        Follow these steps to integrate Rajdoot into your application.
      </p>
      
      <h3 className="text-xl font-semibold text-white mt-8 mb-4">Prerequisites</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-6">
        <li>A Rajdoot account (sign up for free)</li>
        <li>Your API key (available in your dashboard)</li>
        <li>Basic knowledge of REST APIs</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-white mt-8 mb-4">Installation</h3>
      <p className="text-gray-300 mb-4">
        Install the Rajdoot SDK using npm or yarn:
      </p>
      <CodeBlock code="npm install @rajdoot/sdk" />
      
      <h3 className="text-xl font-semibold text-white mt-8 mb-4">Authentication</h3>
      <p className="text-gray-300 mb-4">
        Initialize the SDK with your API key:
      </p>
      <CodeBlock code="const raj = new Rajdoot({ apiKey: 'your_api_key' })" />
      
      <h3 className="text-xl font-semibold text-white mt-8 mb-4">Send Your First Message</h3>
      <p className="text-gray-300 mb-4">
        Use the API to send a message:
      </p>
      <CodeBlock code={`await raj.messages.send({
  to: '+1234567890',
  text: 'Hello from Rajdoot!'
})`} />
      
      <p className="text-gray-300 mb-4">
        That's it! You've successfully sent your first message using Rajdoot.
      </p>
    </div>
  </motion.div>
);

// Authentication Section
export const AuthenticationSection = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeInUp}
  >
    <h2 className="text-2xl font-bold text-white mb-6">Authentication</h2>
    <div className="prose prose-invert max-w-none">
      <p className="text-gray-300 mb-4">
        All API requests to Rajdoot must be authenticated using an API key.
        This section explains how to obtain and use your API keys.
      </p>
      
      <h3 className="text-xl font-semibold text-white mt-8 mb-4">API Keys</h3>
      <p className="text-gray-300 mb-4">
        API keys are used to authenticate your requests to the Rajdoot API.
        You can create, view, and revoke API keys in your dashboard.
      </p>
      
      <h3 className="text-xl font-semibold text-white mt-8 mb-4">Using Your API Key</h3>
      <p className="text-gray-300 mb-4">
        Include your API key in the Authorization header of your requests:
      </p>
      <CodeBlock code="Authorization: Bearer your_api_key" />
      
      <h3 className="text-xl font-semibold text-white mt-8 mb-4">Security Best Practices</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-6">
        <li>Keep your API keys secure and never share them publicly</li>
        <li>Use environment variables to store your API keys</li>
        <li>Rotate your API keys regularly</li>
        <li>Use different API keys for development and production</li>
      </ul>
    </div>
  </motion.div>
);

// Default Section for other documentation pages
export const DefaultSection = ({ title }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeInUp}
  >
    <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
    <div className="prose prose-invert max-w-none">
      <p className="text-gray-300 mb-4">
        This section is under construction. Please check back later for detailed documentation.
      </p>
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 mt-6">
        <h3 className="text-lg font-semibold text-white mb-4">Need Help?</h3>
        <p className="text-gray-300 mb-4">
          If you need immediate assistance, please contact our support team.
        </p>
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-shadow inline-flex items-center"
          >
            Contact Support
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.button>
        </Link>
      </div>
    </div>
  </motion.div>
); 