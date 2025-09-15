import { motion } from 'motion/react'
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
  return (
    <footer className="bg-linear-to-b from-neutral-100/10 to-neutral-400 dark:to-neutral-900">
      <div className="mx-auto px-6 pt-10 pb-5">
        <motion.div
          className="grid md:grid-cols-4 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeIn}>
            <motion.h3
              className="text-xl font-bold "
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              RAJDOOT
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sophisticated messaging APIs for developers. Elegant, reliable, and affordable.
            </p>
            {/* <div className='flex flex-col gap-1.5'>

              <a href="https://www.producthunt.com/products/rajdoot?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-rajdoot" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=966687&theme=dark&t=1757796530536" alt="Rajdoot - Your&#0032;Private&#0044;&#0032;Powerful&#0044;&#0032;and&#0032;Programmable&#0032;SMS&#0032;Gateway | Product Hunt" width="250" height="54" /></a>
              <a href="https://peerlist.io/360parminder/project/rajdoot" target="_blank" rel="noreferrer">
                <img
                  src="https://peerlist.io/api/v1/projects/embed/PRJHBABPDOJ9JMDPPCBBJL88DMLRJQ?showUpvote=true&theme=dark"
                  alt="Rajdoot"
                />
              </a>
            </div> */}
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
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
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
                      className="text-gray-600 dark:text-gray-400 hover:text-white transition-colors"
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