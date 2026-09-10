import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Message01Icon,
  FlashIcon,
  Shield01Icon,
  BarChartIcon,
  GlobeIcon,
  CodeIcon,
  Clock01Icon,
  UserGroupIcon,
  Notification01Icon,
  Settings01Icon,
  DatabaseIcon,
  LockIcon,
  ArrowRight01Icon,
  Search01Icon,
  PlayCircleIcon,
  ComputerTerminal01Icon,
  CloudServerIcon,
  Layers01Icon,
  FingerPrintScanIcon,
  DeliveryBox01Icon
} from 'hugeicons-react';
import { cn } from '../lib/utils';

const Features = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const sidebarGroups = [
    {
      title: 'Platform Capabilities',
      items: [
        { id: 'all', label: 'All Capabilities', icon: <Layers01Icon size={16} /> },
        { id: 'messaging', label: 'Core Messaging', icon: <Message01Icon size={16} /> },
        { id: 'developer-tools', label: 'Developer Tools & SDKs', icon: <CodeIcon size={16} /> },
        { id: 'analytics', label: 'Analytics & Observability', icon: <BarChartIcon size={16} /> },
        { id: 'infrastructure', label: 'Global Infrastructure', icon: <GlobeIcon size={16} /> },
        { id: 'security', label: 'Security & Compliance', icon: <Shield01Icon size={16} /> },
      ]
    },
    {
      title: 'Quick Resources',
      items: [
        { id: 'docs-link', label: 'Documentation', icon: <ComputerTerminal01Icon size={16} />, isExternal: true, path: '/docs' },
        { id: 'api-link', label: 'API Reference', icon: <CloudServerIcon size={16} />, isExternal: true, path: '/api-reference' },
        { id: 'plans-link', label: 'Pricing Plans', icon: <DeliveryBox01Icon size={16} />, isExternal: true, path: '/plans' },
      ]
    }
  ];

  const categories = [
    {
      id: 'messaging',
      category: 'Core Messaging',
      description: 'High-reliability infrastructure for transactional SMS, OTPs, and subscriber notifications.',
      items: [
        {
          icon: <Message01Icon size={20} className="text-neutral-700 dark:text-neutral-300" />,
          title: 'Advanced SMS Dispatch',
          description: 'Full support for multi-part concatenated SMS, GSM-7 and Unicode 16-bit encoding, and registered DLT sender headers.'
        },
        {
          icon: <FlashIcon size={20} className="text-neutral-700 dark:text-neutral-300" />,
          title: 'Sub-2s Real-Time Delivery',
          description: 'Low-latency routing engines connected directly with Tier-1 telecom operators for instantaneous handset delivery.'
        },
        {
          icon: <Clock01Icon size={20} className="text-neutral-700 dark:text-neutral-300" />,
          title: 'Smart Queue Management',
          description: 'Priority queue throttling ensuring urgent transactional alerts and OTPs bypass promotional broadcast queues.'
        }
      ]
    },
    {
      id: 'developer-tools',
      category: 'Developer Tools & SDKs',
      description: 'Intuitive developer tooling designed for fast integration, debugging, and testing.',
      items: [
        {
          icon: <CodeIcon size={20} className="text-neutral-700 dark:text-neutral-300" />,
          title: 'RESTful API Architecture',
          description: 'Standardized HTTP endpoints with predictable request formats, clear error codes, and JSON response bodies.'
        },
        {
          icon: <DatabaseIcon size={20} className="text-neutral-700 dark:text-neutral-300" />,
          title: 'Webhook Event Dispatch',
          description: 'Configurable real-time webhooks notifying your backend on every status transition (queued, sent, delivered, failed).'
        },
        {
          icon: <Settings01Icon size={20} className="text-neutral-700 dark:text-neutral-300" />,
          title: 'Interactive Test Sandbox',
          description: 'Simulate message handshakes, invalid recipient numbers, and OTP verifications without burning production credits.'
        }
      ]
    },
    {
      id: 'analytics',
      category: 'Analytics & Observability',
      description: 'Granular visibility into carrier latency, delivery success rates, and API quotas.',
      items: [
        {
          icon: <BarChartIcon size={20} className="text-neutral-700 dark:text-neutral-300" />,
          title: 'Real-Time Delivery Logs',
          description: 'Searchable audit trails of every dispatched message with telecom operator timestamps and delivery receipts.'
        },
        {
          icon: <UserGroupIcon size={20} className="text-neutral-700 dark:text-neutral-300" />,
          title: 'Scoped API Keys',
          description: 'Generate, label, and revoke scoped API keys for staging, production, and automated CI test environments.'
        },
        {
          icon: <Notification01Icon size={20} className="text-neutral-700 dark:text-neutral-300" />,
          title: 'Telecom Error Diagnostics',
          description: 'Standardized error classifications pinpointing DND blocks, invalid handset numbers, and network congestion.'
        }
      ]
    },
    {
      id: 'infrastructure',
      category: 'Global Infrastructure',
      description: 'Engineered for continuous uptime, high throughput bursts, and worldwide connectivity.',
      items: [
        {
          icon: <GlobeIcon size={20} className="text-neutral-700 dark:text-neutral-300" />,
          title: 'Multi-Carrier Failover',
          description: 'Automated circuit breakers that redirect message traffic to alternative telecom pipes when latency spikes occur.'
        },
        {
          icon: <Layers01Icon size={20} className="text-neutral-700 dark:text-neutral-300" />,
          title: 'High TPS Throughput',
          description: 'Elastic capacity capable of handling concurrent bursts for flash sales, product launches, and mass OTP demands.'
        },
        {
          icon: <PlayCircleIcon size={20} className="text-neutral-700 dark:text-neutral-300" />,
          title: '99.99% Uptime Guarantee',
          description: 'Redundant infrastructure across multiple availability zones backed by financially backed enterprise SLAs.'
        }
      ]
    },
    {
      id: 'security',
      category: 'Security & Compliance',
      description: 'Enterprise-grade encryption, privacy controls, and regulatory adherence.',
      items: [
        {
          icon: <Shield01Icon size={20} className="text-neutral-700 dark:text-neutral-300" />,
          title: 'TLS 256-Bit Encryption',
          description: 'All API payloads, sensitive OTP tokens, and webhook payloads are encrypted in transit and at rest.'
        },
        {
          icon: <LockIcon size={20} className="text-neutral-700 dark:text-neutral-300" />,
          title: 'Replay Attack Prevention',
          description: 'Time-bound OTP token invalidation and cryptographic nonce checks safeguarding against validation tampering.'
        },
        {
          icon: <FingerPrintScanIcon size={20} className="text-neutral-700 dark:text-neutral-300" />,
          title: 'DLT & Carrier Compliance',
          description: 'Integrated compliance tooling assisting enterprise teams with entity registration, headers, and message templates.'
        }
      ]
    }
  ];

  const filteredCategories = categories.filter(cat => {
    const matchesCategory = activeCategory === 'all' || cat.id === activeCategory;
    const matchesSearch = cat.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.items.some(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={cn('flex', 'min-h-screen', 'bg-white', 'dark:bg-neutral-950', 'pt-16', 'font-sans', 'text-left')}>
      {/* Left Sidebar */}
      <aside className={cn('w-[280px]', 'hidden', 'md:block', 'flex-shrink-0', 'border-r', 'border-neutral-200', 'dark:border-neutral-800', 'h-[calc(100vh-64px)]', 'sticky', 'top-16', 'overflow-y-auto')}>
        <nav className={cn('p-4', 'space-y-6', 'mt-2')}>
          {/* Search Box */}
          <div className="relative mb-2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
              <Search01Icon size={15} />
            </div>
            <input
              type="text"
              placeholder="Search features..."
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

                    const isActive = activeCategory === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => setActiveCategory(item.id)}
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

      {/* Main Content */}
      <main className={cn('flex-1', 'overflow-x-hidden', 'p-6', 'md:p-10', 'lg:p-14')}>
        <div className={cn('max-w-[850px]', 'mx-auto')}>
          {/* Mobile Category Selector */}
          <div className="md:hidden mb-6 pb-4 border-b border-neutral-200 dark:border-neutral-800">
            <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
              Select Category
            </label>
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full py-2 px-3 text-sm bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg text-neutral-900 dark:text-white"
            >
              <option value="all">All Capabilities</option>
              <option value="messaging">Core Messaging</option>
              <option value="developer-tools">Developer Tools & SDKs</option>
              <option value="analytics">Analytics & Observability</option>
              <option value="infrastructure">Global Infrastructure</option>
              <option value="security">Security & Compliance</option>
            </select>
          </div>

          {/* Header */}
          <div className="mb-12">
            <span className={cn('text-[14px]', 'font-medium', 'text-neutral-500', 'dark:text-neutral-400', 'mb-3', 'block', 'underline', 'decoration-neutral-300', 'dark:decoration-neutral-700', 'underline-offset-4')}>
              Platform Capabilities
            </span>
            <h1 className={cn('text-3xl', 'md:text-[38px]', 'leading-tight', 'font-bold', 'text-neutral-900', 'dark:text-white', 'tracking-tight', 'mb-3')}>
              Powerful Features for Modern Messaging
            </h1>
            <p className={cn('text-[15px]', 'text-neutral-600', 'dark:text-neutral-400', 'leading-relaxed')}>
              Discover the full suite of communication APIs, real-time OTP routing, intelligent carrier failovers, and developer tools powering Rajdoot.
            </p>
          </div>

          {/* Quick Overview Summary Grid (when All is selected) */}
          {activeCategory === 'all' && searchQuery === '' && (
            <div className={cn('grid', 'sm:grid-cols-2', 'gap-4', 'mb-16')}>
              {[
                {
                  title: 'Sub-2s Dispatch SLA',
                  desc: 'Direct carrier connections provide instantaneous transactional delivery worldwide.',
                  icon: <FlashIcon size={22} className="text-neutral-700 dark:text-neutral-300" />
                },
                {
                  title: 'Developer Sandbox',
                  desc: 'Simulate verification codes and responses without consuming live billing units.',
                  icon: <CodeIcon size={22} className="text-neutral-700 dark:text-neutral-300" />
                },
                {
                  title: 'Telecom Carrier Failover',
                  desc: 'Multi-route redundancy automatically reroutes around carrier latency spikes.',
                  icon: <GlobeIcon size={22} className="text-neutral-700 dark:text-neutral-300" />
                },
                {
                  title: 'End-to-End Encryption',
                  desc: 'Encrypted payloads, TLS in transit, and automatic secret token invalidation.',
                  icon: <Shield01Icon size={22} className="text-neutral-700 dark:text-neutral-300" />
                }
              ].map((card, idx) => (
                <div
                  key={idx}
                  className={cn(
                    'border', 'border-neutral-200', 'dark:border-neutral-800',
                    'rounded-xl', 'p-6',
                    'hover:border-neutral-300', 'dark:hover:border-neutral-700',
                    'transition-all', 'bg-white', 'dark:bg-neutral-900',
                    'flex', 'flex-col', 'items-start'
                  )}
                >
                  <div className={cn('w-12', 'h-12', 'rounded-full', 'border', 'border-neutral-100', 'dark:border-neutral-800', 'flex', 'items-center', 'justify-center', 'mb-4', 'bg-neutral-50', 'dark:bg-neutral-950')}>
                    {card.icon}
                  </div>
                  <h3 className={cn('text-[15px]', 'font-semibold', 'text-neutral-900', 'dark:text-white', 'mb-2')}>
                    {card.title}
                  </h3>
                  <p className={cn('text-[14px]', 'leading-[1.6]', 'text-neutral-500', 'dark:text-neutral-400')}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Feature Categories Detail Sections */}
          <div className="space-y-16">
            {filteredCategories.map((group) => (
              <div key={group.id} className="space-y-6">
                {/* Category Header */}
                <div className="pb-3 border-b border-neutral-200 dark:border-neutral-800">
                  <h2 className={cn('text-xl', 'font-semibold', 'text-neutral-900', 'dark:text-white', 'mb-1', 'tracking-tight')}>
                    {group.category}
                  </h2>
                  <p className={cn('text-[14px]', 'text-neutral-500', 'dark:text-neutral-400')}>
                    {group.description}
                  </p>
                </div>

                {/* Items Grid */}
                <div className={cn('grid', 'sm:grid-cols-3', 'gap-4')}>
                  {group.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className={cn(
                        'border', 'border-neutral-200', 'dark:border-neutral-800',
                        'rounded-xl', 'p-5',
                        'hover:border-neutral-300', 'dark:hover:border-neutral-700',
                        'transition-all', 'bg-white', 'dark:bg-neutral-900',
                        'flex', 'flex-col', 'justify-between'
                      )}
                    >
                      <div>
                        <div className={cn('w-10', 'h-10', 'rounded-lg', 'border', 'border-neutral-100', 'dark:border-neutral-800', 'flex', 'items-center', 'justify-center', 'mb-4', 'bg-neutral-50', 'dark:bg-neutral-950')}>
                          {item.icon}
                        </div>
                        <h4 className={cn('text-[14px]', 'font-semibold', 'text-neutral-900', 'dark:text-white', 'mb-2')}>
                          {item.title}
                        </h4>
                        <p className={cn('text-[13px]', 'leading-[1.6]', 'text-neutral-500', 'dark:text-neutral-400')}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {filteredCategories.length === 0 && (
              <div className="py-16 text-center border border-neutral-200 dark:border-neutral-800 rounded-xl bg-neutral-50 dark:bg-neutral-900">
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  No features matched your search term "{searchQuery}".
                </p>
              </div>
            )}
          </div>

          {/* Bottom Next Steps */}
          <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-[14px] font-semibold text-neutral-900 dark:text-white mb-1">
                Ready to integrate Rajdoot?
              </h4>
              <p className="text-[13px] text-neutral-500 dark:text-neutral-400">
                Check our documentation quickstart or explore the full API reference.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/docs"
                className="px-4 py-2 text-xs font-semibold rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
              >
                Read Documentation
              </Link>
              <Link
                to="/plans"
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
              >
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Features;