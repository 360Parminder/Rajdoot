import React, { useState } from 'react';
import { Clock, CheckCircle, XCircle, CreditCard, AlertTriangle, Info, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useMessageCard from '../../hooks/useMessageCard';
import MessageCard from '../../components/Card/MessageCard';
import { useAuth } from '../../hooks/useAuth';

const CancellationsRefunds = () => {
    const {user}=useAuth();
  const { message: messageCard, showMessage, setMessage: setMessageState } = useMessageCard();
  const [activeTab, setActiveTab] = useState('refund');
  const [refundReason, setRefundReason] = useState('');
  const [cancelPlanId, setCancelPlanId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock user data - replace with actual data from your app
  

  const handleRefundRequest = (e) => {
    e.preventDefault();
    if (!refundReason.trim()) {
      showMessage("Error", "Please provide a reason for your refund request", "error");
      return;
    }

    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      showMessage(
        "Refund Request Submitted", 
        "Your refund request has been received. We'll process it within 3-5 business days.", 
        "success"
      );
      setRefundReason('');
      setIsProcessing(false);
    }, 1500);
  };

  const handlePlanCancellation = (planId) => {
    const plan = userPlans.find(p => p.id === planId);
    if (!plan || !plan.canCancel) return;

    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      showMessage(
        "Plan Cancellation", 
        `Your ${plan.name} plan will not renew after ${plan.nextBillingDate}. You'll continue to have access until then.`,
        "success"
      );
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="p-6">
      {messageCard && (
        <MessageCard
          title={messageCard.title}
          message={messageCard.message}
          type={messageCard.type}
          onClose={() => setMessageState(null)}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
          Cancellations & Refunds
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Manage your plan cancellations and request refunds for services not received
        </p>
      </motion.div>

      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden mb-8">
        <div className="flex border-b border-gray-800">
          <button
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${activeTab === 'refund' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400 hover:text-gray-200'}`}
            onClick={() => setActiveTab('refund')}
          >
            Request Refund
          </button>
          <button
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${activeTab === 'cancel' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400 hover:text-gray-200'}`}
            onClick={() => setActiveTab('cancel')}
          >
            Cancel Plan
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'refund' ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-blue-400" />
                Request a Refund
              </h2>
              <p className="text-gray-400 mb-6">
                You may request a refund if you've been charged but didn't receive the service. 
                Refunds are processed within 3-5 business days.
              </p>

              <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-200 mb-1">Refund Policy</h3>
                    <p className="text-sm text-gray-400">
                      Refunds are only available for payments where the service wasn't provided. 
                      Already consumed services or partially used plans are not eligible for refunds.
                    </p>
                    <a 
                      href="https://merchant.razorpay.com/policy/Pb5NdiUQ3s3IUU/refund" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 transition-colors"
                    >
                      View complete refund policy <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <form onSubmit={handleRefundRequest}>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Reason for Refund
                  </label>
                  <textarea
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-2.5 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all min-h-[120px]"
                    placeholder="Please explain why you're requesting a refund..."
                    value={refundReason}
                    onChange={(e) => setRefundReason(e.target.value)}
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isProcessing}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <>
                      <Clock className="w-5 h-5 animate-pulse" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Submit Refund Request</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-400" />
                Cancel Subscription Plan
              </h2>
              <p className="text-gray-400 mb-6">
                You can cancel future renewals of your plan. Your access will continue until the end of the current billing period.
              </p>

              <div className="space-y-4">
                {user.plan.plans.map((plan) => (
                  <div key={plan.id} className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-200">{plan.name}</h3>
                        <p className="text-sm text-gray-400">
                          {user.plan.status === 'active' ? (
                            <>Active until <span className="text-gray-300">{new Date(new Date().setMonth(new Date(plan.expiryDate).getMonth() + 1)).toLocaleDateString('en-US', { month: 'short', day: 'numeric',year:'numeric' })}</span></>
                          ) : plan.status === 'pending_cancellation' ? (
                            <>Will expire on <span className="text-gray-300">{plan.nextBillingDate}</span></>
                          ) : (
                            <>Expired on <span className="text-gray-300">{plan.nextBillingDate}</span></>
                          )}
                        </p>
                      </div>
                      <div>
                        {plan.canCancel ? (
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => handlePlanCancellation(plan.id)}
                            disabled={isProcessing}
                            className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg text-sm transition-colors disabled:opacity-50"
                          >
                            Cancel Plan
                          </motion.button>
                        ) : (
                          <span className="text-xs bg-gray-700 text-gray-400 px-3 py-1.5 rounded-full">
                            {plan.status === 'pending_cancellation' ? 'Cancellation Pending' : 'Not Cancelable'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 mt-6">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-200 mb-1">Cancellation Policy</h3>
                    <p className="text-sm text-gray-400">
                      Cancellations only affect future renewals. You'll maintain full access until the end of your current billing period. 
                      Already active plans cannot be canceled mid-cycle for refunds.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CancellationsRefunds;