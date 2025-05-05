import React from "react";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { useLocation } from "react-router-dom";
import { usePayment } from "../hooks/usePayment";

const PaymentComponent = ({ onSuccess, onError }) => {
  const { plan } = useLocation().state || {};
  const { initiatePayment, loading, error } = usePayment();

  const handlePayment = async () => {
    const result = await initiatePayment(plan);
    
    if (result.success) {
    //   onSuccess(result.response, plan);
    } else {
        console.log("error from payment",result.error);
        
    }
  };

  if (!plan) {
    return (
      <div className="min-h-screen bg-black text-white p-6 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No Plan Selected</h2>
          <p className="text-gray-400">Please select a plan to proceed with payment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Complete Your Payment</h2>

        {/* Plan Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-900 rounded-xl p-8 mb-8 border border-gray-800"
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">{plan.name} Plan</h3>
              <p className="text-gray-400">Subscription Details</p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold">{plan.price}</p>
              <p className="text-gray-400">{plan.period === "" ? null : "per " + plan.period}</p>
            </div>
          </div>

          <div className="space-y-4">
            {plan.features.map((feature, index) => (
              <motion.div
                key={feature._id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center"
              >
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mr-4">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-gray-300">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Payment Button */}
        <motion.button
          onClick={handlePayment}
          disabled={loading}
          className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 ${
            loading
              ? 'bg-gray-800 cursor-not-allowed'
              : 'bg-white hover:bg-gray-200 text-black hover:scale-[1.02]'
          }`}
          whileHover={!loading ? { scale: 1.02 } : {}}
          whileTap={!loading ? { scale: 0.98 } : {}}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Processing...
            </div>
          ) : (
            'Pay Now'
          )}
        </motion.button>

        {/* Security Notice */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-500 text-sm mt-6"
        >
          Your payment is secured by Razorpay. We never store your card details.
        </motion.p>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center"
          >
            {error}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default PaymentComponent;