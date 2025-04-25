import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Zap, 
  Shield, 
  BarChart, 
  Globe, 
  Code,
  ArrowRight,
  Check,
  Star
} from 'lucide-react';
import FeatureCard from '../components/ui/FeatureCard';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import { useFetchPlans } from '../hooks/fetchPlans';
import { useAuth } from '../hooks/useAuth';

const LandingPage = () => {
  const {plans}= useFetchPlans();
  const {user}=  useAuth();
  
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Advanced Messaging",
      description: "Send and receive messages with support for text, media, and rich content formats.",
      color: "blue"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Delivery",
      description: "Lightning-fast message delivery with real-time status updates and receipts.",
      color: "yellow"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "End-to-End Encryption",
      description: "Enterprise-grade security with end-to-end encryption for all communications.",
      color: "green"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "RESTful APIs",
      description: "Comprehensive REST APIs with detailed documentation and SDK support.",
      color: "purple"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Message Analytics",
      description: "Detailed insights into message delivery, engagement, and performance.",
      color: "red"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Infrastructure",
      description: "Distributed infrastructure ensuring high availability and low latency.",
      color: "cyan"
    }
  ];

  // const plans = [
  //   {
  //     name: "Basic",
  //     price: "₹0",
  //     period: "First Month",
  //     description: "Perfect for getting started",
  //     features: [
  //       "Up to 1,000 messages/month",
  //       "Basic analytics",
  //       "Email support",
  //       "API access",
  //       "Webhook integration"
  //     ],
  //     color: "blue",
  //     recommended: false
  //   },
  //   {
  //     name: "Pro",
  //     price: "₹999",
  //     period: "per month",
  //     description: "Best for growing businesses",
  //     features: [
  //       "Up to 10,000 messages/month",
  //       "Advanced analytics",
  //       "Priority support",
  //       "Custom webhooks",
  //       "Team collaboration",
  //       "Advanced security features"
  //     ],
  //     color: "purple",
  //     recommended: true
  //   },
  //   {
  //     name: "Enterprise",
  //     price: "Custom",
  //     period: "contact us",
  //     description: "For large scale operations",
  //     features: [
  //       "Unlimited messages",
  //       "Custom analytics",
  //       "24/7 dedicated support",
  //       "Custom integrations",
  //       "SLA guarantee",
  //       "Advanced security features",
  //       "Custom deployment options"
  //     ],
  //     color: "indigo",
  //     recommended: false
  //   }
  // ];

  return (
    <AnimatedBackground>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto text-center mb-20"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Sophisticated Messaging APIs for Developers
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Build powerful messaging applications with our elegant, reliable, and affordable API platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/register">
              <motion.button
                whilehover={{ scale: 1.05 }}
                whiletap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-shadow"
              >
                Get Started Free
              </motion.button>
            </Link>
            <Link to="/docs">
              <motion.button
                whilehover={{ scale: 1.05 }}
                whiletap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                View Documentation
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the comprehensive suite of features that make Rajdoot the perfect choice for your messaging needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your messaging needs. All plans include our core features with different usage limits and support levels.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.filter(plan => plan.isActive).map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${plan.recommended ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {plan.recommended && (
                  <div className="absolute z-10 -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Recommended
                    </div>
                  </div>
                )}
                <FeatureCard
                  className={`h-full ${plan.recommended ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' : ''}`}
                  title={
                    <div className="flex items-center justify-between">
                      <span>{plan.name}</span>
                      {plan.recommended && <Star className="w-5 h-5 text-yellow-500" />}
                    </div>
                  }
                  description={
                    <div className="space-y-4">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400 ml-2">{plan.period}</span>
                      </div>
                      <p className="text-gray-400">{plan.description}</p>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-300">{feature.text}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to={user?'/plans':'/login'}>
                        <motion.button
                          whilehover={{ scale: 1.02 }}
                          whiletap={{ scale: 0.98 }}
                          className={`w-full  py-3 rounded-lg font-semibold transition-colors ${
                            plan.recommended
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/20'
                              : 'bg-gray-800 text-white hover:bg-gray-700'
                          }`}
                        >
                          {plan.name === "Basic" ? "Start Free" : plan.name === "Enterprise" ? "Contact Sales" : "Subscribe Now"}
                        </motion.button>
                      </Link>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already using Rajdoot to build powerful messaging applications.
          </p>
          <Link to="/register">
            <motion.button
              whilehover={{ scale: 1.05 }}
              whiletap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-shadow inline-flex items-center"
            >
              Start Building Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </AnimatedBackground>
  );
};

export default LandingPage;
