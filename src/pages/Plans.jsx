import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import FeatureCard from '../components/ui/FeatureCard';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import PaymentComponent from '../components/PaymentComponent';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { usePlans } from '../hooks/fetchPlans';

const Plans = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const { plans  } = usePlans();
  const { user } = useAuth();
  // console.log(user);


  const handlePlanSelect = (plan) => {
    if (plan.name === "Enterprise") {
      // Redirect to sales page for Enterprise plan
      navigate('/contact');
      return;
    }
    navigate('/payment', { state: { plan } });
    setSelectedPlan(plan);
    setShowPayment(true);
  };

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
              Choose Your Plan
            </motion.h1>
            <motion.p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Select the perfect plan for your messaging needs. All plans include our core features with different usage limits and support levels.
            </motion.p>
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.filter(plan => plan.isActive).map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
                        <span className="text-3xl font-bold text-white">{plan.price == 0 ? "Contact Team" : plan.price}</span>
                        <span className="text-gray-400 ml-2">{plan.price == 0 ? "" : plan.period}</span>
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
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={user ? () => handlePlanSelect(plan) : () => navigate('/login')}
                        className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                          plan._id === user?.plan.plans[0].planId._id 
                            ? 'bg-green-500 text-white hover:bg-green-600' 
                            : plan.recommended
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/20'
                              : 'bg-gray-800 text-white hover:bg-gray-700'
                        }`}
                        disabled={plan._id === user?.plan.plans[0].planId._id}
                      >
                        
                        {plan._id == user?.plan.plans[0].planId._id ? (
                         "Active Plan"
                        ):(
                          plan.name === "Basic" ? "Start Now" : plan.name === "Enterprise" ? "Contact Sales" : "Subscribe Now"
                        )}
                      </motion.button>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Have questions about our plans? Check out our FAQ section or contact our support team.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-shadow"
            >
              View FAQ
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Payment Modal */}
      {showPayment && selectedPlan && (
        <PaymentComponent
          plan={selectedPlan}
          onClose={() => setShowPayment(false)}
        />
      )}
    </AnimatedBackground>
  );
};

export default Plans; 