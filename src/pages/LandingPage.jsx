import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { joinWaitlist } from '../api/waitlist';
import { useAuth } from '../hooks/useAuth';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const slideIn = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const LandingPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await joinWaitlist(email);
      if (data.success) {
        setIsSubmitted(true);
        setEmail('');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error joining waitlist:", error);
      alert("Failed to join waitlist. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-300">
      {/* Hero Section with Animated Background */}
        <header className="py-24 border-b border-gray-900 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
          background: [
            'linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)',
            'linear-gradient(45deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)',
            'linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)'
          ]
            }}
            transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
            }}
          />

          <div className="container mx-auto px-6 flex flex-col items-center text-center relative">
            <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
            >
          Elevate Your Applications with Powerful Messaging APIs
            </motion.h1>
            <motion.p
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
            >
          Rajdoot combines enterprise-grade reliability with developer-friendly design.
          Build secure, scalable messaging solutions with just a few lines of code.
            </motion.p>
            <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
            >
          {/* {
            !user ? (
              <motion.button
            onClick={() => navigate('/register')}
            className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-sm text-lg font-medium transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
              >
            Get Started
              </motion.button>
            ) : null
          } */}
                  
          <motion.button
            onClick={() => navigate('/docs')}
            className="bg-transparent hover:bg-gray-900 text-white px-8 py-3 rounded-sm text-lg font-medium transition border border-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Documentation
          </motion.button>
            </motion.div>
          </div>
        </header>

        {/* Features */}
      <section id="features" className="py-24 border-b border-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-20 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            Why Choose Rajdoot
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>,
                title: "Reliable SMS Delivery",
                description: "Send SMS messages globally with high deliverability rates and real-time delivery status updates."
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>,
                title: "OTP Authentication",
                description: "Secure one-time password generation and verification coming soon. Join our waitlist for early access."
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>,
                title: "Developer-Friendly",
                description: "Simple REST APIs, comprehensive documentation, and client libraries for all major programming languages."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-10 rounded-sm"
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="w-16 h-16 rounded-sm flex items-center justify-center mb-8 border border-gray-800"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {feature.icon}
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 border-b border-gray-900 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-20 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            Transparent Pricing
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              {
                title: "Free Tier",
                price: "$0",
                period: "/month",
                popular: false,
                features: ["50 SMS messages/month", "Basic API access", "Community support"],
                buttonText: "Start Free"
              },
              {
                title: "Pro",
                price: "$7",
                period: "/month",
                popular: true,
                features: ["5,000 SMS messages/month", "Full API access", "Email support", "Detailed analytics"],
                buttonText: "Subscribe Now"
              },
              {
                title: "Enterprise",
                price: "Custom",
                period: "",
                popular: false,
                features: ["Unlimited messages", "Priority API access", "Dedicated support", "Custom integrations"],
                buttonText: "Contact Sales"
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-black rounded-sm overflow-hidden border ${plan.popular ? 'border-white transform scale-105 shadow-2xl' : 'border-gray-900'}`}
                variants={fadeIn}
                whileHover={!plan.popular ? { y: -10, transition: { duration: 0.3 } } : {}}
              >
                {plan.popular && (
                  <motion.div
                    className="bg-white py-2 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="font-medium text-black">Most Popular</span>
                  </motion.div>
                )}
                <div className="p-10">
                  <h3 className="text-xl font-semibold mb-4 text-white">{plan.title}</h3>
                  <p className="text-4xl font-bold mb-8 text-white">{plan.price}<span className="text-lg text-gray-500">{plan.period}</span></p>
                  <motion.ul
                    className="space-y-4 mb-10"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li key={featureIndex} className="flex items-center" variants={slideIn}>
                        <svg className="w-5 h-5 mr-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                <div className="p-8 bg-gray-900 border-t border-gray-800">
                  <motion.button
                    onClick={() => navigate('/register')}

                    className={`w-full ${plan.popular ? 'bg-white hover:bg-gray-200 text-black' : 'bg-black hover:bg-gray-800 text-white border border-gray-800'} px-6 py-3 rounded-sm font-medium transition`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {plan.buttonText}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            className="bg-gray-900 p-12 rounded-sm border border-gray-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              className="text-3xl font-bold text-center mb-8 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Join Our OTP API Waitlist
            </motion.h2>
            <motion.p
              className="text-gray-400 text-center mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Be the first to access our upcoming OTP authentication APIs.
              Early access members will receive exclusive benefits and discounted pricing.
            </motion.p>

            {isSubmitted ? (
              <motion.div
                className="bg-black text-white p-6 rounded-sm text-center border border-gray-800"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <p>Thank you for joining our waitlist. We'll notify you when our OTP APIs are ready.</p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow bg-black text-white px-6 py-4 rounded-sm focus:outline-none focus:border-white border border-gray-800"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <motion.button
                  type="submit"
                  className="bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-sm font-medium transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Waitlist
                </motion.button>
              </motion.form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
