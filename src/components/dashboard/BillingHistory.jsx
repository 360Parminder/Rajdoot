import React, { use } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, CheckCircle2, XCircle, Clock } from 'lucide-react';



const BillingHistory = () => {

   
 
 const fetchBillingHistory = async () => {
    // Simulate fetching billing history from an API
    // const history = await 
    }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
          Billing History
        </h1>
        <p className="text-gray-400 max-w-2xl">
          View your past payments and billing information.
        </p>
      </motion.div>

      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Date</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Plan</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Payment Method</th>
              </tr>
            </thead>
            <tbody>
              {billingHistory.map((payment) => (
                <tr key={payment.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {new Date(payment.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    ${payment.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {payment.plan}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(payment.status)}
                      <span className={`capitalize ${
                        payment.status === 'completed' ? 'text-green-500' :
                        payment.status === 'failed' ? 'text-red-500' :
                        'text-yellow-500'
                      }`}>
                        {payment.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {payment.paymentMethod}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BillingHistory;
