import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail01Icon,
  Location01Icon,
  TwitterIcon,
  Linkedin01Icon,
  ArrowRight01Icon,
  LinkSquare01Icon,
  CreditCardIcon,
  Clock01Icon,
  Copy01Icon,
  Tick01Icon,
  BookOpen01Icon,
  CloudServerIcon,
  Shield01Icon,
  CheckmarkCircle02Icon
} from 'hugeicons-react';
import useMessageCard from '../../hooks/useMessageCard';
import MessageCard from '../../components/Card/MessageCard';

const Contact = () => {
  const { message: messageCard, showMessage, setMessage: setMessageState } = useMessageCard();
  const [copiedItem, setCopiedItem] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: 'Enterprise Volume & SLAs',
    message: ''
  });

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    showMessage("Copied!", `${text} copied to clipboard`, "success");
    setTimeout(() => setCopiedItem(''), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showMessage("Missing Fields", "Please complete all required fields.", "warning");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showMessage("Message Sent", "Thank you for reaching out! Our team will respond shortly.", "success");
    }, 800);
  };

  const socialLinks = [
    {
      name: 'Twitter / X',
      icon: <TwitterIcon size={18} />,
      url: 'https://x.com/360parminder',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin01Icon size={18} />,
      url: 'https://www.linkedin.com/in/parminder-singh-storm/',
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 pt-32 pb-24 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300">
      {messageCard && (
        <MessageCard
          title={messageCard.title}
          message={messageCard.message}
          type={messageCard.type}
          onClose={() => setMessageState(null)}
        />
      )}

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[14px] font-medium text-neutral-500 dark:text-neutral-400 mb-3 block underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4">
            Contact & Support
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight mb-4">
            We're here to help you scale.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Have questions about custom volume commitments, high-throughput telecom routing, enterprise SLAs, or technical integration? Reach our engineering and support specialists.
          </p>
        </div>

        {/* 2-Column Content: Form on Left, Contact Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 bg-white dark:bg-neutral-900 shadow-sm">
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">
                Send us a message
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                Fill out the form below and our team will get back to you within 2 business hours.
              </p>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckmarkCircle02Icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm mx-auto">
                    Thanks for reaching out, {formData.name}! We've logged your request and an engineer will reply to {formData.email} shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', company: '', topic: 'Enterprise Volume & SLAs', message: '' });
                    }}
                    className="text-xs font-semibold text-[#EA580C] hover:underline pt-2"
                  >
                    Send another inquiry →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Parminder Singh"
                        className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#EA580C]/30 focus:border-[#EA580C] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#EA580C]/30 focus:border-[#EA580C] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Rajdoot Labs"
                        className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#EA580C]/30 focus:border-[#EA580C] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        name="topic"
                        value={formData.topic}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#EA580C]/30 focus:border-[#EA580C] transition-all"
                      >
                        <option value="Enterprise Volume & SLAs">Enterprise Volume & SLAs</option>
                        <option value="API Integration & SDKs">API Integration & SDKs</option>
                        <option value="Billing & Invoicing">Billing & Invoicing</option>
                        <option value="Carrier Routing & Deliverability">Carrier Routing & Deliverability</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your message volume, carrier delivery requirements, or technical questions..."
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#EA580C]/30 focus:border-[#EA580C] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-3 bg-[#EA580C] hover:bg-[#D4703E] text-white text-xs font-semibold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit inquiry</span>
                        <ArrowRight01Icon size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Support Card */}
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 bg-white dark:bg-neutral-900 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300">
                  <Mail01Icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                    Direct Email Support
                  </h3>
                  <p className="text-xs text-neutral-500">Reach our engineering team</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block">
                      Official Contact
                    </span>
                    <a
                      href="mailto:360.parminder@gmail.com"
                      className="text-xs sm:text-sm font-mono font-medium text-neutral-900 dark:text-white hover:text-[#EA580C] transition-colors"
                    >
                      360.parminder@gmail.com
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard('360.parminder@gmail.com', 'email')}
                    className="p-2 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    title="Copy email"
                  >
                    {copiedItem === 'email' ? (
                      <Tick01Icon size={15} className="text-emerald-500" />
                    ) : (
                      <Copy01Icon size={15} />
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 pt-1">
                  <Clock01Icon size={14} className="text-neutral-400" />
                  <span>Average response time: &lt; 2 hours on business days</span>
                </div>
              </div>
            </div>

            {/* Payment & Merchant Grievance Card */}
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 bg-white dark:bg-neutral-900 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300">
                  <CreditCardIcon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                    Payment Gateway Support
                  </h3>
                  <p className="text-xs text-neutral-500">Billing & refund policy inquiries</p>
                </div>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                For transactions processed through our payment gateway, you can access the verified Merchant Grievance desk:
              </p>
              <a
                href="https://merchant.razorpay.com/policy/Pb5NdiUQ3s3IUU/contact_us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-[#EA580C] dark:hover:text-[#EA580C] transition-colors"
              >
                <span>Razorpay Merchant Support Desk</span>
                <LinkSquare01Icon size={13} />
              </a>
            </div>

            {/* Office Location & Social Links */}
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 bg-white dark:bg-neutral-900 shadow-sm">
              <div className="flex items-start gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300 flex-shrink-0">
                  <Location01Icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-0.5">
                    Operating Office
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    Alwar, Rajasthan, India
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Social Channels
                </span>
                <div className="flex items-center gap-2">
                  {socialLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                      title={item.name}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;