import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronRight, 
  Code, 
  Copy, 
  Check, 
  Search,
  Terminal,
  Database,
  Key,
  Lock,
  Server,
  Globe,
  Zap
} from 'lucide-react';
import FloatingParticles from '../components/Background/FloatingParticles';

const APIReference = () => {
  const [activeSection, setActiveSection] = useState('authentication');
  const [copiedCode, setCopiedCode] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const apiSections = [
    {
      id: 'authentication',
      title: 'Authentication',
      icon: <Key className="w-5 h-5" />,
      description: 'Learn how to authenticate your requests to the Rajdoot API',
      endpoints: [
        {
          method: 'POST',
          path: '/api/auth/register',
          description: 'Register a new user',
          requestBody: {
            name: 'string',
            email: 'string',
            password: 'string',
            phoneNumber: 'string (optional)'
          },
          response: {
            success: 'boolean',
            user: {
              id: 'string',
              name: 'string',
              email: 'string',
              createdAt: 'date'
            },
            token: 'string'
          },
          code: `fetch('https://api.rajdoot.com/api/auth/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'securepassword',
    phoneNumber: '+91 9876543210'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`
        },
        {
          method: 'POST',
          path: '/api/auth/login',
          description: 'Login with email and password',
          requestBody: {
            email: 'string',
            password: 'string'
          },
          response: {
            success: 'boolean',
            user: {
              id: 'string',
              name: 'string',
              email: 'string'
            },
            token: 'string'
          },
          code: `fetch('https://api.rajdoot.com/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'john@example.com',
    password: 'securepassword'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`
        }
      ]
    },
    {
      id: 'plans',
      title: 'Subscription Plans',
      icon: <Zap className="w-5 h-5" />,
      description: 'Manage subscription plans and user subscriptions',
      endpoints: [
        {
          method: 'GET',
          path: '/api/plans',
          description: 'Get all available subscription plans',
          response: {
            success: 'boolean',
            plans: [
              {
                id: 'string',
                name: 'string',
                price: 'number',
                period: 'string',
                features: ['string']
              }
            ]
          },
          code: `fetch('https://api.rajdoot.com/api/plans', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`
        },
        {
          method: 'POST',
          path: '/api/orders/create',
          description: 'Create a new order for subscription',
          requestBody: {
            amount: 'number',
            currency: 'string',
            planId: 'string'
          },
          response: {
            success: 'boolean',
            order: {
              id: 'string',
              amount: 'number',
              currency: 'string',
              status: 'string'
            }
          },
          code: `fetch('https://api.rajdoot.com/api/orders/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN'
  },
  body: JSON.stringify({
    amount: 1000,
    currency: 'INR',
    planId: 'plan_123456'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`
        }
      ]
    },
    {
      id: 'payments',
      title: 'Payments',
      icon: <Lock className="w-5 h-5" />,
      description: 'Process and verify payments',
      endpoints: [
        {
          method: 'POST',
          path: '/api/payments/verify',
          description: 'Verify a payment with Razorpay',
          requestBody: {
            razorpay_payment_id: 'string',
            razorpay_order_id: 'string',
            razorpay_signature: 'string'
          },
          response: {
            success: 'boolean',
            message: 'string'
          },
          code: `fetch('https://api.rajdoot.com/api/payments/verify', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN'
  },
  body: JSON.stringify({
    razorpay_payment_id: 'pay_123456',
    razorpay_order_id: 'order_123456',
    razorpay_signature: 'signature_123456'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`
        }
      ]
    },
    {
      id: 'subscriptions',
      title: 'Subscriptions',
      icon: <Database className="w-5 h-5" />,
      description: 'Manage user subscriptions',
      endpoints: [
        {
          method: 'GET',
          path: '/api/subscriptions',
          description: 'Get current user subscription',
          response: {
            success: 'boolean',
            subscription: {
              id: 'string',
              planId: 'string',
              status: 'string',
              startDate: 'date',
              endDate: 'date'
            }
          },
          code: `fetch('https://api.rajdoot.com/api/subscriptions', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`
        },
        {
          method: 'POST',
          path: '/api/subscriptions',
          description: 'Update user subscription',
          requestBody: {
            planId: 'string',
            paymentDetails: {
              paymentId: 'string',
              orderId: 'string',
              amount: 'number',
              currency: 'string'
            }
          },
          response: {
            success: 'boolean',
            subscription: {
              id: 'string',
              planId: 'string',
              status: 'string',
              startDate: 'date',
              endDate: 'date'
            }
          },
          code: `fetch('https://api.rajdoot.com/api/subscriptions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN'
  },
  body: JSON.stringify({
    planId: 'plan_123456',
    paymentDetails: {
      paymentId: 'pay_123456',
      orderId: 'order_123456',
      amount: 1000,
      currency: 'INR'
    }
  })
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
      <FloatingParticles />
      
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
                API Reference
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
                  <code className="text-sm text-gray-300">https://api.rajdoot.com</code>
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
                  
                  <div className="space-y-8">
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
    </div>
  );
};

export default APIReference; 