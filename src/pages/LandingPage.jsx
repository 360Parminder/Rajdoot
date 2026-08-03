import { useAuth } from '../hooks/useAuth';
import { motion } from 'motion/react';

// Landing page sections
import HeroSection from './landing/HeroSection';
import FeatureOverview from './landing/FeatureOverview';
import FeatureDetail from './landing/FeatureDetail';
import TemplatesSection from './landing/TemplatesSection';
import PricingSection from './landing/PricingSection';
import FAQSection from './landing/FAQSection';
import CTABanner from './landing/CTABanner';

// Images
import integrationsImg from '../assets/image/landing/integrations_preview.png';
import easySetupImg from '../assets/image/landing/easy_setup.png';
import sandboxImg from '../assets/image/landing/sandbox_preview.png';

// Styles
import '../styles/landing.css';

const LandingPage = () => {
  const { user } = useAuth();

  return (
    <div className="landing-page">
      {/* ───── 1. Hero ───── */}
      <HeroSection user={user} />

      {/* ───── Divider ───── */}
      <hr className="landing-divider" />

      {/* ───── 2. Feature Overview Grid ───── */}
      <FeatureOverview />

      {/* ───── 3. Feature Detail — Integrations ───── */}
      <FeatureDetail
        title="Integrate with the tools your team already uses"
        description="Rajdoot connects seamlessly with Slack, Discord, WhatsApp, and more. Use our SDKs for Node.js, Python, React, and other popular frameworks to get up and running in minutes."
        imageSrc={integrationsImg}
        imageAlt="Rajdoot integrations with popular developer tools and messaging platforms"
        linkTo="/docs"
        linkText="View integrations"
      />

      {/* ───── 4. Feature Detail — Easy Setup ───── */}
      <FeatureDetail
        title="Set up your messaging in just a few clicks"
        description="Create an account, grab your API key, and send your first message — all in under 5 minutes. Our intuitive dashboard makes managing your messaging workflows effortless."
        imageSrc={easySetupImg}
        imageAlt="Simple 3-step setup wizard for Rajdoot messaging API"
        reverse
        linkTo="/register"
        linkText="Get started now"
      />

      {/* ───── 5. Feature Detail — Sandbox ───── */}
      <FeatureDetail
        title="Test in our sandbox before going live"
        description="Our developer sandbox lets you test API calls, preview message deliveries, and debug responses — all without sending real messages. Ship with confidence."
        imageSrc={sandboxImg}
        imageAlt="Rajdoot API sandbox with code editor and JSON response preview"
        linkTo="/docs"
        linkText="Try the sandbox"
      />

      {/* ───── 6. Templates ───── */}
      <TemplatesSection />

      {/* ───── 7. From Zero to Live (Steps) ───── */}
      <section className="landing-section">
        <motion.div
          className="landing-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>From zero to live messaging in 10 minutes</h2>
          <p>Getting started with Rajdoot is ridiculously simple.</p>
        </motion.div>

        <div className="landing-steps">
          {[
            {
              number: '1',
              title: 'Create Account',
              description: 'Sign up for free — no credit card required. Takes 30 seconds.',
            },
            {
              number: '2',
              title: 'Get Your API Key',
              description: 'Generate a secure API key from your dashboard instantly.',
            },
            {
              number: '3',
              title: 'Send First Message',
              description: 'Use our quick-start guide to send your first message in minutes.',
            },
            {
              number: '4',
              title: 'Go Live',
              description: 'Switch from sandbox to production and start reaching your users.',
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="landing-step"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
            >
              <div className="landing-step-number">{step.number}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── Divider ───── */}
      <hr className="landing-divider" />

      {/* ───── 8. Pricing ───── */}
      {!user && <PricingSection />}

      {/* ───── 9. Integrations Logo Cloud ───── */}
      <section className="landing-section" style={{ paddingTop: user ? '80px' : '0' }}>
        <motion.div
          className="landing-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Works with your existing infrastructure</h2>
          <p>
            Rajdoot integrates with the platforms and languages you already use.
          </p>
        </motion.div>

        <motion.div
          className="landing-logos-strip"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { name: 'Node.js', icon: '⬢' },
            { name: 'Python', icon: '🐍' },
            { name: 'React', icon: '⚛️' },
            { name: 'Java', icon: '☕' },
            { name: 'Go', icon: '🔷' },
            { name: 'Ruby', icon: '💎' },
            { name: 'Slack', icon: '💬' },
            { name: 'Discord', icon: '🎮' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="landing-logo-item"
              whileHover={{ scale: 1.15, opacity: 1 }}
              title={item.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.85rem',
                fontWeight: 500,
              }}
            >
              <span style={{ fontSize: '2rem' }}>{item.icon}</span>
              <span>{item.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ───── 10. FAQ ───── */}
      <FAQSection />

      {/* ───── 11. Final CTA ───── */}
      <CTABanner user={user} />
    </div>
  );
};

export default LandingPage;
