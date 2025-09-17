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
    <footer className="bg-linear-to-b from-[#086fca] to-neutral-400 dark:to-neutral-900 text-neutral-800 dark:text-neutral-300 mt-auto">
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
            <div className='flex flex-row gap-1.5 mt-4'>
              <a href="https://www.x.com/360parminder" target='_blank' rel="noopener noreferrer" aria-label="Twitter Profile">
                 <svg viewBox="0 0 24 24" aria-hidden="true" className=" size-8 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk ">
                <g>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z">
                  </path>
                </g>
              </svg>
              </a>
              <a href="https://github.com/360parminder/Rajdoot" target='_blank' rel="noopener noreferrer" aria-label="GitHub Repository">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className='size-8'>
                <g fill="#181616">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" />
                  <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0" />
                </g>
              </svg>
              </a>
            </div>
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
          className="mt-12 pt-6 text-center text-neutral-900 dark:text-neutral-100 "
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