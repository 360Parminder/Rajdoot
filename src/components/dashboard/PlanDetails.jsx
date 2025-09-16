import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Check, AlertCircle, Zap, Crown, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const PlanDetails = ({handleTabClick}) => {
  const { user } = useAuth();
  const currentPlan = user?.plan?.plans[0]?.planId;

  // Calculate usage percentage
  const usagePercentage = user?.monthlyMessageLimit 
    ? Math.min(100, (user.messageCount / user.monthlyMessageLimit) * 100)
    : 0;

  const getPlanIcon = (planName) => {
    switch (planName?.toLowerCase()) {
      case 'pro':
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 'premium':
        return <Zap className="w-6 h-6 text-purple-500" />;
      default:
        return <Star className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
          Current Plan Details
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
          View your current subscription plan and its features.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Plan Overview Card */}
        <div className="bg-neutral-100 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700 rounded-xl p-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              {getPlanIcon(currentPlan?.name)}
              <div>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                  {currentPlan?.name || 'Free'} Plan
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {currentPlan?.description || 'Basic plan with limited features'}
                </p>
              </div>
            </div>
            <span className="px-3 py-1 text-sm font-medium bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full">
              Active
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-neutral-200 dark:bg-neutral-700/50 rounded-lg">
              <span className="text-neutral-700 dark:text-neutral-300">Monthly Price</span>
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                ${currentPlan?.price || '0'}/month
              </span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-neutral-200 dark:bg-neutral-700/50 rounded-lg">
              <span className="text-neutral-700 dark:text-neutral-300">API Calls</span>
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                {currentPlan?.apiCalls || '100'}/month
              </span>
            </div>
            
            <div className="p-3 bg-neutral-200 dark:bg-neutral-700/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-neutral-700 dark:text-neutral-300">Message Usage</span>
                <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                  {user?.messageCount || 0} / {user?.monthlyMessageLimit || 50}
                </span>
              </div>
              <div className="w-full bg-neutral-300 dark:bg-neutral-600 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${usagePercentage}%` }}
                ></div>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                {usagePercentage.toFixed(0)}% of monthly limit used
              </p>
            </div>
          </div>
        </div>

        {/* Features Card */}
        <div className="bg-neutral-100 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">Plan Features</h2>
          <div className="space-y-4">
            {currentPlan?.features?.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700 dark:text-neutral-300">{feature.text}</span>
              </div>
            )) || (
              <>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 dark:text-neutral-300">Basic API Access</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 dark:text-neutral-300">Limited Message Quota</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 dark:text-neutral-300">Standard Support</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 dark:text-neutral-300">Email Notifications</span>
                </div>
              </>
            )}
          </div>

          {/* Usage Warning */}
          {user?.messageCount >= user?.monthlyMessageLimit && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg"
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 dark:text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-red-700 dark:text-red-400 font-medium">Usage Limit Reached</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                    You've reached your monthly message limit. Consider upgrading your plan for more features.
                  </p>
                  <button
                    onClick={() => handleTabClick('upgrade')}
                    className="mt-2 text-sm text-red-700 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-medium"
                  >
                    Upgrade Plan →
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Upgrade CTA */}
          {(!currentPlan || currentPlan.name === 'Free') && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-blue-100 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700 rounded-lg"
            >
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-blue-700 dark:text-blue-400 font-medium">Unlock More Features</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                    Upgrade to a premium plan for higher limits, priority support, and advanced features.
                  </p>
                  <button
                    onClick={() => handleTabClick('upgrade')}
                    className="mt-2 text-sm text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                  >
                    View Upgrade Options →
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Additional Plan Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 bg-neutral-100 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700 rounded-xl p-6"
      >
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Billing Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-neutral-200 dark:bg-neutral-700/50 rounded-lg">
            <span className="text-neutral-600 dark:text-neutral-400 text-sm">Billing Cycle</span>
            <p className="font-medium text-neutral-900 dark:text-neutral-100">Monthly</p>
          </div>
          <div className="p-3 bg-neutral-200 dark:bg-neutral-700/50 rounded-lg">
            <span className="text-neutral-600 dark:text-neutral-400 text-sm">Next Billing Date</span>
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {user?.plan?.plans[0]?.expiryDate 
                ? new Date(user.plan.plans[0].expiryDate).toLocaleDateString()
                : 'N/A'
              }
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PlanDetails;