import React from 'react';
import { Mail, MapPin, Twitter, Instagram, Linkedin } from 'lucide-react';
import useMessageCard from '../../hooks/useMessageCard';
import MessageCard from '../../components/Card/MessageCard';

const Contact = () => {
  const { message: messageCard, showMessage, setMessage: setMessageState } = useMessageCard();

  const handleEmailClick = () => {
    navigator.clipboard.writeText('360.parminder@gmail.com');
    showMessage("Copied", "Email address copied to clipboard", "success");
  };

  const socialLinks = [
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
      url: 'https://x.com/360parminder',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://www.instagram.com/360_parminder/',
      color: 'hover:text-pink-500'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/parminder-singh-storm/',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-[#18181a] p-6">
      {messageCard && (
        <MessageCard
          title={messageCard.title}
          message={messageCard.message}
          type={messageCard.type}
          onClose={() => setMessageState(null)}
        />
      )}

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-200 mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-[#282729] rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-200 mb-6">Get in Touch</h2>
            
            {/* Email */}
            <div className="flex items-center mb-6">
              <div className="bg-[#18181a] p-3 rounded-lg mr-4">
                <Mail className="w-6 h-6 text-gray-300" />
              </div>
              <div>
                <h3 className="text-gray-300 font-medium mb-1">Email</h3>
                <button 
                  onClick={handleEmailClick}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  360.parminder@gmail.com
                </button>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center">
              <div className="bg-[#18181a] p-3 rounded-lg mr-4">
                <MapPin className="w-6 h-6 text-gray-300" />
              </div>
              <div>
                <h3 className="text-gray-300 font-medium mb-1">Location</h3>
                <p className="text-gray-400">
                  Alwar, Rajasthan<br />
                  India
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-[#282729] rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-200 mb-6">Connect With Us</h2>
            <div className="flex flex-col space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 bg-[#18181a] rounded-lg transition-colors ${social.color}`}
                >
                  <div className="mr-4 text-gray-300">
                    {social.icon}
                  </div>
                  <span className="text-gray-200 font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-8 bg-[#282729] rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-200 mb-6">Find Us</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14019.999999999999!2d76.6!3d27.5667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974e4c3c0c0c0c0%3A0x0!2zMjfCsDM0JzAwLjAiTiA3NsKwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;