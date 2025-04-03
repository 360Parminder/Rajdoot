import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import PlanCard from '../components/plans/PlanCard';
import { CURRENT_PLAN, AVAILABLE_PLANS } from '../constants/plans';
import { useAuth } from '../hooks/useAuth';
import FloatingParticles from '../components/Background/FloatingParticles';
import { useFetchPlans } from '../hooks/fetchPlans';

const Plans = () => {
    const { user } = useAuth();
    const { plans, loading, error } = useFetchPlans();
    const handlePlanSelect = (plan) => {
        // TODO: Implement plan selection logic
        console.log('Selected plan:', plan);
    };

    return (
        <div className="min-h-screen bg-dark-900 relative overflow-hidden">
            <FloatingParticles />
            
            {/* Animated background elements */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800 opacity-50"
                animate={{ opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
                className="absolute top-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.2, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
            />

            <div className="container mx-auto px-4 py-8 relative z-10">
                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center text-gray-400 hover:text-gray-200 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Home
                </Link>

                {/* Current Plan Section */}
                {user && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-200 mb-4">Current Plan</h2>
                        <div className="bg-[#282729] rounded-lg p-6 border border-[#7170709a]">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-indigo-300">{CURRENT_PLAN.name}</h3>
                                    <p className="text-gray-400">Renews on {new Date(CURRENT_PLAN.renewalDate).toLocaleDateString()}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-gray-200">{CURRENT_PLAN.price}</p>
                                    <p className="text-gray-400">per {CURRENT_PLAN.period}</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                {CURRENT_PLAN.features.map((feature, index) => (
                                    <div key={index} className="flex items-center text-gray-300">
                                        <Check className="w-5 h-5 mr-2 text-indigo-400" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-400">
                                    Active
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Available Plans Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-2xl font-bold text-gray-200 mb-6">
                        {user ? 'Available Plans' : 'Choose Your Plan'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {AVAILABLE_PLANS.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            >
                                <PlanCard
                                    plan={plan}
                                    isCurrentPlan={user && plan.name === CURRENT_PLAN.name}
                                    onSelect={handlePlanSelect}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Plans; 