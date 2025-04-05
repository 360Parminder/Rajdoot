import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Book, 
  Code, 
  FileText, 
  Terminal, 
  Database, 
  Settings,
  Search,
  ArrowRight,
  BookOpen,
  FileCode,
  Zap,
  Shield,
  Globe,
  ChevronRight
} from 'lucide-react';
import FeatureCard from '../components/ui/FeatureCard';
import AnimatedBackground from '../components/ui/AnimatedBackground';

// Documentation sections data
const DOCUMENTATION_SECTIONS = [
  { id: 'getting-started', title: 'Getting Started', icon: <Book className="w-5 h-5" /> },
  { id: 'authentication', title: 'Authentication', icon: <Shield className="w-5 h-5" /> },
  { id: 'messaging', title: 'Messaging', icon: <FileText className="w-5 h-5" /> },
  { id: 'webhooks', title: 'Webhooks', icon: <Zap className="w-5 h-5" /> },
  { id: 'analytics', title: 'Analytics', icon: <Database className="w-5 h-5" /> },
  { id: 'sdk', title: 'SDKs & Libraries', icon: <Code className="w-5 h-5" /> },
  { id: 'api-reference', title: 'API Reference', icon: <Terminal className="w-5 h-5" /> },
  { id: 'configuration', title: 'Configuration', icon: <Settings className="w-5 h-5" /> }
];

// Quick start guide data
const QUICK_START_GUIDE = [
  {
    title: "Installation",
    description: "Install the Rajdoot SDK using npm or yarn",
    code: "npm install @rajdoot/sdk",
    color: "blue"
  },
  {
    title: "Authentication",
    description: "Set up your API key for authentication",
    code: "const raj = new Rajdoot({ apiKey: 'your_api_key' })",
    color: "purple"
  },
  {
    title: "Send a Message",
    description: "Send your first message using the API",
    code: "await raj.messages.send({ to: '+1234567890', text: 'Hello from Rajdoot!' })",
    color: "green"
  }
];

// Resources data
const RESOURCES = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "API Reference",
    description: "Comprehensive documentation for all API endpoints",
    color: "blue",
    link: "/api-reference"
  },
  {
    icon: <FileCode className="w-6 h-6" />,
    title: "Code Examples",
    description: "Ready-to-use code examples in multiple languages",
    color: "purple",
    link: "/docs/examples"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "SDKs & Libraries",
    description: "Official SDKs for popular programming languages",
    color: "green",
    link: "/docs/sdk"
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const DocumentationNew = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('getting-started');

  // Filter sections based on search query
  const filteredSections = DOCUMENTATION_SECTIONS.filter(section => 
    section.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render code block with syntax highlighting
  const CodeBlock = ({ code }) => (
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <code className="text-sm text-gray-300">{code}</code>
    </div>
  );

  // Render section content based on active section
  const renderSectionContent = () => {
    switch (activeSection) {
      case 'getting-started':
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
        
      case 'authentication':
        return (
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
        
      default:
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              {DOCUMENTATION_SECTIONS.find(s => s.id === activeSection)?.title}
            </h2>
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
    }
  };

  return (
    <AnimatedBackground>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
              variants={fadeInUp}
            >
              Documentation
            </motion.h1>
            <motion.p 
              className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
              variants={fadeInUp}
            >
              Everything you need to know to integrate Rajdoot into your applications.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div
              variants={fadeInUp}
              className="max-w-xl mx-auto relative"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="md:col-span-1"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 sticky top-24">
                <h3 className="text-lg font-semibold text-white mb-4">Documentation</h3>
                <ul className="space-y-2">
                  {filteredSections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                          activeSection === section.id
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                        }`}
                      >
                        <span className="mr-3">{section.icon}</span>
                        <span>{section.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="md:col-span-3"
            >
              {/* Quick Start Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Quick Start Guide</h2>
                <motion.div 
                  className="grid md:grid-cols-3 gap-6"
                  variants={staggerContainer}
                >
                  {QUICK_START_GUIDE.map((item, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <FeatureCard
                        title={item.title}
                        description={item.description}
                        color={item.color}
                        delay={index * 0.1}
                        className="h-full"
                      >
                        <div className="mt-4">
                          <CodeBlock code={item.code} />
                        </div>
                      </FeatureCard>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Resources Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Resources</h2>
                <motion.div 
                  className="grid md:grid-cols-3 gap-6"
                  variants={staggerContainer}
                >
                  {RESOURCES.map((resource, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <Link to={resource.link}>
                        <FeatureCard
                          icon={resource.icon}
                          title={resource.title}
                          description={resource.description}
                          color={resource.color}
                          delay={index * 0.1}
                          className="h-full cursor-pointer"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Content Sections */}
              <div className="space-y-12">
                {renderSectionContent()}
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Start integrating Rajdoot into your applications today and unlock the power of modern messaging.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-shadow"
                >
                  Get Started Free
                </motion.button>
              </Link>
              <Link to="/api-reference">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                >
                  View API Reference
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedBackground>
  );
};

export default DocumentationNew; 