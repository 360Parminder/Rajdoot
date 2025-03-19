import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Documentation = () => {
  const [activeTab, setActiveTab] = useState('getting-started');
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        duration: 0.5 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };
  
  const tabVariants = {
    inactive: { borderBottom: '2px solid transparent' },
    active: { 
      borderBottom: '2px solid #6366F1',
      transition: { duration: 0.3 }
    }
  };
  
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar */}
          <motion.aside 
            className="lg:col-span-3"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <nav className="space-y-1">
              <motion.div variants={itemVariants}>
                <h2 className="text-lg font-semibold mb-4">Documentation</h2>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="mb-6"
              >
                <h3 className="text-sm font-medium text-gray-400 mb-2">Getting Started</h3>
                <ul className="space-y-2">
                  <li>
                    <motion.button
                      variants={tabVariants}
                      animate={activeTab === 'getting-started' ? 'active' : 'inactive'}
                      onClick={() => setActiveTab('getting-started')}
                      className={`block w-full text-left px-2 py-1 text-sm rounded-md ${activeTab === 'getting-started' ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}`}
                    >
                      Introduction
                    </motion.button>
                  </li>
                  <li>
                    <motion.button
                      variants={tabVariants}
                      animate={activeTab === 'installation' ? 'active' : 'inactive'}
                      onClick={() => setActiveTab('installation')}
                      className={`block w-full text-left px-2 py-1 text-sm rounded-md ${activeTab === 'installation' ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}`}
                    >
                      Installation
                    </motion.button>
                  </li>
                  <li>
                    <motion.button
                      variants={tabVariants}
                      animate={activeTab === 'authentication' ? 'active' : 'inactive'}
                      onClick={() => setActiveTab('authentication')}
                      className={`block w-full text-left px-2 py-1 text-sm rounded-md ${activeTab === 'authentication' ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}`}
                    >
                      Authentication
                    </motion.button>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="mb-6"
              >
                <h3 className="text-sm font-medium text-gray-400 mb-2">Core Features</h3>
                <ul className="space-y-2">
                  <li>
                    <motion.button
                      variants={tabVariants}
                      animate={activeTab === 'sms-api' ? 'active' : 'inactive'}
                      onClick={() => setActiveTab('sms-api')}
                      className={`block w-full text-left px-2 py-1 text-sm rounded-md ${activeTab === 'sms-api' ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}`}
                    >
                      SMS API
                    </motion.button>
                  </li>
                  <li>
                    <motion.button
                      variants={tabVariants}
                      animate={activeTab === 'otp-services' ? 'active' : 'inactive'}
                      onClick={() => setActiveTab('otp-services')}
                      className={`block w-full text-left px-2 py-1 text-sm rounded-md ${activeTab === 'otp-services' ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}`}
                    >
                      OTP Services
                    </motion.button>
                  </li>
                  <li>
                    <motion.button
                      variants={tabVariants}
                      animate={activeTab === 'webhooks' ? 'active' : 'inactive'}
                      onClick={() => setActiveTab('webhooks')}
                      className={`block w-full text-left px-2 py-1 text-sm rounded-md ${activeTab === 'webhooks' ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}`}
                    >
                      Webhooks
                    </motion.button>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="mb-6"
              >
                <h3 className="text-sm font-medium text-gray-400 mb-2">Advanced</h3>
                <ul className="space-y-2">
                  <li>
                    <motion.button
                      variants={tabVariants}
                      animate={activeTab === 'rate-limiting' ? 'active' : 'inactive'}
                      onClick={() => setActiveTab('rate-limiting')}
                      className={`block w-full text-left px-2 py-1 text-sm rounded-md ${activeTab === 'rate-limiting' ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}`}
                    >
                      Rate Limiting
                    </motion.button>
                  </li>
                  <li>
                    <motion.button
                      variants={tabVariants}
                      animate={activeTab === 'error-handling' ? 'active' : 'inactive'}
                      onClick={() => setActiveTab('error-handling')}
                      className={`block w-full text-left px-2 py-1 text-sm rounded-md ${activeTab === 'error-handling' ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}`}
                    >
                      Error Handling
                    </motion.button>
                  </li>
                </ul>
              </motion.div>
            </nav>
          </motion.aside>
          
          {/* Main content */}
          <motion.div 
            className="mt-12 lg:mt-0 lg:col-span-9"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'getting-started' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-3xl font-bold mb-6">Introduction to Rajdoot</h1>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Rajdoot is a powerful messaging and OTP validation service that helps you connect with your users securely and efficiently.
                  </p>
                  
                  <h2 className="text-2xl font-semibold mt-8 mb-4">What is Rajdoot?</h2>
                  <p className="text-gray-300">
                    Rajdoot provides a set of APIs and services to seamlessly integrate SMS messaging and OTP (One-Time Password) validation into your applications. With our reliable infrastructure, you can focus on building your product while we handle the complexities of message delivery and authentication.
                  </p>
                  
                  <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong className="text-white">Reliable SMS Delivery:</strong> Global reach with high deliverability rates</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong className="text-white">Secure OTP Generation:</strong> Cryptographically strong OTPs with configurable expiry times</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong className="text-white">Easy Integration:</strong> SDKs for all major platforms and RESTful APIs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong className="text-white">Comprehensive Analytics:</strong> Real-time insights into message delivery and OTP usage</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong className="text-white">Webhook Notifications:</strong> Real-time event updates to your systems</span>
                    </li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold mt-8 mb-4">Use Cases</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="bg-gray-800 p-5 rounded-lg">
                      <h3 className="text-xl font-medium mb-2">User Authentication</h3>
                      <p className="text-gray-300">Secure your application with SMS-based two-factor authentication.</p>
                    </div>
                    <div className="bg-gray-800 p-5 rounded-lg">
                      <h3 className="text-xl font-medium mb-2">Account Verification</h3>
                      <p className="text-gray-300">Verify user phone numbers during signup to reduce fraud.</p>
                    </div>
                    <div className="bg-gray-800 p-5 rounded-lg">
                      <h3 className="text-xl font-medium mb-2">Password Reset</h3>
                      <p className="text-gray-300">Allow users to securely reset passwords via SMS.</p>
                    </div>
                    <div className="bg-gray-800 p-5 rounded-lg">
                      <h3 className="text-xl font-medium mb-2">Transaction Confirmation</h3>
                      <p className="text-gray-300">Send OTPs to confirm sensitive transactions or actions.</p>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started</h2>
                  <p className="text-gray-300 mb-4">
                    Follow these simple steps to integrate Rajdoot into your application:
                  </p>
                  
                  <div className="bg-gray-800 p-6 rounded-lg mt-4">
                    <ol className="list-decimal list-inside space-y-4 text-gray-300">
                      <li><strong className="text-white">Sign up</strong> for a Rajdoot account</li>
                      <li><strong className="text-white">Create an API key</strong> from your dashboard</li>
                      <li><strong className="text-white">Install our SDK</strong> or integrate directly with our REST API</li>
                      <li><strong className="text-white">Configure your messaging templates</strong> and OTP settings</li>
                      <li><strong className="text-white">Start sending</strong> messages and validating OTPs!</li>
                    </ol>
                  </div>
                  
                  <div className="mt-12 border-t border-gray-700 pt-8">
                    <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
                    <div className="flex flex-wrap gap-4">
                      <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Create Account
                      </a>
                      <a href="#" className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-300 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        View API Reference
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeTab === 'sms-api' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-3xl font-bold mb-6">SMS API</h1>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Integrate with our SMS API to send text messages globally with high deliverability rates.
                  </p>
                  
                  <h2 className="text-2xl font-semibold mt-8 mb-4">Sending an SMS</h2>
                  <p className="text-gray-300 mb-4">
                    You can send an SMS through our API using a simple POST request:
                  </p>
                  
                  <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto mb-6">
                    <pre className="text-sm text-gray-300">
{`curl -X POST https://api.rajdoot.com/v1/messages \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "to": "+1234567890",
    "from": "Rajdoot", 
    "text": "Your message content here"
  }'`}
                    </pre>
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Request Parameters</h3>
                  <table className="min-w-full divide-y divide-gray-700 mb-8">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Parameter</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">to</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">string</td>
                        <td className="px-6 py-4 text-sm text-gray-300">The recipient's phone number in E.164 format</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">from</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">string</td>
                        <td className="px-6 py-4 text-sm text-gray-300">The sender ID or phone number</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">text</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">string</td>
                        <td className="px-6 py-4 text-sm text-gray-300">The content of your message</td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Response Example</h3>
                  <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300">
{`{
  "id": "msg_8f3d41f28e0611eb",
  "status": "sent",
  "to": "+1234567890",
  "from": "Rajdoot",
  "created_at": "2025-03-12T10:44:23Z",
  "updated_at": "2025-03-12T10:44:25Z"
}`}
                    </pre>
                  </div>
                  
                  <h2 className="text-2xl font-semibold mt-10 mb-4">Bulk SMS Sending</h2>
                  <p className="text-gray-300 mb-4">
                    Send messages to multiple recipients in a single API call:
                  </p>
                  
                  <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300">
{`curl -X POST https://api.rajdoot.com/v1/messages/bulk \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "from": "Rajdoot",
    "text": "Your message content here",
    "recipients": [
      "+1234567890",
      "+1234567891",
      "+1234567892"
    ]
  }'`}
                    </pre>
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeTab === 'otp-services' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-3xl font-bold mb-6">OTP Services</h1>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Rajdoot offers a complete solution for generating, sending, and validating One-Time Passwords.
                  </p>
                  
                  <h2 className="text-2xl font-semibold mt-8 mb-4">Generating and Sending an OTP</h2>
                  <p className="text-gray-300 mb-4">
                    You can generate and send an OTP in a single API call:
                  </p>
                  
                  <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto mb-6">
                    <pre className="text-sm text-gray-300">
{`curl -X POST https://api.rajdoot.com/v1/otp/generate \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "phone": "+1234567890",
    "template_id": "verification_template",
    "expires_in": 300
  }'`}
                    </pre>
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Request Parameters</h3>
                  <table className="min-w-full divide-y divide-gray-700 mb-8">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Parameter</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">phone</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">string</td>
                        <td className="px-6 py-4 text-sm text-gray-300">The recipient's phone number in E.164 format</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">template_id</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">string</td>
                        <td className="px-6 py-4 text-sm text-gray-300">The ID of the message template to use</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">expires_in</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">integer</td>
                        <td className="px-6 py-4 text-sm text-gray-300">OTP expiration time in seconds (default: 300)</td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <h2 className="text-2xl font-semibold mt-10 mb-4">Verifying an OTP</h2>
                  <p className="text-gray-300 mb-4">
                    To verify an OTP entered by a user:
                  </p>
                  
                  <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto mb-6">
                    <pre className="text-sm text-gray-300">
{`curl -X POST https://api.rajdoot.com/v1/otp/verify \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "phone": "+1234567890",
    "code": "123456"
  }'`}
                    </pre>
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Response Example</h3>
                  <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300">
{`{
  "valid": true,
  "message": "OTP verified successfully"
}`}
                    </pre>
                  </div>
                  
                  <h2 className="text-2xl font-semibold mt-10 mb-4">OTP Templates</h2>
                  <p className="text-gray-300 mb-4">
                    Create reusable templates for your OTP messages with placeholders:
                  </p>
                  
                  <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300">
{`// Example template
"Your {{company}} verification code is {{code}}. Valid for {{expiry_minutes}} minutes."`}
                    </pre>
                  </div>
                  
                  <div className="bg-indigo-900 bg-opacity-50 border-l-4 border-indigo-500 p-4 mt-8">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-indigo-300">Security Best Practices</h3>
                        <div className="mt-2 text-sm text-indigo-200">
                          <p>
                            For enhanced security, we recommend setting shorter expiration times for sensitive operations and implementing rate limiting on OTP attempts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Show placeholder content for other tabs */}
            {!['getting-started', 'sms-api', 'otp-services'].includes(activeTab) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center py-16"
              >
                <svg className="mx-auto h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="mt-4 text-sm font-medium text-gray-400">Documentation coming soon</h3>
                <p className="mt-1 text-sm text-gray-500">This section is currently being developed.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Documentation;