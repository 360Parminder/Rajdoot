import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight01Icon } from 'hugeicons-react';

const CTABanner = ({ user }) => {
  return (
    <section className="landing-section" style={{ paddingBottom: '40px' }}>
      <motion.div
        className="landing-cta-banner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Start building with Rajdoot now
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join thousands of developers who are already using Rajdoot to build
          powerful messaging applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
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
              Read the Docs
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
