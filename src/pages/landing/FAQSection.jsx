import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

const faqData = [
  {
    question: 'How does the free plan work?',
    answer:
      'The free plan gives you 100 messages per day with full API access. No credit card required. You can upgrade anytime as your messaging needs grow.',
  },
  {
    question: 'What messaging channels are supported?',
    answer:
      'Rajdoot supports SMS, email, push notifications, in-app messages, WhatsApp, and more. You can use a single API to send messages across all channels with unified delivery tracking.',
  },
  {
    question: 'Can I switch plans at any time?',
    answer:
      'Yes! You can upgrade or downgrade your plan at any time. When upgrading, you get immediate access to the new features. When downgrading, the change takes effect at the end of your billing cycle.',
  },
  {
    question: 'Is there an SLA guarantee?',
    answer:
      'Pro and Enterprise plans come with SLA guarantees. Our Pro plan offers 99.9% uptime SLA, while Enterprise plans include custom SLAs tailored to your requirements.',
  },
  {
    question: 'How secure is Rajdoot?',
    answer:
      'Security is our top priority. We offer end-to-end encryption, SOC2 compliance, and follow industry best practices. All data is encrypted at rest and in transit with AES-256 encryption.',
  },
  {
    question: 'Do you offer dedicated support?',
    answer:
      'Free and Starter plans include email support. Pro plans get priority support with faster response times. Enterprise plans include a dedicated account manager and 24/7 phone support.',
  },
  {
    question: 'Can I use Rajdoot with my existing tools?',
    answer:
      'Absolutely. Rajdoot integrates with popular platforms like Slack, Discord, and more. We also provide SDKs for Node.js, Python, Java, Go, and other languages for seamless integration.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="landing-section">
      <motion.div
        className="landing-section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Common questions</h2>
        <p>Everything you need to know about Rajdoot.</p>
      </motion.div>

      <div className="landing-faq-list">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className="landing-faq-item"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <button
              className="landing-faq-question"
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              <Plus
                size={20}
                className={`landing-faq-icon ${openIndex === index ? 'open' : ''}`}
              />
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  className="landing-faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
