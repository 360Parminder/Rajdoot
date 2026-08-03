import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Zap, 
  Shield, 
  BarChart, 
  Globe, 
  Code,
  Clock,
  Users,
  Bell,
  Settings,
  Database,
  Lock
} from 'lucide-react';
import FeatureCard from '../components/ui/FeatureCard';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Features = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const features = [
    {
      category: "Core Features",
      items: [
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
        }
      ]
    },
    {
      category: "Developer Tools",
      items: [
        {
          icon: <Code className="w-6 h-6" />,
          title: "RESTful APIs",
          description: "Comprehensive REST APIs with detailed documentation and SDK support.",
          color: "purple"
        },
        {
          icon: <Database className="w-6 h-6" />,
          title: "Webhooks",
          description: "Real-time event notifications through configurable webhooks.",
          color: "pink"
        },
        {
          icon: <Settings className="w-6 h-6" />,
          title: "Custom Integrations",
          description: "Seamlessly integrate with your existing tools and workflows.",
          color: "indigo"
        }
      ]
    },
    {
      category: "Analytics & Insights",
      items: [
        {
          icon: <BarChart className="w-6 h-6" />,
          title: "Message Analytics",
          description: "Detailed insights into message delivery, engagement, and performance.",
          color: "red"
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "User Management",
          description: "Comprehensive user management with role-based access control.",
          color: "orange"
        },
        {
          icon: <Bell className="w-6 h-6" />,
          title: "Smart Notifications",
          description: "Intelligent notification system with customizable delivery rules.",
          color: "teal"
        }
      ]
    },
    {
      category: "Enterprise Features",
      items: [
        {
          icon: <Globe className="w-6 h-6" />,
          title: "Global Infrastructure",
          description: "Distributed infrastructure ensuring high availability and low latency.",
          color: "cyan"
        },
        {
          icon: <Lock className="w-6 h-6" />,
          title: "Compliance",
          description: "Built-in compliance features for GDPR, HIPAA, and other regulations.",
          color: "gray"
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "24/7 Support",
          description: "Round-the-clock technical support and dedicated account management.",
          color: "blue"
        }
      ]
    }
  ];

  return (
    <AnimatedBackground>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Powerful Features for Modern Communication
            </motion.h1>
            <motion.p 
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Discover the comprehensive suite of features that make Rajdoot the perfect choice for your messaging needs.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-12">
            {features.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <h2 className="text-2xl font-bold text-white">{category.category}</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.items.map((feature, featureIndex) => (
                    <FeatureCard
                      key={featureIndex}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                      color={feature.color}
                      delay={featureIndex * 0.1}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already using Rajdoot to build powerful messaging applications.
            </p>
            <motion.button
              onClick={()=>{user ? navigate('/dashboard') : navigate('/register')}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-shadow"
            >
              Start Building Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedBackground>
  );
};
export default Features; 