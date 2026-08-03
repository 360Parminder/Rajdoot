import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Tick01Icon, ArrowRight01Icon } from 'hugeicons-react';
import { useAuth } from '../../hooks/useAuth';
import { usePlans } from '../../hooks/fetchPlans';

const PricingSection = () => {
  const { user } = useAuth();
  const { plans } = usePlans();

  // If plans loaded from API, use those; otherwise fallback to static
  const activePlans = plans?.filter(plan => plan.isActive) || [];

  const fallbackPlans = [
    {
      name: 'Free',
      price: '0',
      period: '/month',
      description: 'Perfect for getting started and testing.',
      features: [
        '100 messages/day',
        'Basic analytics',
        'Email support',
        'REST API access',
        '1 API key',
      ],
      recommended: false,
      isDark: false,
    },
    {
      name: 'Starter',
      price: '14',
      period: '/month',
      description: 'For small teams and growing projects.',
      features: [
        '5,000 messages/day',
        'Advanced analytics',
        'Priority email support',
        'Webhooks',
        '5 API keys',
        'Custom templates',
      ],
      recommended: false,
      isDark: false,
    },
    {
      name: 'Pro',
      price: '49',
      period: '/month',
      description: 'For production applications at scale.',
      features: [
        '50,000 messages/day',
        'Real-time analytics',
        'Dedicated support',
        'Advanced webhooks',
        'Unlimited API keys',
        'Custom templates',
        'Team management',
        'SLA guarantee',
      ],
      recommended: true,
      isDark: true,
    },
    {
      name: 'Enterprise',
      price: '99',
      period: '/month',
      description: 'Custom solutions for large organizations.',
      features: [
        'Unlimited messages',
        'Custom analytics',
        '24/7 phone support',
        'Dedicated account manager',
        'Custom integrations',
        'On-premise deployment',
        'SOC2 compliance',
        'Custom SLA',
      ],
      recommended: false,
      isDark: false,
    },
  ];

  const displayPlans = activePlans.length > 0
    ? activePlans.map(plan => ({
        name: plan.name,
        price: plan.price !== 0 ? `${plan.price}` : '0',
        period: plan.price !== 0 ? (plan.period || '/month') : '/month',
        description: plan.description,
        features: plan.features?.map(f => f.text) || [],
        recommended: plan.recommended || false,
        isDark: plan.recommended || false,
      }))
    : fallbackPlans;

  return (
    <section className="landing-section" id="pricing">
      <motion.div
        className="landing-section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Pricing that scales with your team</h2>
        <p>
          Start free, upgrade when you're ready. No hidden fees, no surprises.
        </p>
      </motion.div>

      <div className="landing-pricing-grid">
        {displayPlans.map((plan, index) => (
          <motion.div
            key={index}
            className={`landing-pricing-card ${plan.recommended ? 'recommended' : ''} ${plan.isDark ? 'dark-card' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <h3>{plan.name}</h3>
            <div className="landing-pricing-price">{plan.price}</div>
            <div className="landing-pricing-period">{plan.period}</div>
            <p style={{ fontSize: '0.9rem', color: plan.isDark ? '#aaa' : 'var(--landing-text-secondary)', marginBottom: '24px' }}>
              {plan.description}
            </p>

            <ul className="landing-pricing-features">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className="landing-pricing-feature">
                  <Tick01Icon size={16} style={{ color: plan.isDark ? '#E8825C' : '#16A34A' }} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link to={user ? '/plans' : '/login'} style={{ display: 'block' }}>
              <motion.button
                className={`landing-btn ${plan.recommended ? 'landing-btn-primary' : 'landing-btn-secondary'}`}
                style={{ width: '100%', justifyContent: 'center' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.name === 'Free' || plan.price === '0'
                  ? 'Start Free'
                  : plan.name === 'Enterprise'
                    ? 'Contact Sales'
                    : 'Subscribe Now'}
                <ArrowRight01Icon size={16} />
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
