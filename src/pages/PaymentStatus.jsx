import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

const PaymentStatus = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { status, plan, paymentDetails } = location.state || {};

  if (!location.state) {
    return (
      <div className="min-h-screen bg-black text-white p-6 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No Payment Information</h2>
          <p className="text-gray-400">Please complete a payment to view status.</p>
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
        <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
          <div className="flex flex-col items-center justify-center mb-8">
            {status === "success" ? (
              <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
            ) : (
              <XCircle className="w-16 h-16 text-red-500 mb-4" />
            )}
            <h2 className="text-3xl font-bold mb-2">
              Payment {status === "success" ? "Successful" : "Failed"}
            </h2>
            <p className="text-gray-400 text-center">
              {status === "success"
                ? "Your payment has been processed successfully"
                : "There was an issue processing your payment"}
            </p>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Plan</span>
                <span className="font-medium">{plan?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Amount</span>
                <span className="font-medium">{plan?.price}</span>
              </div>
              {paymentDetails && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Transaction ID</span>
                  <span className="font-medium">{paymentDetails.transactionId}</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Go to Dashboard
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentStatus;