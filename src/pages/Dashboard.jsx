import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  BarChart, 
  Settings, 
  Users, 
  ArrowRight,
  Zap,
  Shield,
  Globe
} from 'lucide-react';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import FeatureCard from '../components/ui/FeatureCard';

const Dashboard = () => {
  const stats = [
    { title: 'Total Messages', value: '1,234', icon: <MessageSquare className="w-6 h-6" />, color: 'blue' },
    { title: 'Active Users', value: '567', icon: <Users className="w-6 h-6" />, color: 'purple' },
    { title: 'Success Rate', value: '99.9%', icon: <Zap className="w-6 h-6" />, color: 'green' },
    { title: 'API Calls', value: '89.2K', icon: <Globe className="w-6 h-6" />, color: 'orange' },
  ];

  const quickActions = [
    {
      title: 'Send Message',
      description: 'Send a new message to your contacts',
      icon: <MessageSquare className="w-6 h-6" />,
      color: 'blue',
      link: '/messages/new'
    },
    {
      title: 'View Analytics',
      description: 'Check your messaging analytics',
      icon: <BarChart className="w-6 h-6" />,
      color: 'purple',
      link: '/analytics'
    },
    {
      title: 'Manage Settings',
      description: 'Configure your account settings',
      icon: <Settings className="w-6 h-6" />,
      color: 'green',
      link: '/settings'
    },
    {
      title: 'Security',
      description: 'Manage your security settings',
      icon: <Shield className="w-6 h-6" />,
      color: 'orange',
      link: '/security'
    }
  ];

  return (
    <AnimatedBackground>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <div className="mb-12">
            <motion.h1 
              className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Dashboard
            </motion.h1>
            <motion.p 
              className="text-gray-400 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Welcome back! Here's an overview of your account.
            </motion.p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-lg bg-${stat.color}-500/10`}>
                      {stat.icon}
                    </div>
                  </div>
                  <h3 className="text-gray-400 text-sm mb-1">{stat.title}</h3>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link to={action.link}>
                    <FeatureCard
                      icon={action.icon}
                      title={action.title}
                      description={action.description}
                      color={action.color}
                      className="h-full cursor-pointer"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg"
                >
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-blue-500/10 mr-4">
                      <MessageSquare className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Message Sent</p>
                      <p className="text-gray-400 text-sm">2 hours ago</p>
                    </div>
                  </div>
                  <Link to="/messages">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Details
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedBackground>
  );
};

export default Dashboard;