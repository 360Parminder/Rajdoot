import { motion } from 'motion/react';

const templates = [
  {
    emoji: '📱',
    title: 'SMS Notifications',
    description: 'Transactional SMS templates for OTPs, alerts, and status updates.',
    tag: 'Transactional',
    tagBg: '#EEF2FF',
    tagColor: '#6366F1',
  },
  {
    emoji: '📧',
    title: 'Email Campaigns',
    description: 'Beautifully designed email templates with dynamic content blocks.',
    tag: 'Marketing',
    tagBg: '#FEF9C3',
    tagColor: '#CA8A04',
  },
  {
    emoji: '🔔',
    title: 'Push Notifications',
    description: 'Engaging push notification templates for mobile and web apps.',
    tag: 'Engagement',
    tagBg: '#DCFCE7',
    tagColor: '#16A34A',
  },
  {
    emoji: '💬',
    title: 'In-App Messages',
    description: 'Rich in-app message templates with carousels, buttons, and media.',
    tag: 'Interactive',
    tagBg: '#F3E8FF',
    tagColor: '#9333EA',
  },
  {
    emoji: '🤖',
    title: 'Chatbot Flows',
    description: 'Pre-built conversational flows for customer support and onboarding.',
    tag: 'Automation',
    tagBg: '#FFE4E6',
    tagColor: '#E11D48',
  },
  {
    emoji: '📊',
    title: 'Status Reports',
    description: 'Automated delivery reports and analytics summaries via email or Slack.',
    tag: 'Analytics',
    tagBg: '#E0F2FE',
    tagColor: '#0284C7',
  },
  {
    emoji: '🔐',
    title: 'Auth Messages',
    description: 'Secure authentication templates for 2FA, magic links, and password resets.',
    tag: 'Security',
    tagBg: '#FFF7ED',
    tagColor: '#EA580C',
  },
  {
    emoji: '🌍',
    title: 'Multi-Language',
    description: 'Localized message templates with automatic language detection and RTL support.',
    tag: 'i18n',
    tagBg: '#F0FDF4',
    tagColor: '#15803D',
  },
];

const TemplatesSection = () => {
  return (
    <section className="landing-section">
      <motion.div
        className="landing-section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>A template for every kind of message</h2>
        <p>
          Get started quickly with pre-built templates for every messaging
          use case. Customize and deploy in minutes.
        </p>
      </motion.div>

      <div className="landing-templates-grid">
        {templates.map((template, index) => (
          <motion.div
            key={index}
            className="landing-template-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            whileHover={{ y: -3 }}
          >
            <div className="landing-template-card-emoji">{template.emoji}</div>
            <h4>{template.title}</h4>
            <p>{template.description}</p>
            <span
              className="landing-template-card-tag"
              style={{ backgroundColor: template.tagBg, color: template.tagColor }}
            >
              {template.tag}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TemplatesSection;
