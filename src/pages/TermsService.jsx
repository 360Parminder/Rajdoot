import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AnimatedBackground from '../components/ui/AnimatedBackground';

const TermsService = () => {
  return (
    <AnimatedBackground>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="mb-12">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </motion.button>
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-4"
            >
              Terms of Service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400"
            >
              Last updated: April 5, 2024
            </motion.p>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="prose prose-invert max-w-none"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6">
                By accessing and using Rajdoot's services, you agree to be bound by these Terms of Service
                and all applicable laws and regulations. If you do not agree with any of these terms, you
                are prohibited from using or accessing our services.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p className="text-gray-300 mb-6">
                Permission is granted to temporarily access and use Rajdoot's services for personal or
                commercial purposes, subject to the following restrictions:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6">
                <li>You must not modify or copy the materials</li>
                <li>You must not use the materials for any unlawful purpose</li>
                <li>You must not attempt to reverse engineer any software</li>
                <li>You must not remove any copyright or proprietary notations</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">3. Service Description</h2>
              <p className="text-gray-300 mb-6">
                Rajdoot provides a messaging API platform that enables developers to integrate messaging
                capabilities into their applications. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6">
                <li>Message sending and receiving</li>
                <li>API access and integration</li>
                <li>Analytics and reporting</li>
                <li>Developer tools and documentation</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">4. User Obligations</h2>
              <p className="text-gray-300 mb-6">
                As a user of Rajdoot's services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Use the services in accordance with these terms</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">5. Privacy Policy</h2>
              <p className="text-gray-300 mb-6">
                Your use of Rajdoot's services is also governed by our Privacy Policy. Please review our
                Privacy Policy, which also governs the Site and informs users of our data collection
                practices.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">6. Disclaimer</h2>
              <p className="text-gray-300 mb-6">
                The materials on Rajdoot's website and services are provided on an 'as is' basis. Rajdoot
                makes no warranties, expressed or implied, and hereby disclaims and negates all other
                warranties including, without limitation, implied warranties or conditions of
                merchantability, fitness for a particular purpose, or non-infringement of intellectual
                property or other violation of rights.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">7. Contact Information</h2>
              <p className="text-gray-300">
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:support@rajdoot.com" className="text-blue-400 hover:text-blue-300">
                  support@rajdoot.com
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedBackground>
  );
};

export default TermsService;
