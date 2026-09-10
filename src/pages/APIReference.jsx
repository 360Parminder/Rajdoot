import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CodeIcon,
  Copy01Icon,
  Tick01Icon,
  Search01Icon,
  Mail01Icon,
  Message01Icon,
  SmartPhone01Icon,
  HashtagIcon,
  CloudServerIcon,
  Shield01Icon,
  BookOpen01Icon,
  ArrowRight01Icon,
  ComputerTerminal01Icon,
  File01Icon,
  AlertCircleIcon,
  CheckmarkCircle02Icon
} from 'hugeicons-react';
import { cn } from '../lib/utils';

const APIReference = () => {
  const [activeSection, setActiveSection] = useState('sending-messages');
  const [copiedCode, setCopiedCode] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [codeTabs, setCodeTabs] = useState({});

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const getActiveTab = (endpointId) => {
    return codeTabs[endpointId] || 'javascript';
  };

  const setActiveTab = (endpointId, tab) => {
    setCodeTabs(prev => ({ ...prev, [endpointId]: tab }));
  };

  const sidebarGroups = [
    {
      title: 'Getting Started',
      items: [
        { id: 'overview', label: 'Overview', icon: <BookOpen01Icon size={16} /> },
        { id: 'authentication', label: 'Authentication', icon: <Shield01Icon size={16} /> },
        { id: 'errors', label: 'Errors & Status Codes', icon: <AlertCircleIcon size={16} /> },
      ]
    },
    {
      title: 'Messaging Endpoints',
      items: [
        { id: 'sending-messages', label: 'Send Messages', icon: <Message01Icon size={16} />, method: 'POST' },
        { id: 'sending-otps', label: 'Send OTP', icon: <SmartPhone01Icon size={16} />, method: 'POST' },
        { id: 'verifying-otps', label: 'Verify OTP', icon: <HashtagIcon size={16} />, method: 'POST' },
        { id: 'message-balance', label: 'Check Balance', icon: <Mail01Icon size={16} />, method: 'GET' },
      ]
    },
    {
      title: 'Developer Guides',
      items: [
        { id: 'docs-link', label: 'Documentation Home', icon: <ComputerTerminal01Icon size={16} />, isExternal: true, path: '/docs' },
        { id: 'features-link', label: 'Platform Features', icon: <File01Icon size={16} />, isExternal: true, path: '/features' },
      ]
    }
  ];

  const endpointsData = {
    'sending-messages': {
      id: 'sending-messages',
      category: 'Messaging',
      title: 'Send a Message',
      method: 'POST',
      path: '/message/send',
      description: 'Dispatch an SMS or transactional notification to a mobile subscriber with carrier-level routing and delivery confirmations.',
      headers: [
        { name: 'Content-Type', type: 'string', value: 'application/json', description: 'Specifies the JSON request payload.' },
        { name: 'x-api-id', type: 'string', value: 'YOUR_API_ID', description: 'Your public API ID generated from the dashboard.' },
        { name: 'x-api-key', type: 'string', value: 'YOUR_API_KEY', description: 'Your private secret API key from the dashboard.' }
      ],
      params: [
        { name: 'content', type: 'string', required: true, description: 'Text message payload (up to 160 GSM characters per single SMS credit).' },
        { name: 'recipient', type: 'string', required: true, description: 'E.164 phone number with country code (e.g. +919876543210).' },
        { name: 'sender_id', type: 'string', required: false, description: 'Registered sender ID header (defaults to your account default).' }
      ],
      codeSamples: {
        javascript: `fetch('https://api.rajdoot.wtf/message/send', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-id': 'YOUR_API_ID',
    'x-api-key': 'YOUR_API_KEY'
  },
  body: JSON.stringify({
    content: 'Your Rajdoot verification code is 482910.',
    recipient: '+919876543210',
    sender_id: 'RAJDOOT'
  })
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`,
        curl: `curl -X POST https://api.rajdoot.wtf/message/send \\
  -H "Content-Type: application/json" \\
  -H "x-api-id: YOUR_API_ID" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -d '{
    "content": "Your Rajdoot verification code is 482910.",
    "recipient": "+919876543210",
    "sender_id": "RAJDOOT"
  }'`
      },
      response: {
        status: 'success',
        message: 'Message dispatched successfully',
        data: {
          messageId: 'msg_89f02c4b8109',
          recipient: '+919876543210',
          status: 'DELIVERED',
          cost: 1,
          serverNumber: '+919811000000',
          timestamp: '2026-09-11T00:30:00Z'
        }
      }
    },
    'sending-otps': {
      id: 'sending-otps',
      category: 'Authentication',
      title: 'Send One-Time Password (OTP)',
      method: 'POST',
      path: '/message/sendOtp',
      description: 'Generates a secure numeric verification code, saves an encrypted hash with a configurable TTL, and delivers it via high-priority route.',
      headers: [
        { name: 'Content-Type', type: 'string', value: 'application/json', description: 'Specifies JSON payload.' },
        { name: 'x-api-id', type: 'string', value: 'YOUR_API_ID', description: 'Your public API ID.' },
        { name: 'x-api-key', type: 'string', value: 'YOUR_API_KEY', description: 'Your private API key.' }
      ],
      params: [
        { name: 'recipient', type: 'string', required: true, description: 'Recipient phone number with country code.' },
        { name: 'otp_length', type: 'number', required: false, description: 'Number of digits in generated code (4 to 6, default: 6).' },
        { name: 'expiry_minutes', type: 'number', required: false, description: 'Validity duration in minutes before automatic expiration (default: 5).' }
      ],
      codeSamples: {
        javascript: `fetch('https://api.rajdoot.wtf/message/sendOtp', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-id': 'YOUR_API_ID',
    'x-api-key': 'YOUR_API_KEY'
  },
  body: JSON.stringify({
    recipient: '+919876543210',
    otp_length: 6,
    expiry_minutes: 5
  })
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`,
        curl: `curl -X POST https://api.rajdoot.wtf/message/sendOtp \\
  -H "Content-Type: application/json" \\
  -H "x-api-id: YOUR_API_ID" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -d '{
    "recipient": "+919876543210",
    "otp_length": 6
  }'`
      },
      response: {
        status: 'success',
        message: 'OTP generated and sent',
        otpRecord: {
          otpId: 'otp_93b740ef82c1',
          isVerified: false,
          expiresAt: '2026-09-11T00:35:00Z',
          createdAt: '2026-09-11T00:30:00Z'
        }
      }
    },
    'verifying-otps': {
      id: 'verifying-otps',
      category: 'Authentication',
      title: 'Verify One-Time Password',
      method: 'POST',
      path: '/message/verifyOtp',
      description: 'Validates a subscriber-submitted OTP against the active session. If matched, the session is invalidated immediately to prevent replay.',
      headers: [
        { name: 'Content-Type', type: 'string', value: 'application/json', description: 'Specifies JSON payload.' },
        { name: 'x-api-id', type: 'string', value: 'YOUR_API_ID', description: 'Your public API ID.' },
        { name: 'x-api-key', type: 'string', value: 'YOUR_API_KEY', description: 'Your private API key.' }
      ],
      params: [
        { name: 'otp_id', type: 'string', required: true, description: 'Identifier returned in the sendOtp response.' },
        { name: 'otp_code', type: 'string', required: true, description: 'Code entered by user (4-6 digits).' },
        { name: 'phone_number', type: 'string', required: true, description: 'Recipient phone number for validation.' }
      ],
      codeSamples: {
        javascript: `fetch('https://api.rajdoot.wtf/message/verifyOtp', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-id': 'YOUR_API_ID',
    'x-api-key': 'YOUR_API_KEY'
  },
  body: JSON.stringify({
    otp_id: 'otp_93b740ef82c1',
    otp_code: '482910',
    phone_number: '+919876543210'
  })
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`,
        curl: `curl -X POST https://api.rajdoot.wtf/message/verifyOtp \\
  -H "Content-Type: application/json" \\
  -H "x-api-id: YOUR_API_ID" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -d '{
    "otp_id": "otp_93b740ef82c1",
    "otp_code": "482910",
    "phone_number": "+919876543210"
  }'`
      },
      response: {
        success: true,
        verified: true,
        message: 'OTP validated successfully'
      }
    },
    'message-balance': {
      id: 'message-balance',
      category: 'Billing & Account',
      title: 'Check Account Balance',
      method: 'GET',
      path: '/balance',
      description: 'Query your remaining SMS dispatch credits, active subscription plan tier, and account expiration dates programmatically.',
      headers: [
        { name: 'x-api-id', type: 'string', value: 'YOUR_API_ID', description: 'Your public API ID.' },
        { name: 'x-api-key', type: 'string', value: 'YOUR_API_KEY', description: 'Your private API key.' }
      ],
      params: [],
      codeSamples: {
        javascript: `fetch('https://api.rajdoot.wtf/balance', {
  method: 'GET',
  headers: {
    'x-api-id': 'YOUR_API_ID',
    'x-api-key': 'YOUR_API_KEY'
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`,
        curl: `curl -X GET https://api.rajdoot.wtf/balance \\
  -H "x-api-id: YOUR_API_ID" \\
  -H "x-api-key: YOUR_API_KEY"`
      },
      response: {
        success: true,
        balance: 48500,
        plan: 'Pro Growth',
        valid_until: '2026-10-31T23:59:59Z',
        currency: 'INR'
      }
    }
  };

  const currentEndpoint = endpointsData[activeSection];

  return (
    <div className={cn('flex', 'min-h-screen', 'bg-white', 'dark:bg-neutral-950', 'pt-16', 'font-sans', 'text-left')}>
      {/* Sidebar Navigation */}
      <aside className={cn('w-[280px]', 'hidden', 'md:block', 'flex-shrink-0', 'border-r', 'border-neutral-200', 'dark:border-neutral-800', 'h-[calc(100vh-64px)]', 'sticky', 'top-16', 'overflow-y-auto')}>
        <nav className={cn('p-4', 'space-y-6', 'mt-2')}>
          {/* Search Box */}
          <div className="relative mb-2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
              <Search01Icon size={15} />
            </div>
            <input
              type="text"
              placeholder="Search reference..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={cn(
                'w-full', 'pl-9', 'pr-3', 'py-1.5', 'text-[13px]',
                'bg-neutral-50', 'dark:bg-neutral-900',
                'border', 'border-neutral-200', 'dark:border-neutral-800',
                'rounded-lg', 'text-neutral-900', 'dark:text-white',
                'placeholder-neutral-400',
                'focus:outline-none', 'focus:ring-1', 'focus:ring-neutral-400', 'dark:focus:ring-neutral-600'
              )}
            />
          </div>

          {sidebarGroups.map((group, index) => {
            const filteredItems = group.items.filter(item =>
              item.label.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filteredItems.length === 0) return null;

            return (
              <div key={index}>
                {group.title && (
                  <h4 className={cn('text-[12px]', 'font-semibold', 'text-neutral-500', 'dark:text-neutral-400', 'mb-2', 'px-3')}>
                    {group.title}
                  </h4>
                )}
                <ul className="space-y-[2px]">
                  {filteredItems.map(item => {
                    if (item.isExternal) {
                      return (
                        <li key={item.id}>
                          <Link
                            to={item.path}
                            className={cn(
                              'w-full', 'flex', 'items-center', 'justify-between', 'px-3', 'py-1.5',
                              'text-[14px]', 'rounded-md', 'transition-colors',
                              'text-neutral-600', 'dark:text-neutral-400',
                              'hover:bg-neutral-50', 'dark:hover:bg-neutral-800/50',
                              'hover:text-neutral-900', 'dark:hover:text-neutral-200'
                            )}
                          >
                            <div className="flex items-center gap-2.5">
                              {item.icon && <span className="opacity-70">{item.icon}</span>}
                              <span>{item.label}</span>
                            </div>
                            <ArrowRight01Icon size={12} className="opacity-50" />
                          </Link>
                        </li>
                      );
                    }

                    const isActive = activeSection === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => setActiveSection(item.id)}
                          className={cn(
                            'w-full', 'flex', 'items-center', 'justify-between', 'px-3', 'py-1.5',
                            'text-[14px]', 'rounded-md', 'transition-colors',
                            isActive
                              ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-medium'
                              : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-neutral-200'
                          )}
                        >
                          <div className="flex items-center gap-2.5">
                            {item.icon && <span className="opacity-70">{item.icon}</span>}
                            <span>{item.label}</span>
                          </div>
                          {item.method && (
                            <span className={cn(
                              'text-[10px]', 'font-mono', 'font-semibold', 'px-1.5', 'py-0.5', 'rounded',
                              item.method === 'POST'
                                ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200'
                                : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200'
                            )}>
                              {item.method}
                            </span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className={cn('flex-1', 'overflow-x-hidden', 'p-6', 'md:p-10', 'lg:p-14')}>
        <div className={cn('max-w-[850px]', 'mx-auto')}>
          {/* Mobile Section Selector */}
          <div className="md:hidden mb-6 pb-4 border-b border-neutral-200 dark:border-neutral-800">
            <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
              Select Resource Section
            </label>
            <select
              value={activeSection}
              onChange={(e) => setActiveSection(e.target.value)}
              className="w-full py-2 px-3 text-sm bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg text-neutral-900 dark:text-white"
            >
              <optgroup label="Getting Started">
                <option value="overview">Overview</option>
                <option value="authentication">Authentication</option>
                <option value="errors">Errors & Status Codes</option>
              </optgroup>
              <optgroup label="Endpoints">
                <option value="sending-messages">Send Messages (POST)</option>
                <option value="sending-otps">Send OTP (POST)</option>
                <option value="verifying-otps">Verify OTP (POST)</option>
                <option value="message-balance">Check Balance (GET)</option>
              </optgroup>
            </select>
          </div>

          {/* OVERVIEW SECTION */}
          {activeSection === 'overview' && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <div className="mb-10">
                <span className={cn('text-[14px]', 'font-medium', 'text-neutral-500', 'dark:text-neutral-400', 'mb-3', 'block', 'underline', 'decoration-neutral-300', 'dark:decoration-neutral-700', 'underline-offset-4')}>
                  API Reference
                </span>
                <h1 className={cn('text-3xl', 'md:text-[38px]', 'leading-tight', 'font-bold', 'text-neutral-900', 'dark:text-white', 'tracking-tight', 'mb-3')}>
                  Developer Resources & API
                </h1>
                <p className={cn('text-[15px]', 'text-neutral-600', 'dark:text-neutral-400', 'leading-relaxed')}>
                  The Rajdoot REST API is organized around predictable HTTP verbs, URL structures, and standard JSON response payloads. All requests require authentication headers.
                </p>
              </div>

              {/* Base URL Card */}
              <div className={cn('border', 'border-neutral-200', 'dark:border-neutral-800', 'rounded-xl', 'p-5', 'bg-neutral-50', 'dark:bg-neutral-900/50', 'mb-10', 'flex', 'items-center', 'justify-between')}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300">
                    <CloudServerIcon size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      Root Production URL
                    </div>
                    <code className="text-[14px] font-mono font-medium text-neutral-900 dark:text-white">
                      https://api.rajdoot.wtf
                    </code>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('https://api.rajdoot.wtf', 'base-url-overview')}
                  className="px-3 py-1.5 rounded-md text-[13px] font-medium border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors flex items-center gap-1.5"
                >
                  {copiedCode === 'base-url-overview' ? (
                    <>
                      <Tick01Icon size={14} className="text-emerald-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy01Icon size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Quick Jump Cards */}
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">
                Primary Endpoints
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {[
                  { id: 'sending-messages', title: 'Send Messages', method: 'POST', desc: 'Dispatch SMS with carrier failover.' },
                  { id: 'sending-otps', title: 'Send OTP', method: 'POST', desc: 'Generate high-entropy verification codes.' },
                  { id: 'verifying-otps', title: 'Verify OTP', method: 'POST', desc: 'Validate user-entered codes.' },
                  { id: 'message-balance', title: 'Check Balance', method: 'GET', desc: 'Inspect available credits and quota.' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveSection(item.id)}
                    className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all cursor-pointer bg-white dark:bg-neutral-900"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-[15px] font-semibold text-neutral-900 dark:text-white">{item.title}</h4>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                        {item.method}
                      </span>
                    </div>
                    <p className="text-[13px] text-neutral-500 dark:text-neutral-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* AUTHENTICATION SECTION */}
          {activeSection === 'authentication' && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <div className="mb-8">
                <span className={cn('text-[14px]', 'font-medium', 'text-neutral-500', 'dark:text-neutral-400', 'mb-3', 'block', 'underline', 'decoration-neutral-300', 'dark:decoration-neutral-700', 'underline-offset-4')}>
                  Security
                </span>
                <h1 className={cn('text-3xl', 'md:text-[38px]', 'leading-tight', 'font-bold', 'text-neutral-900', 'dark:text-white', 'tracking-tight', 'mb-3')}>
                  Authentication
                </h1>
                <p className={cn('text-[15px]', 'text-neutral-600', 'dark:text-neutral-400', 'leading-relaxed')}>
                  Authenticate your API requests by including your account API credentials in the request headers. Do not expose your private secret keys in frontend client bundles.
                </p>
              </div>

              <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 bg-neutral-50 dark:bg-neutral-900/50 mb-8 space-y-4">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Required HTTP Headers</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <code className="text-xs font-mono font-semibold px-2 py-1 rounded bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white">
                      x-api-id
                    </code>
                    <span className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      Your unique project identifier generated in your dashboard.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <code className="text-xs font-mono font-semibold px-2 py-1 rounded bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white">
                      x-api-key
                    </code>
                    <span className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      Your private secret key. Keep this secure on backend servers.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ERRORS & STATUS CODES */}
          {activeSection === 'errors' && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <div className="mb-8">
                <span className={cn('text-[14px]', 'font-medium', 'text-neutral-500', 'dark:text-neutral-400', 'mb-3', 'block', 'underline', 'decoration-neutral-300', 'dark:decoration-neutral-700', 'underline-offset-4')}>
                  Reference
                </span>
                <h1 className={cn('text-3xl', 'md:text-[38px]', 'leading-tight', 'font-bold', 'text-neutral-900', 'dark:text-white', 'tracking-tight', 'mb-3')}>
                  Errors & HTTP Status Codes
                </h1>
                <p className={cn('text-[15px]', 'text-neutral-600', 'dark:text-neutral-400', 'leading-relaxed')}>
                  Rajdoot returns standard HTTP status codes along with descriptive JSON response bodies when an error occurs.
                </p>
              </div>

              <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden mb-12">
                <table className="w-full text-left text-[13px]">
                  <thead className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 font-semibold">
                    <tr>
                      <th className="py-3 px-4">Code</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Meaning</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                    <tr>
                      <td className="py-3 px-4 font-mono font-medium text-neutral-900 dark:text-white">200</td>
                      <td className="py-3 px-4 font-medium text-neutral-700 dark:text-neutral-300">OK</td>
                      <td className="py-3 px-4 text-neutral-500 dark:text-neutral-400">Request completed successfully.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono font-medium text-neutral-900 dark:text-white">400</td>
                      <td className="py-3 px-4 font-medium text-neutral-700 dark:text-neutral-300">Bad Request</td>
                      <td className="py-3 px-4 text-neutral-500 dark:text-neutral-400">Missing required parameter or invalid body payload.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono font-medium text-neutral-900 dark:text-white">401</td>
                      <td className="py-3 px-4 font-medium text-neutral-700 dark:text-neutral-300">Unauthorized</td>
                      <td className="py-3 px-4 text-neutral-500 dark:text-neutral-400">Missing or invalid x-api-id or x-api-key headers.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono font-medium text-neutral-900 dark:text-white">402</td>
                      <td className="py-3 px-4 font-medium text-neutral-700 dark:text-neutral-300">Payment Required</td>
                      <td className="py-3 px-4 text-neutral-500 dark:text-neutral-400">Insufficient SMS credit balance on your account.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono font-medium text-neutral-900 dark:text-white">429</td>
                      <td className="py-3 px-4 font-medium text-neutral-700 dark:text-neutral-300">Rate Limit Exceeded</td>
                      <td className="py-3 px-4 text-neutral-500 dark:text-neutral-400">Too many requests sent within your current rate window.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono font-medium text-neutral-900 dark:text-white">500</td>
                      <td className="py-3 px-4 font-medium text-neutral-700 dark:text-neutral-300">Internal Error</td>
                      <td className="py-3 px-4 text-neutral-500 dark:text-neutral-400">An error occurred on the telecom carrier or Rajdoot network.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* INDIVIDUAL ENDPOINT VIEW */}
          {currentEndpoint && (
            <motion.div
              key={currentEndpoint.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              {/* Header */}
              <div>
                <span className={cn('text-[14px]', 'font-medium', 'text-neutral-500', 'dark:text-neutral-400', 'mb-3', 'block', 'underline', 'decoration-neutral-300', 'dark:decoration-neutral-700', 'underline-offset-4')}>
                  {currentEndpoint.category}
                </span>
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className={cn(
                    'text-[12px]', 'font-mono', 'font-bold', 'px-2.5', 'py-1', 'rounded-md',
                    'bg-neutral-100', 'dark:bg-neutral-800',
                    'border', 'border-neutral-200', 'dark:border-neutral-700',
                    'text-neutral-800', 'dark:text-neutral-200'
                  )}>
                    {currentEndpoint.method}
                  </span>
                  <code className="text-xl sm:text-2xl font-mono font-bold text-neutral-900 dark:text-white">
                    {currentEndpoint.path}
                  </code>
                </div>
                <p className="text-[15px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {currentEndpoint.description}
                </p>
              </div>

              {/* Required Headers Table */}
              <div>
                <h3 className="text-[14px] font-semibold text-neutral-900 dark:text-white mb-3">
                  Headers
                </h3>
                <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
                  <table className="w-full text-left text-[13px]">
                    <thead className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 font-semibold">
                      <tr>
                        <th className="py-2.5 px-4">Header</th>
                        <th className="py-2.5 px-4">Type</th>
                        <th className="py-2.5 px-4">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                      {currentEndpoint.headers.map((h, i) => (
                        <tr key={i}>
                          <td className="py-2.5 px-4 font-mono font-medium text-neutral-900 dark:text-white">{h.name}</td>
                          <td className="py-2.5 px-4 font-mono text-neutral-500">{h.type}</td>
                          <td className="py-2.5 px-4 text-neutral-600 dark:text-neutral-400">{h.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Parameters Table */}
              {currentEndpoint.params && currentEndpoint.params.length > 0 && (
                <div>
                  <h3 className="text-[14px] font-semibold text-neutral-900 dark:text-white mb-3">
                    Body Parameters (JSON)
                  </h3>
                  <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-[13px]">
                      <thead className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 font-semibold">
                        <tr>
                          <th className="py-2.5 px-4">Field</th>
                          <th className="py-2.5 px-4">Type</th>
                          <th className="py-2.5 px-4">Requirement</th>
                          <th className="py-2.5 px-4">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                        {currentEndpoint.params.map((p, i) => (
                          <tr key={i}>
                            <td className="py-2.5 px-4 font-mono font-medium text-neutral-900 dark:text-white">{p.name}</td>
                            <td className="py-2.5 px-4 font-mono text-neutral-500">{p.type}</td>
                            <td className="py-2.5 px-4">
                              {p.required ? (
                                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                                  required
                                </span>
                              ) : (
                                <span className="text-[11px] text-neutral-400">
                                  optional
                                </span>
                              )}
                            </td>
                            <td className="py-2.5 px-4 text-neutral-600 dark:text-neutral-400">{p.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Code Examples */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1 p-0.5 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
                    <button
                      onClick={() => setActiveTab(currentEndpoint.id, 'javascript')}
                      className={cn(
                        'px-3 py-1 text-xs rounded-md font-medium transition-colors',
                        getActiveTab(currentEndpoint.id) === 'javascript'
                          ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs'
                          : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                      )}
                    >
                      JavaScript (fetch)
                    </button>
                    <button
                      onClick={() => setActiveTab(currentEndpoint.id, 'curl')}
                      className={cn(
                        'px-3 py-1 text-xs rounded-md font-medium transition-colors',
                        getActiveTab(currentEndpoint.id) === 'curl'
                          ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs'
                          : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                      )}
                    >
                      cURL
                    </button>
                  </div>

                  <button
                    onClick={() => copyToClipboard(currentEndpoint.codeSamples[getActiveTab(currentEndpoint.id)], `${currentEndpoint.id}-code`)}
                    className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    {copiedCode === `${currentEndpoint.id}-code` ? (
                      <>
                        <Tick01Icon size={14} className="text-emerald-500" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy01Icon size={14} />
                        <span>Copy snippet</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="border border-neutral-800 rounded-xl overflow-hidden bg-neutral-950">
                  <pre className="p-4 text-[13px] font-mono text-neutral-200 overflow-x-auto leading-relaxed">
                    <code>{currentEndpoint.codeSamples[getActiveTab(currentEndpoint.id)]}</code>
                  </pre>
                </div>
              </div>

              {/* Response Preview */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-semibold text-neutral-900 dark:text-white">
                      Response
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      200 OK
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(JSON.stringify(currentEndpoint.response, null, 2), `${currentEndpoint.id}-response`)}
                    className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    {copiedCode === `${currentEndpoint.id}-response` ? (
                      <>
                        <Tick01Icon size={14} className="text-emerald-500" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy01Icon size={14} />
                        <span>Copy JSON</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="border border-neutral-800 rounded-xl overflow-hidden bg-neutral-950">
                  <pre className="p-4 text-[13px] font-mono text-neutral-200 overflow-x-auto leading-relaxed">
                    <code>{JSON.stringify(currentEndpoint.response, null, 2)}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default APIReference;