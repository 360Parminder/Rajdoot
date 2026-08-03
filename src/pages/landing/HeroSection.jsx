import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight01Icon, SparklesIcon } from 'hugeicons-react';
import heroDashboard from '../../assets/image/landing/hero_dashboard.png';

const HeroSection = ({ user }) => {
  return (
    <section className="landing-hero">
      <motion.div
        className="landing-hero-badge"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SparklesIcon size={14} />
        <span>Now with real-time delivery tracking</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Messaging APIs your team will <em>look forward to</em>
      </motion.h1>

      <motion.p
        className="landing-hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Build powerful, reliable messaging applications with elegant APIs.
        From SMS to push notifications — all in one platform.
      </motion.p>

      <motion.div
        className="landing-hero-actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link to={user ? '/dashboard' : '/register'}>
          <motion.button
            className="landing-btn landing-btn-primary landing-btn-large"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Started Free
            <ArrowRight01Icon size={18} />
          </motion.button>
        </Link>
        <Link to="/docs">
          <motion.button
            className="landing-btn landing-btn-secondary landing-btn-large"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            View Documentation
          </motion.button>
        </Link>
      </motion.div>

      <motion.div
        className="landing-hero-preview"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="landing-glow" style={{ top: '-100px', left: '50%', transform: 'translateX(-50%)' }} />
        <img
          src={heroDashboard}
          alt="Rajdoot messaging dashboard showing delivery analytics and message composition"
          loading="eager"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
