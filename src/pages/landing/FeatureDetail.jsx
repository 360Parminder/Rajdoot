import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeatureDetail = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  linkTo,
  linkText,
  children,
}) => {
  return (
    <section className="landing-section">
      <div className={`landing-feature-detail ${reverse ? 'reverse' : ''}`}>
        <motion.div
          className="landing-feature-detail-content"
          initial={{ opacity: 0, x: reverse ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{title}</h2>
          <p>{description}</p>
          {children}
          {linkTo && (
            <Link to={linkTo}>
              <motion.button
                className="landing-btn landing-btn-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {linkText || 'Learn more'}
                <ArrowRight size={16} />
              </motion.button>
            </Link>
          )}
        </motion.div>

        <motion.div
          className="landing-feature-detail-image"
          initial={{ opacity: 0, x: reverse ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <img src={imageSrc} alt={imageAlt} loading="lazy" />
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureDetail;
