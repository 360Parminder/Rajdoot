import React, { useState, useEffect } from 'react';
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

// API Helper Function
const sendRajdootMessage = async (content, recipient) => {
  try {
    // These would typically come from your environment variables or auth context
    const apiId = 'YOUR_API_ID_FROM_DASHBOARD';
    const apiKey = 'YOUR_API_KEY_FROM_DASHBOARD';
    
    const response = await fetch('https://api.rajdoot.wtf/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-id': apiId,
        'x-api-key': apiKey
      },
      body: JSON.stringify({
        content,
        recipient
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

// Getting Started Section
export const GettingStartedSection = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSendMessage = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await sendRajdootMessage(
        'Hello from Rajdoot!',
        '+1234567890'
      );
      setApiResponse(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
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
          <li>Your API key and API ID (available in your dashboard)</li>
          <li>Basic knowledge of REST APIs</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-white mt-8 mb-4">Authentication</h3>
        <p className="text-gray-300 mb-4">
          Include your API credentials in the request headers:
        </p>
        <CodeBlock code={`headers: {
  'x-api-id': 'your_api_id_from_dashboard',
  'x-api-key': 'your_api_key_from_dashboard'
}`} />
        
        <h3 className="text-xl font-semibold text-white mt-8 mb-4">Send Your First Message</h3>
        <p className="text-gray-300 mb-4">
          Use the API to send a message:
        </p>
        <CodeBlock code={`POST https://api.rajdoot.wtf/message

Headers:
- x-api-id: your_api_id
- x-api-key: your_api_key

Body:
{
  "content": "Hello from Rajdoot!",
  "recipient": "+1234567890"
}`} />

        <div className="mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-shadow inline-flex items-center"
          >
             Try It Out
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.button>
        </div>

      </div>
    </motion.div>
  );
};

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
        All API requests to Rajdoot must be authenticated using API credentials.
        This section explains how to obtain and use your API keys.
      </p>
      
      <h3 className="text-xl font-semibold text-white mt-8 mb-4">API Credentials</h3>
      <p className="text-gray-300 mb-4">
        You need both API ID and API Key to authenticate your requests to the Rajdoot API.
        You can find these credentials in your dashboard.
      </p>
      
      <h3 className="text-xl font-semibold text-white mt-8 mb-4">Using Your Credentials</h3>
      <p className="text-gray-300 mb-4">
        Include your credentials in the request headers:
      </p>
      <CodeBlock code={`headers: {
  'x-api-id': 'your_api_id_from_dashboard',
  'x-api-key': 'your_api_key_from_dashboard'
}`} />
      
      <h3 className="text-xl font-semibold text-white mt-8 mb-4">Security Best Practices</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-6">
        <li>Keep your API credentials secure and never commit them to version control</li>
        <li>Use environment variables to store your credentials</li>
        <li>Rotate your API keys regularly</li>
        <li>Use different credentials for development and production environments</li>
        <li>Restrict API keys to specific IP addresses if possible</li>
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