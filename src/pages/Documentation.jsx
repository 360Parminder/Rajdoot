import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import FeatureCard from '../components/ui/FeatureCard';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import { 
  DOCUMENTATION_SECTIONS, 
  QUICK_START_GUIDE, 
  RESOURCES, 
  fadeInUp, 
  staggerContainer 
} from '../components/documentation/DocumentationData';
import { 
  CodeBlock, 
  GettingStartedSection, 
  AuthenticationSection, 
  DefaultSection 
} from '../components/documentation/DocumentationSections';

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('getting-started');

  // Filter sections based on search query
  const filteredSections = DOCUMENTATION_SECTIONS.filter(section => 
    section.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render section content based on active section
  const renderSectionContent = () => {
    switch (activeSection) {
      case 'getting-started':
        return <GettingStartedSection />;
      case 'authentication':
        return <AuthenticationSection />;
      default:
        return <DefaultSection title={DOCUMENTATION_SECTIONS.find(s => s.id === activeSection)?.title} />;
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

export default Documentation;