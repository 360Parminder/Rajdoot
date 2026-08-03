import { motion } from 'motion/react';
import { Message01Icon, CloudAngledZapIcon, Shield01Icon, BarChartIcon, GlobeIcon, CodeIcon } from 'hugeicons-react';

const features = [
  {
    icon: <Message01Icon size={22} />,
    title: "Advanced Messaging",
    description: "Send and receive messages with support for text, media, and rich content formats across multiple channels.",
    bgColor: '#EEF2FF',
    iconColor: '#6366F1',
  },
  {
    icon: <CloudAngledZapIcon size={22} />,
    title: "Real-time Delivery",
    description: "Lightning-fast message delivery with real-time status updates, delivery receipts, and webhook notifications.",
    bgColor: '#FEF9C3',
    iconColor: '#CA8A04',
  },
  {
    icon: <Shield01Icon size={22} />,
    title: "Enterprise Security",
    description: "End-to-end encryption, SOC2 compliance, and enterprise-grade security for all your communications.",
    bgColor: '#DCFCE7',
    iconColor: '#16A34A',
  },
  {
    icon: <CodeIcon size={22} />,
    title: "RESTful APIs",
    description: "Comprehensive REST APIs with detailed documentation, SDKs for 10+ languages, and quick-start guides.",
    bgColor: '#F3E8FF',
    iconColor: '#9333EA',
  },
  {
    icon: <BarChartIcon size={22} />,
    title: "Message Analytics",
    description: "Detailed insights into delivery rates, engagement metrics, and real-time performance dashboards.",
    bgColor: '#FFE4E6',
    iconColor: '#E11D48',
  },
  {
    icon: <GlobeIcon size={22} />,
    title: "Global Infrastructure",
    description: "Distributed infrastructure across 12 regions ensuring high availability and sub-100ms latency worldwide.",
    bgColor: '#E0F2FE',
    iconColor: '#0284C7',
  },
];

const FeatureOverview = () => {
  return (
    <section className="landing-section">
      <motion.div
        className="landing-section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>
          Everything a developer needs.{' '}
          <span className="landing-strikethrough">Nothing they don't.</span>
        </h2>
        <p>
          A comprehensive messaging platform built for developers who value
          simplicity, reliability, and performance.
        </p>
      </motion.div>

      <div className="landing-features-grid">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="landing-feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <div
              className="landing-feature-card-icon"
              style={{ backgroundColor: feature.bgColor, color: feature.iconColor }}
            >
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureOverview;
