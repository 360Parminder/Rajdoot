import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home01Icon, BookOpen01Icon, CodeIcon, TerminalIcon, GlobeIcon, ServerIcon, ArrowRight01Icon, PlayCircleIcon, Box01Icon, FingerprintIcon, FileCodeIcon } from 'hugeicons-react';
import { useAuth } from '../hooks/useAuth';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sidebarGroups = [
    {
      title: null,
      items: [
        { id: 'home', label: 'Home', icon: <Home01Icon size={16} /> },
        { id: 'getting-started', label: 'Getting started', icon: <PlayCircleIcon size={16} /> },
        { id: 'guides', label: 'Guides', icon: <BookOpen01Icon size={16} /> },
        { id: 'ui-components', label: 'UI Components', icon: <Box01Icon size={16} /> },
        { id: 'api-reference', label: 'API Reference', icon: <CodeIcon size={16} /> },
      ]
    },
    {
      title: 'Core concepts',
      items: [
        { id: 'intro', label: 'Introduction' },
        { id: 'users', label: 'Users' },
        { id: 'organizations', label: 'Organizations' },
        { id: 'sessions', label: 'Session management' },
        { id: 'security', label: 'Security at Rajdoot' },
      ]
    },
    {
      title: 'SDK Reference',
      items: [
        { id: 'nextjs', label: 'Next.js', icon: <div className="w-4 h-4 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-[8px] font-bold">N</div> },
        { id: 'react', label: 'React', icon: <GlobeIcon size={16} /> },
        { id: 'javascript', label: 'Javascript', icon: <TerminalIcon size={16} /> },
        { id: 'nodejs', label: 'Node.js', icon: <ServerIcon size={16} /> },
        { id: 'remix', label: 'Remix', icon: <div className="w-4 h-4 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-[8px] font-bold">R</div> },
      ],
      showMore: 'See all frameworks'
    },
    {
      title: 'Reference',
      items: [
        { id: 'frontend-api', label: 'Frontend API' },
        { id: 'backend-api', label: 'Backend API' },
        { id: 'backend-sdk', label: 'Backend SDK' },
      ]
    }
  ];

  const quickLinks = [
    {
      title: 'Quickstarts & Tutorials',
      description: 'Explore our end-to-end tutorials and getting started guides for different application stacks using Rajdoot.',
      icon: <PlayCircleIcon strokeWidth={1.5} size={22} className="text-neutral-700 dark:text-neutral-300" />
    },
    {
      title: 'UI Components',
      description: 'Rajdoot\'s pre-built UI components give you a beautiful, fully-functional user management experience in minutes.',
      icon: <Box01Icon strokeWidth={1.5} size={22} className="text-neutral-700 dark:text-neutral-300" />
    },
    {
      title: 'Security',
      description: 'Security is the top concern of every feature we build. This documentation lists some of the many protections included.',
      icon: <FingerprintIcon strokeWidth={1.5} size={22} className="text-neutral-700 dark:text-neutral-300" />
    },
    {
      title: 'API Reference',
      description: 'Dig into our API reference documentation and SDKs. We have everything you need to get started setting up messaging.',
      icon: <FileCodeIcon strokeWidth={1.5} size={22} className="text-neutral-700 dark:text-neutral-300" />
    }
  ];

  const frameworks = [
    {
      name: 'Next.js',
      description: 'Easily add secure, beautiful, and fast messaging to Next.js with Rajdoot.',
      icon: <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">N</div>
    },
    {
      name: 'Gatsby',
      description: 'Learn about installing and initializing Rajdoot in a new Gatsby application.',
      icon: <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold">G</div>
    },
    {
      name: 'Remix',
      description: 'Get started installing and initializing Rajdoot in a new Remix application.',
      icon: <div className="w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-sm font-bold">R</div>
    },
    {
      name: 'React',
      description: 'Get started installing and initializing Rajdoot in a new Create React App.',
      icon: <div className="w-8 h-8 rounded-full bg-[#61DAFB] text-black flex items-center justify-center text-sm font-bold">⚛</div>
    },
    {
      name: 'Redwood',
      description: 'Grow your RedwoodJS application with Rajdoot user management.',
      icon: <div className="w-8 h-8 rounded-full bg-[#BF4722] text-white flex items-center justify-center text-sm font-bold">RW</div>
    },
    {
      name: 'Expo',
      description: 'Use Rajdoot with Expo to authenticate users in your React Native application.',
      icon: <div className="w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-sm font-bold">^</div>
    }
  ];

  return (
    <div className="flex min-h-screen bg-white dark:bg-neutral-950 pt-20 font-['Inter'] text-left">
      
      {/* Sidebar */}
      <aside className="w-[280px] hidden md:block flex-shrink-0 border-r border-neutral-200 dark:border-neutral-800 h-[calc(100vh-80px)] sticky top-20 overflow-y-auto">
        <nav className="p-4 space-y-8 mt-2">
          {sidebarGroups.map((group, index) => (
            <div key={index}>
              {group.title && (
                <h4 className="text-[12px] font-semibold text-neutral-500 dark:text-neutral-400 mb-2 px-3">
                  {group.title}
                </h4>
              )}
              <ul className="space-y-[2px]">
                {group.items.map(item => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-1.5 text-[14px] rounded-md transition-colors ${
                        activeSection === item.id
                          ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-medium'
                          : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-neutral-200'
                      }`}
                    >
                      {item.icon && <span className="flex-shrink-0 opacity-70">{item.icon}</span>}
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
              {group.showMore && (
                <button className="flex items-center gap-1 px-3 mt-3 text-[13px] font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200">
                  {group.showMore} <ArrowRight01Icon size={14} />
                </button>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-x-hidden p-6 md:p-10 lg:p-16">
        <div className="max-w-[850px] mx-auto">
          {activeSection === 'home' ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Header */}
              <div className="mb-14">
                <span className="text-[14px] font-medium text-neutral-500 dark:text-neutral-400 mb-4 block underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4">Get setup</span>
                <h1 className="text-3xl md:text-[40px] leading-tight font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
                  Introducing the new Rajdoot documentation
                </h1>
                <p className="text-[16px] text-neutral-600 dark:text-neutral-400 max-w-2xl">
                  Find all the guides and resources you need to develop with Rajdoot.
                </p>
              </div>

              {/* Quick Links Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-20">
                {quickLinks.map((link, index) => (
                  <div 
                    key={index} 
                    className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 hover:shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-all cursor-pointer bg-white dark:bg-neutral-900 flex flex-col items-start"
                  >
                    <div className="w-12 h-12 rounded-full border border-neutral-100 dark:border-neutral-800 flex items-center justify-center mb-5 bg-neutral-50 dark:bg-neutral-950">
                      {link.icon}
                    </div>
                    <h3 className="text-[15px] font-semibold text-neutral-900 dark:text-white mb-2">{link.title}</h3>
                    <p className="text-[14px] leading-[1.6] text-neutral-500 dark:text-neutral-400">
                      {link.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Frameworks Section */}
              <div className="mb-12">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2 tracking-tight">
                  Explore by frontend framework
                </h2>
                <p className="text-[15px] text-neutral-600 dark:text-neutral-400 mb-8">
                  Find all the guides and resources you need to develop with Rajdoot.
                </p>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                  {frameworks.map((fw, index) => (
                    <div key={index} className="flex gap-4 cursor-pointer group">
                      <div className="flex-shrink-0 pt-0.5 group-hover:scale-105 transition-transform">
                        {fw.icon}
                      </div>
                      <div>
                        <h4 className="text-[15px] font-semibold text-neutral-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {fw.name}
                        </h4>
                        <p className="text-[14px] text-neutral-500 dark:text-neutral-400 leading-[1.5]">
                          {fw.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-10"
            >
              <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
                {sidebarGroups.flatMap(g => g.items).find(i => i.id === activeSection)?.label || 'Documentation Section'}
              </h1>
              <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-8 bg-neutral-50 dark:bg-neutral-900/50">
                <p className="text-neutral-500 dark:text-neutral-400 text-center py-12 text-[15px]">
                  Content for this section is currently being written. Please check back later.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Documentation;