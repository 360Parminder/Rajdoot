import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronRight, 
  Code, 
  Copy, 
  Check, 
  Search,
  Mail,
  MessageSquare,
  Smartphone,
  Hash,
  Server
} from 'lucide-react';
import AnimatedBackground from '../components/ui/AnimatedBackground';

const APIReference = () => {
  const [activeSection, setActiveSection] = useState('sending-messages');
  const [copiedCode, setCopiedCode] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const apiSections = [
    {
      id: 'sending-messages',
      title: 'Sending Messages',
      icon: <MessageSquare className="w-5 h-5" />,
      description: 'Send SMS messages to recipients',
      endpoints: [
        {
          method: 'POST',
          path: '/message/send',
          description: 'Send a message to a recipient',
          requestBody: {
            content: 'string (message content)',
            recipient: 'string (phone number with country code)',
            sender_id: 'string (optional sender ID)'
          },
          headers: {
            'x-api-id': 'string (your API ID from dashboard)',
            'x-api-key': 'string (your API key from dashboard)'
          },
          response: {
            success: 'boolean',
            message_id: 'string',
            balance: 'number (remaining messages)',
            cost: 'number (message cost)'
          },
          code: `fetch('https://api.rajdoot.parminder.info/message', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-id': 'YOUR_API_ID',
    'x-api-key': 'YOUR_API_KEY'
  },
  body: JSON.stringify({
    content: 'Hello from Rajdoot!',
    recipient: '+919876543xxx',
    sender_id: 'RAJDOOT'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`
        }
      ]
    },
    {
      id: 'sending-otps',
      title: 'Sending OTPs',
      icon: <Smartphone className="w-5 h-5" />,
      description: 'Generate and send OTPs to phone numbers',
      endpoints: [
        {
          method: 'POST',
          path: '/message/sendOtp',
          description: 'Send an OTP to a phone number',
          requestBody: {
            recipient: 'string (phone number with country code)',
            otp_length: 'number (4-6 digits, default: 6)',
          },
          headers: {
            'x-api-id': 'string (your API ID from dashboard)',
            'x-api-key': 'string (your API key from dashboard)'
          },
          response: {
            status: 'string',
            message: 'string',
            otpRecord: {
              otp:'string (generated OTP)',
              serverNumber: 'string (server number)',
              isVerified:'boolean (verification status)',
              expiresAt:'string (expiry time)',
              _id: 'string (OTP ID)',
              createdAt: 'string (creation time)',
            },
          },
          code: `fetch('https://api.rajdoot.parminder.info/message/sendOtp', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-id': 'YOUR_API_ID',
    'x-api-key': 'YOUR_API_KEY'
  },
  body: JSON.stringify({
    recipient: '9876543xxx',
    otp_length: 6,
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`
        }
      ]
    },
    {
      id: 'verifying-otps',
      title: 'Verifying OTPs',
      icon: <Hash className="w-5 h-5" />,
      description: 'Verify OTPs sent to users',
      endpoints: [
        {
          method: 'POST',
          path: '/message/verifyOtp',
          description: 'Verify an OTP',
          requestBody: {
            otp_id: 'string (from send OTP response)',
            otp_code: 'string (OTP entered by user)',
            phone_number: 'string (same as in send OTP)'
          },
          headers: {
            'x-api-id': 'string (your API ID from dashboard)',
            'x-api-key': 'string (your API key from dashboard)'
          },
          response: {
            success: 'boolean',
            verified: 'boolean',
            message: 'string'
          },
          code: `fetch('https://api.rajdoot.parminder.info/otp/verify', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-id': 'YOUR_API_ID',
    'x-api-key': 'YOUR_API_KEY'
  },
  body: JSON.stringify({
    otp_id: '1234567890abcdef',
    otp_code: '123456',
    phone_number: '+919876543xxx'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`
        }
      ]
    },
    {
      id: 'message-balance',
      title: 'Checking Message Balance',
      icon: <Mail className="w-5 h-5" />,
      description: 'Check your remaining message balance',
      endpoints: [
        {
          method: 'GET',
          path: '/balance',
          description: 'Check your remaining message balance',
          headers: {
            'x-api-id': 'string (your API ID from dashboard)',
            'x-api-key': 'string (your API key from dashboard)'
          },
          response: {
            success: 'boolean',
            balance: 'number',
            valid_until: 'string (date)',
            plan: 'string (your current plan)'
          },
          code: `fetch('https://api.rajdoot.parminder.info/balance', {
  method: 'GET',
  headers: {
    'x-api-id': 'YOUR_API_ID',
    'x-api-key': 'YOUR_API_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`
        }
      ]
    }
  ];

  const filteredSections = apiSections.filter(section => 
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.endpoints.some(endpoint => 
      endpoint.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
     <AnimatedBackground >
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-1/4 bg-gray-900 rounded-xl p-6 border border-gray-800 h-fit sticky top-6"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Code className="w-6 h-6 mr-2 text-purple-500" />
                Messaging API
              </h2>
              
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  placeholder="Search API..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                {filteredSections.map((section) => (
                  <button
                    key={section.id}
                    className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-purple-900/50 text-white'
                        : 'text-gray-300 hover:bg-gray-800'
                    }`}
                    onClick={() => setActiveSection(section.id)}
                  >
                    {section.icon}
                    <span className="ml-3">{section.title}</span>
                    {activeSection === section.id ? (
                      <ChevronDown className="w-4 h-4 ml-auto" />
                    ) : (
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    )}
                  </button>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-800">
                <h3 className="text-sm font-medium text-gray-400 mb-3">API Base URL</h3>
                <div className="bg-gray-800 p-3 rounded-lg flex items-center">
                  <Server className="w-4 h-4 text-gray-500 mr-2" />
                  <code className="text-sm text-gray-300 overflow-x-scroll ">https://api.rajdoot.parminder.info</code>
                </div>
              </div>
            </motion.div>
            
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full md:w-3/4"
            >
              {filteredSections.map((section) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: activeSection === section.id ? 1 : 0,
                    y: activeSection === section.id ? 0 : 20,
                    display: activeSection === section.id ? 'block' : 'none'
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 rounded-xl p-8 border border-gray-800 mb-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{section.title}</h2>
                      <p className="text-gray-400">{section.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-8 ">
                    {section.endpoints.map((endpoint, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="border border-gray-800 rounded-lg overflow-hidden"
                      >
                        <div className="bg-gray-800 p-4 flex items-center">
                          <div className={`px-3 py-1 rounded-md text-sm font-medium ${
                            endpoint.method === 'GET' ? 'bg-blue-500/20 text-blue-400' :
                            endpoint.method === 'POST' ? 'bg-green-500/20 text-green-400' :
                            endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                            endpoint.method === 'DELETE' ? 'bg-red-500/20 text-red-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {endpoint.method}
                          </div>
                          <code className="ml-4 text-gray-300">{endpoint.path}</code>
                        </div>
                        
                        <div className="p-6">
                          <h3 className="text-lg font-medium mb-4">{endpoint.description}</h3>
                          
                          {endpoint.headers && (
                            <div className="mb-6">
                              <h4 className="text-sm font-medium text-gray-400 mb-2">Required Headers</h4>
                              <div className="bg-gray-800 p-4 rounded-lg">
                                <pre className="text-sm text-gray-300 overflow-x-auto">
                                  {JSON.stringify(endpoint.headers, null, 2)}
                                </pre>
                              </div>
                            </div>
                          )}
                          
                          {endpoint.requestBody && (
                            <div className="mb-6">
                              <h4 className="text-sm font-medium text-gray-400 mb-2">Request Body</h4>
                              <div className="bg-gray-800 p-4 rounded-lg">
                                <pre className="text-sm text-gray-300 overflow-x-auto">
                                  {JSON.stringify(endpoint.requestBody, null, 2)}
                                </pre>
                              </div>
                            </div>
                          )}
                          
                          {endpoint.response && (
                            <div className="mb-6">
                              <h4 className="text-sm font-medium text-gray-400 mb-2">Response</h4>
                              <div className="bg-gray-800 p-4 rounded-lg">
                                <pre className="text-sm text-gray-300 overflow-x-auto">
                                  {JSON.stringify(endpoint.response, null, 2)}
                                </pre>
                              </div>
                            </div>
                          )}
                          
                          <div className="mt-6">
                            <h4 className="text-sm font-medium text-gray-400 mb-2">Example</h4>
                            <div className="relative">
                              <div className="absolute top-2 right-2">
                                <button
                                  onClick={() => copyToClipboard(endpoint.code, `${section.id}-${index}`)}
                                  className="p-1 rounded-md hover:bg-gray-700 transition-colors"
                                >
                                  {copiedCode === `${section.id}-${index}` ? (
                                    <Check className="w-4 h-4 text-green-500" />
                                  ) : (
                                    <Copy className="w-4 h-4 text-gray-400" />
                                  )}
                                </button>
                              </div>
                              <div className="bg-gray-800 p-4 rounded-lg">
                                <pre className="text-sm text-gray-300 overflow-x-auto">
                                  <code>{endpoint.code}</code>
                                </pre>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
      </AnimatedBackground>
    </div>
  );
};

export default APIReference;