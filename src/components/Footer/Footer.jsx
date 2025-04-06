import { motion } from 'motion/react'
import { path } from 'motion/react-client';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      };
      const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6 }
        }
      };
      const slideIn = {
        hidden: { x: -60, opacity: 0 },
        visible: { 
          x: 0, 
          opacity: 1,
          transition: { duration: 0.6, ease: "easeOut" }
        }
      };
    return(
        <footer className="bg-black py-6 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid md:grid-cols-4 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn}>
              <motion.h3 
                className="text-xl font-bold text-white mb-6"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                RAJDOOT
              </motion.h3>
              <p className="text-gray-500">
                Sophisticated messaging APIs for developers. Elegant, reliable, and affordable.
              </p>
            </motion.div>
            
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Documentation", "API Reference"],
                path: ["/features", "/plans", "/docs", "/api-reference"]
              },
              {
                title: "Company",
                links: ["About Us", "Blog", "Careers", "Contact"],
                path: ["/about", "/blog", "/careers", "/contact"]
              },
              {
                title: "Legal",
                links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Cancellations & Refunds"],
                path: ["/privacy-policy", "/terms-of-service", "/cookie-policy", "/CancellationsRefunds"]
              }
            ].map((section, index) => (
              <motion.div key={index} variants={fadeIn}>
                <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <motion.li 
                      key={linkIndex}
                      variants={slideIn}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <button 
                        onClick={() => navigate(section.path[linkIndex])}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p>© {new Date().getFullYear()} Rajdoot. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    )
}

export default Footer;