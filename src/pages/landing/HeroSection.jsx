import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight01Icon, PlayIcon } from 'hugeicons-react';

const HeroSection = ({ user }) => {
  return (
    <section className="landing-hero pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center text-center">
      {/* Main Heading matching the design */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-[56px] font-bold tracking-tight text-neutral-900 dark:text-white max-w-4xl mx-auto leading-[1.12] mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Messaging and OTP APIs,<br className="hidden sm:inline" />
        proven in <span className="text-[#EA580C]">real-time delivery.</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        For engineering and product teams running mission-critical communication.
        Rajdoot closes the loop from API call to verified delivery, so you know exactly
        when messages land, then scale the routes that work.
      </motion.p>

      {/* Action Button & Micro-copy */}
      <motion.div
        className="flex flex-col items-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link to={user ? '/dashboard' : '/register'}>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#D4703E] text-white font-medium text-base px-7 py-3.5 rounded-xl shadow-lg shadow-[#EA580C]/25 transition-all cursor-pointer"
          >
            <span>{user ? 'Open Dashboard' : 'Start free trial'}</span>
            <ArrowRight01Icon size={16} />
          </motion.button>
        </Link>

        {/* Micro-copy */}
        <div className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5 flex-wrap justify-center mt-3">
          <span className="text-[#EA580C] font-bold">✓</span>
          <span>Free sandbox credits</span>
          <span className="text-neutral-300 dark:text-neutral-600">·</span>
          <span>Cancel anytime</span>
          <span className="text-neutral-300 dark:text-neutral-600">·</span>
          <span>Plans from $0/mo</span>
        </div>

        <Link
          to="/docs"
          className="text-xs text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors mt-1.5"
        >
          Prefer a walkthrough? Explore documentation →
        </Link>
      </motion.div>

      {/* Connection Sub-strip */}
      <motion.div
        className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-2 mb-12 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        <span>Your stack, your users, and your notifications, connected by one API.</span>
        <div className="flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded bg-white dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700 font-mono text-[11px] text-neutral-700 dark:text-neutral-300">Node</span>
          <span className="px-2 py-0.5 rounded bg-white dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700 font-mono text-[11px] text-neutral-700 dark:text-neutral-300">Python</span>
          <span className="px-2 py-0.5 rounded bg-white dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700 font-mono text-[11px] text-neutral-700 dark:text-neutral-300">React</span>
          <span className="px-2 py-0.5 rounded bg-white dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700 font-mono text-[11px] text-neutral-700 dark:text-neutral-300">REST</span>
        </div>
      </motion.div>

      {/* Browser Frame Preview */}
      <motion.div
        className="w-full max-w-5xl relative mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        {/* Ambient Top Glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-[#EA580C]/20 to-transparent blur-3xl pointer-events-none -z-10" />

        {/* Browser Window Mockup */}
        <div className="bg-white dark:bg-neutral-900 rounded-2xl md:rounded-3xl border border-neutral-200/80 dark:border-neutral-800 shadow-2xl shadow-neutral-900/10 dark:shadow-black/40 overflow-hidden text-left">
          
          {/* macOS Window Top Bar */}
          <div className="bg-neutral-50 dark:bg-neutral-800/60 border-b border-neutral-200/80 dark:border-neutral-800 px-4 py-2.5 flex items-center justify-between gap-4">
            {/* Mac Window Dots */}
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
            </div>

            {/* Navigation Tabs */}
            <div className="hidden sm:flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
              <div className="px-3 py-1 rounded-md bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white font-medium border border-neutral-200/70 dark:border-neutral-700 shadow-xs flex items-center gap-1.5">
                <span className="text-[#EA580C]">📊</span> Delivery Funnels
              </div>
              <div className="px-3 py-1 hover:text-neutral-900 dark:hover:text-white cursor-pointer transition-colors flex items-center gap-1.5">
                <span>🔑</span> OTP Verification
              </div>
              <div className="px-3 py-1 hover:text-neutral-900 dark:hover:text-white cursor-pointer transition-colors flex items-center gap-1.5">
                <span>💬</span> Messages
              </div>
              <div className="px-3 py-1 hover:text-neutral-900 dark:hover:text-white cursor-pointer transition-colors flex items-center gap-1.5">
                <span>⚡</span> Webhooks
              </div>
            </div>

            {/* Address Bar */}
            <div className="hidden md:flex items-center gap-1 px-3 py-1 bg-white dark:bg-neutral-900/90 rounded-md border border-neutral-200/70 dark:border-neutral-700 text-[11px] text-neutral-500 dark:text-neutral-400 font-mono">
              <span className="text-emerald-500">🔒</span>
              <span>app.rajdoot.wtf/analytics/funnels</span>
            </div>
          </div>

          {/* Interior Dashboard Mockup */}
          <div className="relative bg-[#FAFAFA] dark:bg-neutral-950 p-6 md:p-8 min-h-[360px] flex flex-col justify-between">
            
            {/* Top Sub-header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-neutral-200/70 dark:border-neutral-800">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">OTP & Message Delivery Funnels</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Production Routing · Real-time pipeline</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300">
                <span className="px-2.5 py-1 rounded bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-medium">Aug 01 — Aug 31</span>
              </div>
            </div>

            {/* Metric Counter Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 my-5">
              <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-neutral-200/70 dark:border-neutral-800">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block mb-1">Dispatched</span>
                <span className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">9,318</span>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-neutral-200/70 dark:border-neutral-800">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block mb-1">Carrier Sent</span>
                <span className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">9,298</span>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-neutral-200/70 dark:border-neutral-800">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block mb-1">Delivered</span>
                <span className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">9,264</span>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-neutral-200/70 dark:border-neutral-800">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block mb-1">Delivery Rate</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-bold text-[#EA580C]">99.4%</span>
                  <span className="text-xs text-emerald-600 font-semibold">↑ 0.8%</span>
                </div>
              </div>
            </div>

            {/* Funnel Progress Bars */}
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-5 border border-neutral-200/70 dark:border-neutral-800 space-y-3.5">
              <div>
                <div className="flex justify-between text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  <span>/api/v1/message/send (API Ingestion)</span>
                  <span className="font-mono">9,318 · 100%</span>
                </div>
                <div className="w-full h-2.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-neutral-300 dark:bg-neutral-600 rounded-full w-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  <span>Carrier Dynamic Routing & Handoff</span>
                  <span className="font-mono">9,298 · 99.8%</span>
                </div>
                <div className="w-full h-2.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-[#F4A261] rounded-full w-[99.8%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  <span>Handset Verified & Delivery Receipt</span>
                  <span className="font-mono">9,264 · 99.4%</span>
                </div>
                <div className="w-full h-2.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-[#EA580C] rounded-full w-[99.4%]" />
                </div>
              </div>
            </div>

            {/* Centered Floating Play Button Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto bg-neutral-950/15 backdrop-blur-[2px] rounded-b-2xl md:rounded-b-3xl">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 rounded-full bg-[#EA580C] hover:bg-[#D4703E] text-white flex items-center justify-center shadow-xl shadow-[#EA580C]/40 cursor-pointer transition-transform"
                aria-label="Watch demo"
              >
                <PlayIcon size={28} className="translate-x-0.5 text-white" />
              </motion.button>
              <div className="mt-3 px-4 py-1.5 bg-neutral-900/90 backdrop-blur-md text-white rounded-full text-xs font-medium shadow-md">
                Watch a test go from click to verified delivery · 60s
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Social Proof Section Below the Preview */}
      <motion.div
        className="w-full max-w-5xl mt-14 pt-8 border-t border-neutral-200/70 dark:border-neutral-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="max-w-md">
          <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-1">
            Trusted by teams delivering critical notifications
          </h4>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
            APIs tied to real carrier delivery — not the delayed rates or opaque metrics your old provider reported.
          </p>
          <Link to="/features" className="text-xs text-[#EA580C] hover:underline font-medium inline-block mt-2">
            Read customer stories →
          </Link>
        </div>

        {/* Brand/Partner Badges */}
        <div className="flex flex-wrap items-center gap-8 opacity-75 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-1.5 font-bold text-sm tracking-tight text-neutral-800 dark:text-neutral-200">
            <span className="text-[#EA580C]">✦</span> Reflow
          </div>
          <div className="flex items-center gap-1.5 font-bold text-sm tracking-tight text-neutral-800 dark:text-neutral-200">
            <span className="w-3.5 h-3.5 rounded bg-neutral-800 dark:bg-white inline-block"></span> UI Collective
          </div>
          <div className="flex items-center gap-1.5 font-bold text-sm tracking-tight text-neutral-800 dark:text-neutral-200">
            <span className="text-[#EA580C]">▲</span> Makr
          </div>
          <div className="flex items-center gap-1.5 font-bold text-sm tracking-tight text-neutral-800 dark:text-neutral-200">
            <span className="font-mono text-xs font-semibold">Webflow Digital</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
