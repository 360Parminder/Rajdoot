import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AnimatedBackground from '../../components/ui/AnimatedBackground';

const CookiePolicy = () => {
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
              Cookie Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400"
            >
              Last updated: {new Date().toLocaleDateString()}
            </motion.p>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <motion.section 
              whileHover={{ y: -2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all"
            >
              <h2 className="text-2xl font-bold text-white mb-4">What are cookies?</h2>
              <p className="text-gray-300 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
            </motion.section>

            <motion.section 
              whileHover={{ y: -2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all"
            >
              <h2 className="text-2xl font-bold text-white mb-4">How we use cookies</h2>
              <p className="text-gray-300 mb-4">We use cookies for several reasons, including:</p>
              <ul className="list-disc ml-6 text-gray-300 space-y-2">
                <li>Essential cookies: These cookies are necessary for the website to function properly.</li>
                <li>Preference cookies: These cookies remember your preferences and settings.</li>
                <li>Analytics cookies: These cookies help us understand how visitors interact with our website.</li>
                <li>Marketing cookies: These cookies are used to track visitors across websites to display relevant advertisements.</li>
              </ul>
            </motion.section>

            <motion.section 
              whileHover={{ y: -2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Types of cookies we use</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  <span className="font-semibold text-blue-400">First-party cookies:</span> These are cookies that are set by our website.
                </p>
                <p>
                  <span className="font-semibold text-blue-400">Third-party cookies:</span> These are cookies set by someone other than us when you visit our website.
                </p>
              </div>
            </motion.section>

            <motion.section 
              whileHover={{ y: -2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Managing cookies</h2>
              <p className="text-gray-300 mb-4">
                Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, 
                or to alert you when cookies are being sent. The following links show how to adjust cookie settings in some 
                popular browsers:
              </p>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://support.google.com/chrome/answer/95647" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a 
                    href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a 
                    href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Microsoft Edge
                  </a>
                </li>
                <li>
                  <a 
                    href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apple Safari
                  </a>
                </li>
              </ul>
            </motion.section>

            <motion.section 
              whileHover={{ y: -2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Changes to our Cookie Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting 
                the new Cookie Policy on this page and updating the "Last Updated" date.
              </p>
            </motion.section>

            <motion.section 
              whileHover={{ y: -2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Contact us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about our Cookie Policy, please contact us at:
              </p>
              <div className="text-gray-300 space-y-2">
                <p>Email: <a href="mailto:360.parminder@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">360.parminder@gmail.com</a></p>
                <p>Address: Rajdoot, Alwar, Rajasthan, India</p>
              </div>
            </motion.section>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedBackground>
  );
};

export default CookiePolicy;