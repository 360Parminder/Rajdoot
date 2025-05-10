import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Check, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const PlanDetails = ({handleTabClick}) => {
  const { user } = useAuth();
  const currentPlan = user?.plan?.plans[0]?.planId;

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
          Current Plan Details
        </h1>
        <p className="text-gray-400 max-w-2xl">
          View your current subscription plan and its features.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Plan Overview Card */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-200 mb-2">
                {currentPlan?.name || 'Free'} Plan
              </h2>
              <p className="text-gray-400">
                {currentPlan?.description || 'Basic plan with limited features'}
              </p>
            </div>
            <span className="px-3 py-1 text-sm font-medium bg-indigo-500/20 text-indigo-400 rounded-full">
              Active
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
              <span className="text-gray-300">Monthly Price</span>
              <span className="font-semibold text-gray-200">
                {currentPlan?.price || '0'}/month
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
              <span className="text-gray-300">API Calls</span>
              <span className="font-semibold text-gray-200">
                {currentPlan?.apiCalls || '100'}/month
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
              <span className="text-gray-300">Message Limit</span>
              <span className="font-semibold text-gray-200">
                {currentPlan?.monthlylimit || '50'}/month
              </span>
            </div>
          </div>
        </div>

        {/* Features Card */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-200 mb-6">Plan Features</h2>
          <div className="space-y-4">
            {currentPlan?.features?.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5" />
                <span className="text-gray-300">{feature.text}</span>
              </div>
            )) || (
              <>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-gray-300">Basic API Access</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-gray-300">Limited Message Quota</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-gray-300">Standard Support</span>
                </div>
              </>
            )}
          </div>

          {/* Usage Warning */}
          {user?.messageCount >= user?.monthlyMessageLimit && (
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" />
                <div>
                  <h3 className="text-red-400 font-medium">Usage Limit Reached</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    You've reached your monthly message limit. Consider upgrading your plan for more features.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
