import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  BarChartIcon,
  SmartPhone01Icon,
  FlashIcon,
  Layers01Icon,
  SparklesIcon,
  UserGroupIcon,
  Tick01Icon,
  PlusSignIcon,
  MinusSignIcon,
  ArrowRight01Icon,
  CheckmarkCircle02Icon
} from 'hugeicons-react';
import PaymentComponent from '../components/PaymentComponent';
import { useAuth } from '../hooks/useAuth';
import { usePlans } from '../hooks/fetchPlans';

const PLANS_DATA = [
  {
    id: 'plus',
    name: 'Plus',
    price: '$19',
    period: '/month',
    ctaText: 'Start Trial',
    isPopular: false,
    buttonStyle: 'secondary',
  },
  {
    id: 'business',
    name: 'Business',
    price: '$79',
    period: '/month',
    ctaText: 'Start Trial',
    isPopular: true,
    badge: 'Popular',
    buttonStyle: 'primary',
  },
  {
    id: 'scale',
    name: 'Scale',
    price: '$279',
    period: '/month',
    ctaText: 'Book Demo',
    isPopular: false,
    buttonStyle: 'secondary',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    ctaText: 'Request a Demo',
    isPopular: false,
    buttonStyle: 'secondary',
  },
];

const FEATURE_CATEGORIES = [
  {
    name: 'Analytics',
    icon: <BarChartIcon size={16} className="text-[#EA580C]" />,
    features: [
      {
        title: 'Events / month',
        subtitle: 'Pageviews + clicks + form submissions + custom events',
        values: ['10K', '500K', '1M', 'Unlimited'],
      },
      {
        title: 'Websites',
        values: ['5', 'Unlimited', 'Unlimited', 'Unlimited'],
      },
      {
        title: 'Data Retention',
        values: ['12 months', '24 months', '36 months', 'Unlimited'],
      },
      {
        title: 'Real-time Dashboard',
        values: [true, true, true, true],
      },
      {
        title: 'Revenue Tracking',
        values: [true, true, true, true],
      },
      {
        title: 'Cross-Domain Tracking',
        values: [true, true, true, true],
      },
    ],
  },
  {
    name: 'Heatmaps',
    icon: <FlashIcon size={16} className="text-[#EA580C]" />,
    features: [
      {
        title: 'Heatmaps',
        values: ['1', '5', 'Unlimited', 'Unlimited'],
      },
      {
        title: 'Click Tracking',
        values: [true, true, true, true],
      },
      {
        title: 'Scroll Depth',
        values: [true, true, true, true],
      },
      {
        title: 'Device Segmentation',
        values: [true, true, true, true],
      },
    ],
  },
  {
    name: 'A/B Testing',
    icon: <SmartPhone01Icon size={16} className="text-[#EA580C]" />,
    features: [
      {
        title: 'A/B Split Tests/mo',
        values: ['1', '5', 'Unlimited', 'Unlimited'],
      },
      {
        title: 'Funnels',
        values: ['1', '5', 'Unlimited', 'Unlimited'],
      },
      {
        title: 'Visual Editor',
        values: [true, true, true, true],
      },
      {
        title: 'Statistical Significance',
        values: [true, true, true, true],
      },
    ],
  },
  {
    name: 'Ad Connectors',
    icon: <Layers01Icon size={16} className="text-[#EA580C]" />,
    features: [
      {
        title: 'Meta Ads Attribution',
        values: [true, true, true, true],
      },
      {
        title: 'Google Ads Attribution',
        values: [true, true, true, true],
      },
      {
        title: 'Typeform',
        values: [true, true, true, true],
      },
      {
        title: 'GoHighLevel',
        values: [true, true, true, true],
      },
      {
        title: 'Jotform',
        values: [true, true, true, true],
      },
      {
        title: 'Custom Integrations',
        values: [false, false, false, true],
      },
    ],
  },
  {
    name: 'AI & Automation',
    icon: <SparklesIcon size={16} className="text-[#EA580C]" />,
    features: [
      {
        title: 'AI Insights',
        values: ['25/mo', '200/mo', '1,000/mo', 'Unlimited'],
      },
      {
        title: 'AI Chat',
        values: [true, true, true, true],
      },
      {
        title: 'Agent API (Claude · Codex)',
        values: [false, true, true, true],
      },
      {
        title: 'Priority AI Processing',
        values: [false, false, true, true],
      },
      {
        title: 'Custom AI Configuration',
        values: [false, false, false, true],
      },
    ],
  },
  {
    name: 'Team & Support',
    icon: <UserGroupIcon size={16} className="text-[#EA580C]" />,
    features: [
      {
        title: 'Team Members',
        values: ['1', '1', '5', 'Unlimited'],
      },
      {
        title: 'Property API Access',
        values: [true, true, true, true],
      },
      {
        title: 'Priority Support',
        values: [false, false, false, true],
      },
      {
        title: 'Dedicated Account Specialist',
        values: [false, false, false, true],
      },
    ],
  },
];

const FAQS = [
  {
    question: 'What counts as an event?',
    answer: 'An event is counted whenever a user visits a page, triggers a notification, clicks an element, or submits a form tracked by your Rajdoot script or API.',
    topic: 'Events',
  },
  {
    question: 'Can I upgrade or downgrade anytime?',
    answer: 'Yes, you can change your subscription at any time from your account settings. Upgrades take effect immediately with prorated billing.',
    topic: 'Billing',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! All plans include a 14-day free trial with full feature access and no credit card required to get started.',
    topic: 'Free Trial',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards (Visa, MasterCard, Amex), UPI, Net Banking, and custom invoices for enterprise contracts.',
    topic: 'Billing',
  },
  {
    question: 'Do you offer annual billing?',
    answer: 'Yes, switching to annual billing gives you 2 months free (up to a 20% discount on standard monthly pricing).',
    topic: 'Upgrades',
  },
  {
    question: 'What happens if I exceed my event limit?',
    answer: "We won't suddenly cut off your tracking. We'll send an automatic alert and give you a grace period to top up or upgrade to the next tier.",
    topic: 'Events',
  },
];

const Plans = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTopic, setActiveTopic] = useState('All');
  const { user } = useAuth();

  const handlePlanSelect = (plan) => {
    if (plan.id === 'enterprise' || plan.name === 'Enterprise') {
      navigate('/contact');
      return;
    }
    if (!user) {
      navigate('/login');
      return;
    }
    navigate('/payment', { state: { plan } });
    setSelectedPlan(plan);
    setShowPayment(true);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const filteredFaqs = activeTopic === 'All'
    ? FAQS
    : FAQS.filter(f => f.topic.toLowerCase() === activeTopic.toLowerCase());

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 pt-32 pb-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-neutral-950 dark:text-white">
            Compare all features
          </h1>
          <p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400">
            Need the details? See everything side by side.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 shadow-sm mb-24">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[760px]">
              {/* Table Header: Plans */}
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800">
                  <th className="py-8 px-6 sm:px-8 w-[28%] text-xs font-semibold text-neutral-400 uppercase tracking-wider align-bottom">
                    Features
                  </th>
                  {PLANS_DATA.map((plan) => (
                    <th
                      key={plan.id}
                      className={`py-8 px-4 text-center align-top w-[18%] ${
                        plan.isPopular
                          ? 'bg-[#FFF5EF] dark:bg-[#EA580C]/5 border-x border-neutral-200 dark:border-neutral-800'
                          : ''
                      }`}
                    >
                      <div className="flex flex-col items-center justify-start min-h-[140px]">
                        {plan.badge ? (
                          <span className="inline-block bg-[#EA580C] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
                            {plan.badge}
                          </span>
                        ) : (
                          <div className="h-5 mb-2" />
                        )}

                        <span className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">
                          {plan.name}
                        </span>

                        <div className="flex items-baseline justify-center gap-0.5 mb-4">
                          <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                            plan.isPopular ? 'text-[#EA580C]' : 'text-neutral-950 dark:text-white'
                          }`}>
                            {plan.price}
                          </span>
                          {plan.period && (
                            <span className="text-xs text-neutral-500 dark:text-neutral-400">
                              {plan.period}
                            </span>
                          )}
                        </div>

                        <button
                          onClick={() => handlePlanSelect(plan)}
                          className={`w-full max-w-[120px] py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                            plan.buttonStyle === 'primary'
                              ? 'bg-[#EA580C] hover:bg-[#D4703E] text-white shadow-sm'
                              : 'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200'
                          }`}
                        >
                          {plan.ctaText}
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Feature Categories Rows */}
              <tbody>
                {FEATURE_CATEGORIES.map((category, catIdx) => (
                  <React.Fragment key={catIdx}>
                    {/* Category Title Row */}
                    <tr className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/60">
                      <td colSpan={5} className="py-3 px-6 sm:px-8">
                        <div className="flex items-center gap-2">
                          {category.icon}
                          <span className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                            {category.name}
                          </span>
                        </div>
                      </td>
                    </tr>

                    {/* Features in this category */}
                    {category.features.map((feature, featIdx) => (
                      <tr
                        key={featIdx}
                        className="border-b border-neutral-100 dark:border-neutral-850 hover:bg-neutral-50/40 dark:hover:bg-neutral-800/30 transition-colors"
                      >
                        <td className="py-4 px-6 sm:px-8">
                          <div className="text-[13px] font-medium text-neutral-900 dark:text-neutral-200">
                            {feature.title}
                          </div>
                          {feature.subtitle && (
                            <div className="text-[11px] text-neutral-400 mt-0.5 max-w-xs">
                              {feature.subtitle}
                            </div>
                          )}
                        </td>

                        {feature.values.map((val, valIdx) => {
                          const isPopularCol = PLANS_DATA[valIdx]?.isPopular;
                          return (
                            <td
                              key={valIdx}
                              className={`py-4 px-4 text-center text-[13px] align-middle ${
                                isPopularCol
                                  ? 'bg-[#FFF5EF] dark:bg-[#EA580C]/5 border-x border-neutral-200 dark:border-neutral-800'
                                  : ''
                              }`}
                            >
                              {typeof val === 'boolean' ? (
                                val ? (
                                  <div className="flex justify-center">
                                    <Tick01Icon size={16} className="text-[#EA580C] stroke-[2.5]" />
                                  </div>
                                ) : (
                                  <span className="text-neutral-300 dark:text-neutral-600 font-mono">—</span>
                                )
                              ) : (
                                <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                  {val}
                                </span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-mono text-xs font-semibold text-neutral-400 uppercase tracking-widest block mb-2">
                [ FAQ ]
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 dark:text-white tracking-tight mb-3">
                Pricing Questions
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Plans, billing, and events. Can't find what you're looking for?
              </p>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => navigate('/contact')}
                className="px-5 py-2.5 bg-[#EA580C] hover:bg-[#D4703E] text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
              >
                Contact Us
              </button>
              <button
                onClick={() => setActiveTopic('All')}
                className="text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
              >
                Browse all 70+ questions →
              </button>
            </div>

            {/* Popular topics */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2.5">
                Popular topics
              </div>
              <div className="flex flex-wrap gap-2">
                {['Events', 'Billing', 'Free Trial', 'Enterprise', 'Upgrades'].map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setActiveTopic(activeTopic === topic ? 'All' : topic)}
                    className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                      activeTopic === topic
                        ? 'border-[#EA580C] bg-[#FFF0E8] dark:bg-[#EA580C]/15 text-[#EA580C]'
                        : 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Questions Accordion */}
          <div className="lg:col-span-7 divide-y divide-neutral-200 dark:divide-neutral-800">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="py-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left gap-4 group"
                  >
                    <span className="text-[15px] font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-[#EA580C] transition-colors">
                      {faq.question}
                    </span>
                    <div className="w-6 h-6 flex items-center justify-center text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors flex-shrink-0">
                      {isOpen ? <MinusSignIcon size={16} /> : <PlusSignIcon size={16} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pt-3 pb-1 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Split CTA Card / Banner */}
        <div className="rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 grid grid-cols-1 lg:grid-cols-12 shadow-sm mb-12">
          {/* Left Orange Half */}
          <div className="lg:col-span-6 bg-[#EA580C] text-white p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-white/80 mb-3">
                AGENT-NATIVE CRO
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 text-white leading-tight">
                Pick a plan. Plug in your agent.
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-8">
                Plug Claude or Codex into your funnel. Analytics, A/B testing, and revenue attribution behind one API. The first variant ships in 60 seconds. No developer ticket.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => navigate('/register')}
                className="px-5 py-2.5 rounded-lg bg-white text-[#EA580C] hover:bg-neutral-100 font-semibold text-xs transition-colors shadow-sm"
              >
                Start free trial &gt;
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors border border-white/20"
              >
                Book a demo
              </button>
            </div>
          </div>

          {/* Right Preview Card */}
          <div className="lg:col-span-6 bg-white dark:bg-neutral-900 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Pricing Page CTA
                </span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  Improvement +58.4%
                </span>
              </div>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-6">
                Variant B wins
              </h4>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-3.5 bg-neutral-50 dark:bg-neutral-800/40">
                  <div className="text-[11px] text-neutral-400 mb-1">Control</div>
                  <div className="text-xl font-bold text-neutral-900 dark:text-white">3.2%</div>
                  <div className="text-[11px] text-neutral-400">1,547 conversions</div>
                </div>
                <div className="border border-[#EA580C]/30 rounded-xl p-3.5 bg-[#FFF5EF] dark:bg-[#EA580C]/5">
                  <div className="text-[11px] text-[#EA580C] font-semibold mb-1">Variant B ↑</div>
                  <div className="text-xl font-bold text-neutral-900 dark:text-white">5.1%</div>
                  <div className="text-[11px] text-neutral-400">2,459 conversions</div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-neutral-500 mb-1.5">
                  <span>Statistical Confidence</span>
                  <span className="text-red-500 font-bold">95%</span>
                </div>
                <div className="w-full h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden mb-3">
                  <div className="h-full bg-red-500 rounded-full w-[95%]" />
                </div>
                <div className="flex justify-between text-[11px] text-neutral-400">
                  <span>Sample size: 4,821 / 5,000</span>
                  <span>Running 14 days · Mar 10, 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Guarantee Sub-Strip */}
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 sm:p-6 bg-neutral-50/70 dark:bg-neutral-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-sm font-semibold text-neutral-900 dark:text-white mr-2">
              Still deciding?
            </span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              14-day free trial · Cancel anytime · Cookie-free by default.
            </span>
          </div>
          <button
            onClick={() => navigate('/register')}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-[#EA580C] hover:bg-[#D4703E] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            <span>Start free trial</span>
            <ArrowRight01Icon size={14} />
          </button>
        </div>
      </div>

      {/* Payment Modal */}
      {showPayment && selectedPlan && (
        <PaymentComponent
          plan={selectedPlan}
          onClose={() => setShowPayment(false)}
        />
      )}
    </div>
  );
};

export default Plans;