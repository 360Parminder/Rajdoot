import { CheckmarkCircle02Icon } from 'hugeicons-react';
import { motion } from 'framer-motion';

const About = () => {
  const coreValues = [
    {
      title: "Developer-Centric Simplicity",
      description: "No complex telecom jargon — only clean REST APIs, modular SDKs, and effortless setup."
    },
    {
      title: "Clarity Over Noise",
      description: "Transparent pay-as-you-go pricing, real-time delivery receipts, and actionable error insights."
    },
    {
      title: "Seamless Reliability",
      description: "Automated carrier failovers guaranteeing your OTPs and critical alerts land in seconds."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 pt-32 pb-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Top Hero / Purpose Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.25em] text-[#EA580C] dark:text-[#F4A261] uppercase mb-4 block">
            OUR PURPOSE
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-neutral-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6">
            Empowering seamless communication through intelligent design.
          </h1>

          <p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            We build tools that seamlessly turn complex telecom protocols into simple, delightful daily developer experiences.
          </p>
        </motion.div>

        {/* Large Rounded Vision & Values Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-[#FAF7F5] dark:bg-neutral-900/60 rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 lg:p-16 border border-[#F0E4DC] dark:border-neutral-800 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Vision */}
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold tracking-[0.22em] text-[#EA580C] dark:text-[#F4A261] uppercase mb-4 block">
                THE RAJDOOT VISION
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-neutral-900 dark:text-white tracking-tight leading-snug mb-6">
                Messaging infrastructure that respects your time.
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                Most messaging and telecom platforms are cluttered, fragile, and tedious to integrate.
                At Rajdoot, we believe dispatching notifications and OTPs should feel as smooth and natural
                as making a single function call.
              </p>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                We blend carrier-grade routing, developer-first APIs, and real-time observability to give
                your engineering team real peace of mind.
              </p>
            </div>

            {/* Right Column: Values Card */}
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-neutral-800/90 rounded-2xl p-6 sm:p-8 border border-[#F0E4DC]/80 dark:border-neutral-700/60 shadow-sm">
                <h3 className="text-xs font-bold tracking-[0.2em] text-neutral-900 dark:text-white uppercase mb-6">
                  OUR CORE VALUES
                </h3>

                <div className="space-y-6">
                  {coreValues.map((value, index) => (
                    <div key={index} className="flex items-start gap-3.5">
                      <CheckmarkCircle02Icon className="w-5 h-5 text-[#EA580C] dark:text-[#F4A261] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-0.5 leading-snug">
                          {value.title}
                        </h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;