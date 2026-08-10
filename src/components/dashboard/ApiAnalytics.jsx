import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Send,
  CheckCircle2,
  Clock,
  CreditCard,
  AlertTriangle,
  XCircle,
  PhoneCall,
  RefreshCw,
  Download,
  Filter,
  ShieldCheck,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Info,
  Terminal,
  User
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// Mock Data for Analytics
const messagesTimeData = [
  { time: '00:00', delivered: 4200, failed: 85, queued: 120 },
  { time: '03:00', delivered: 2800, failed: 45, queued: 90 },
  { time: '06:00', delivered: 5900, failed: 110, queued: 210 },
  { time: '09:00', delivered: 14200, failed: 230, queued: 450 },
  { time: '12:00', delivered: 18900, failed: 310, queued: 520 },
  { time: '15:00', delivered: 16400, failed: 190, queued: 380 },
  { time: '18:00', delivered: 15100, failed: 210, queued: 310 },
  { time: '21:00', delivered: 9800, failed: 140, queued: 180 },
];

const callsTimeData = [
  { time: '00:00', inboundConnected: 1200, outboundConnected: 1800, inboundFailed: 40, outboundFailed: 65 },
  { time: '03:00', inboundConnected: 800, outboundConnected: 1100, inboundFailed: 25, outboundFailed: 35 },
  { time: '06:00', inboundConnected: 2100, outboundConnected: 3400, inboundFailed: 50, outboundFailed: 80 },
  { time: '09:00', inboundConnected: 5400, outboundConnected: 8900, inboundFailed: 110, outboundFailed: 160 },
  { time: '12:00', inboundConnected: 6800, outboundConnected: 9800, inboundFailed: 130, outboundFailed: 190 },
  { time: '15:00', inboundConnected: 6100, outboundConnected: 8700, inboundFailed: 95, outboundFailed: 145 },
  { time: '18:00', inboundConnected: 4800, outboundConnected: 7200, inboundFailed: 80, outboundFailed: 110 },
  { time: '21:00', inboundConnected: 3100, outboundConnected: 4500, inboundFailed: 55, outboundFailed: 75 },
];

const topErrorCodesData = [
  { code: 'ERR_404_INVALID_NUMBER', count: 540, description: 'Number invalid or unallocated' },
  { code: 'ERR_429_RATE_LIMIT', count: 320, description: 'Exceeded API key rate limit' },
  { code: 'ERR_502_CARRIER_TIMEOUT', count: 210, description: 'Upstream carrier timeout' },
  { code: 'ERR_403_BLOCKED_BY_USER', count: 145, description: 'Recipient blocked sender' },
  { code: 'ERR_500_SMS_GATEWAY', count: 95, description: 'Internal gateway error' },
];

const costBreakdownData = [
  { subaccount: 'Production-Main', smsCost: 450, voiceCost: 320, otpCost: 280, whatsappCost: 150 },
  { subaccount: 'Auth-Service', smsCost: 120, voiceCost: 40, otpCost: 510, whatsappCost: 90 },
  { subaccount: 'Staging-Test', smsCost: 35, voiceCost: 20, otpCost: 45, whatsappCost: 15 },
  { subaccount: 'Marketing-App', smsCost: 290, voiceCost: 80, otpCost: 60, whatsappCost: 210 },
];

const carrierHealthData = [
  { name: 'Jio India (+91)', deliverability: 99.4, color: '#f97316' },
  { name: 'Airtel India (+91)', deliverability: 98.9, color: '#fb923c' },
  { name: 'AT&T US (+1)', deliverability: 98.5, color: '#fdba74' },
  { name: 'Vodafone UK (+44)', deliverability: 97.8, color: '#ea580c' },
];

const recentFailedMessages = [
  { id: 'msg_884920a1', number: '+91 98765 43210', errorCode: 'ERR_404_INVALID_NUMBER', carrier: 'Jio', timestamp: '2 mins ago', status: 'Failed' },
  { id: 'msg_773194b2', number: '+1 415 555 0199', errorCode: 'ERR_429_RATE_LIMIT', carrier: 'AT&T', timestamp: '6 mins ago', status: 'Failed' },
  { id: 'msg_662019c3', number: '+91 91234 56789', errorCode: 'ERR_502_CARRIER_TIMEOUT', carrier: 'Airtel', timestamp: '14 mins ago', status: 'Failed' },
  { id: 'msg_551940d4', number: '+44 7700 900077', errorCode: 'ERR_403_BLOCKED_BY_USER', carrier: 'Vodafone', timestamp: '22 mins ago', status: 'Failed' },
];

const recentLowQualityCalls = [
  { sid: 'CA883901ab', number: '+91 99887 76655', pdd: '1.4s', mos: '2.1 / 5.0', reason: 'High Jitter & Packet Loss', timestamp: '4 mins ago' },
  { sid: 'CA772810bc', number: '+1 212 555 0148', pdd: '3.8s', mos: '2.8 / 5.0', reason: 'High Post Dial Delay', timestamp: '12 mins ago' },
  { sid: 'CA661709cd', number: '+91 98111 22334', pdd: '0.9s', mos: '3.0 / 5.0', reason: 'One-Way Audio Delay', timestamp: '28 mins ago' },
];

const topPhoneNumbers = [
  { number: '+91 94614 868xx', country: 'India 🇮🇳', volume: '24,510', calls: '3,840', rate: '99.4%', cost: '$310.40' },
  { number: '+91 87791 12xxx', country: 'India 🇮🇳', volume: '18,920', calls: '2,910', rate: '99.1%', cost: '$245.80' },
  { number: '+1 415 890 xxxx', country: 'USA 🇺🇸', volume: '12,400', calls: '4,150', rate: '98.5%', cost: '$412.00' },
  { number: '+44 7911 12xxxx', country: 'UK 🇬🇧', volume: '8,750', calls: '1,820', rate: '97.9%', cost: '$189.50' },
];

const activeAlerts = [
  { id: 'alt_01', level: 'Warning', component: 'OTP Gateway', message: 'Elevated rate limiting (ERR_429) detected on subaccount Auth-Service', time: '5 mins ago', color: 'text-amber-500 bg-amber-500/10 border-amber-500/30' },
  { id: 'alt_02', level: 'Critical', component: 'US Carrier Route', message: 'AT&T Post Dial Delay increased by 450ms over last 30 minutes', time: '18 mins ago', color: 'text-red-500 bg-red-500/10 border-red-500/30' },
  { id: 'alt_03', level: 'Notice', component: 'Voice Engine', message: 'MOS score optimal across 98.4% of active voice sessions', time: '42 mins ago', color: 'text-blue-500 bg-blue-500/10 border-blue-500/30' },
];

const ApiAnalytics = () => {
  const [timeRange, setTimeRange] = useState('24h');
  const [selectedService, setSelectedService] = useState('all');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <div className="p-6 bg-slate-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 min-h-screen rounded-2xl space-y-8">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-8 h-8 text-orange-500" />
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
              API Analytics & Deliverability
            </h1>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 mt-1 max-w-2xl">
            Real-time monitoring of message deliverability, call connectivity, latency, error codes, and cost breakdown.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Time Range Selector */}
          <div className="flex items-center bg-slate-200/80 dark:bg-neutral-800 p-1 rounded-xl border border-neutral-300 dark:border-neutral-700">
            {['24h', '7d', '30d'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  timeRange === range
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                }`}
              >
                {range.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Service Selector */}
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="bg-slate-200/80 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-semibold rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
          >
            <option value="all">All Services</option>
            <option value="sms">SMS API</option>
            <option value="voice">Voice API</option>
            <option value="otp">OTP API</option>
          </select>

          {/* Refresh Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRefresh}
            className="flex items-center gap-1.5 p-2 bg-slate-200/80 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-orange-500 rounded-xl transition-all"
            title="Refresh analytics data"
          >
            <RefreshCw size={18} className={isRefreshing ? 'animate-spin text-orange-500' : ''} />
          </motion.button>
        </div>
      </div>

      {/* TOP ROW: 6 Metric Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {/* Card 1: Messages Sent */}
        <motion.div
          whileHover={{ y: -3 }}
          className="bg-slate-100/80 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700/80 rounded-2xl p-4 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Messages Sent (24h)</span>
            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
              <Send size={18} />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-extrabold text-neutral-900 dark:text-neutral-100">124,850</span>
            <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
              <TrendingUp size={14} />
              <span>+12.4% vs prev 24h</span>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Messages Delivered */}
        <motion.div
          whileHover={{ y: -3 }}
          className="bg-slate-100/80 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700/80 rounded-2xl p-4 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Delivery Rate</span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              <CheckCircle2 size={18} />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-extrabold text-neutral-900 dark:text-neutral-100">98.6%</span>
            <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
              <TrendingUp size={14} />
              <span>+0.8% deliverability</span>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Calls Connected */}
        <motion.div
          whileHover={{ y: -3 }}
          className="bg-slate-100/80 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700/80 rounded-2xl p-4 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Calls Connected</span>
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
              <PhoneCall size={18} />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-extrabold text-neutral-900 dark:text-neutral-100">45,210</span>
            <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
              <TrendingUp size={14} />
              <span>+8.1% connection rate</span>
            </div>
          </div>
        </motion.div>

        {/* Card 4: Avg Call Duration */}
        <motion.div
          whileHover={{ y: -3 }}
          className="bg-slate-100/80 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700/80 rounded-2xl p-4 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Avg Call Duration</span>
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20">
              <Clock size={18} />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-extrabold text-neutral-900 dark:text-neutral-100">2m 45s</span>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium mt-1">
              MOS Avg: <span className="font-semibold text-emerald-600 dark:text-emerald-400">4.35 / 5.0</span>
            </div>
          </div>
        </motion.div>

        {/* Card 5: Total Spend (7d) */}
        <motion.div
          whileHover={{ y: -3 }}
          className="bg-slate-100/80 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700/80 rounded-2xl p-4 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Total Spend (7d)</span>
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20">
              <CreditCard size={18} />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-extrabold text-neutral-900 dark:text-neutral-100">$1,482.50</span>
            <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
              Within monthly budget
            </div>
          </div>
        </motion.div>

        {/* Card 6: Deliverability Health Score */}
        <motion.div
          whileHover={{ y: -3 }}
          className="bg-slate-100/80 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700/80 rounded-2xl p-4 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Health Score</span>
            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
              <ShieldCheck size={18} />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-extrabold text-neutral-900 dark:text-neutral-100">99.2<span className="text-sm font-normal text-neutral-500">/100</span></span>
            <div className="flex items-center gap-1 text-xs text-orange-600 dark:text-orange-400 font-semibold mt-1">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Optimal Routing</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* MIDDLE ROW: 4 Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 1: Messages Over Time by Status */}
        <div className="bg-slate-100/80 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700/80 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                <Send className="w-5 h-5 text-orange-500" />
                Messages Over Time
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Breakdown by Delivered, Failed, and Queued status</p>
            </div>
            <span className="text-xs font-medium px-2.5 py-1 bg-orange-500/10 text-orange-500 border border-orange-500/20 rounded-full">
              24 Hour View
            </span>
          </div>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={messagesTimeData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorDelivered" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0.0}/>
                  </linearGradient>
                  <linearGradient id="colorFailed" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.0}/>
                  </linearGradient>
                  <linearGradient id="colorQueued" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#eab308" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#eab308" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                <XAxis dataKey="time" stroke="#888888" fontSize={12} tickLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(24, 24, 27, 0.95)',
                    borderColor: '#3f3f46',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px'
                  }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }} />
                <Area type="monotone" dataKey="delivered" name="Delivered" stroke="#f97316" strokeWidth={2} fillOpacity={1} fill="url(#colorDelivered)" />
                <Area type="monotone" dataKey="failed" name="Failed" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorFailed)" />
                <Area type="monotone" dataKey="queued" name="Queued" stroke="#eab308" strokeWidth={2} fillOpacity={1} fill="url(#colorQueued)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Calls Over Time by Direction & Status */}
        <div className="bg-slate-100/80 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700/80 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                <PhoneCall className="w-5 h-5 text-amber-500" />
                Calls Over Time (Inbound vs Outbound)
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Call connection status by direction</p>
            </div>
            <span className="text-xs font-medium px-2.5 py-1 bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-full">
              Voice Metrics
            </span>
          </div>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={callsTimeData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                <XAxis dataKey="time" stroke="#888888" fontSize={12} tickLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(24, 24, 27, 0.95)',
                    borderColor: '#3f3f46',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px'
                  }}
                />
                <Legend iconType="square" wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }} />
                <Bar dataKey="inboundConnected" name="Inbound Connected" fill="#f97316" radius={[4, 4, 0, 0]} />
                <Bar dataKey="outboundConnected" name="Outbound Connected" fill="#fb923c" radius={[4, 4, 0, 0]} />
                <Bar dataKey="inboundFailed" name="Inbound Failed" fill="#ef4444" radius={[4, 4, 0, 0]} />
                <Bar dataKey="outboundFailed" name="Outbound Failed" fill="#dc2626" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 3: Delivery & Top Error Codes */}
        <div className="bg-slate-100/80 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700/80 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                Delivery & Top Error Codes
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Most frequent API error responses in last 24h</p>
            </div>
          </div>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={topErrorCodesData} margin={{ top: 5, right: 20, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                <XAxis type="number" stroke="#888888" fontSize={12} tickLine={false} />
                <YAxis dataKey="code" type="category" stroke="#888888" fontSize={11} tickLine={false} width={130} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(24, 24, 27, 0.95)',
                    borderColor: '#3f3f46',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px'
                  }}
                  formatter={(value, name, props) => [`${value} occurrences`, props.payload.description]}
                />
                <Bar dataKey="count" name="Occurrences" fill="#ea580c" radius={[0, 6, 6, 0]}>
                  {topErrorCodesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#ef4444' : '#f97316'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 4: Cost Breakdown by Subaccount & Product */}
        <div className="bg-slate-100/80 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700/80 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-orange-500" />
                Cost Breakdown by Subaccount ($)
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Stacked cost allocation across services</p>
            </div>
          </div>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={costBreakdownData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                <XAxis dataKey="subaccount" stroke="#888888" fontSize={11} tickLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(24, 24, 27, 0.95)',
                    borderColor: '#3f3f46',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px'
                  }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }} />
                <Bar dataKey="smsCost" name="SMS API ($)" stackId="a" fill="#f97316" />
                <Bar dataKey="voiceCost" name="Voice API ($)" stackId="a" fill="#fb923c" />
                <Bar dataKey="otpCost" name="OTP API ($)" stackId="a" fill="#fdba74" />
                <Bar dataKey="whatsappCost" name="WhatsApp ($)" stackId="a" fill="#c2410c" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW: 4 Tables & Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Table 1: Recent Failed Messages */}
        <div className="bg-slate-100/80 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700/80 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-500" />
              Recent Failed Messages
            </h3>
            <span className="text-xs font-semibold text-red-500 bg-red-500/10 px-2.5 py-1 rounded-full border border-red-500/20">
              Live Log
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-200/70 dark:bg-neutral-700/40 text-neutral-700 dark:text-neutral-300 uppercase tracking-wider font-semibold">
                <tr>
                  <th className="py-2.5 px-3 rounded-l-lg">Recipient</th>
                  <th className="py-2.5 px-3">Error Code</th>
                  <th className="py-2.5 px-3">Carrier</th>
                  <th className="py-2.5 px-3 rounded-r-lg">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700/50">
                {recentFailedMessages.map((msg) => (
                  <tr key={msg.id} className="hover:bg-slate-200/50 dark:hover:bg-neutral-700/30 transition-colors">
                    <td className="py-3 px-3 font-mono font-medium text-neutral-900 dark:text-neutral-100">{msg.number}</td>
                    <td className="py-3 px-3">
                      <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-600 dark:text-red-400 font-mono font-semibold border border-red-500/20">
                        {msg.errorCode}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-neutral-600 dark:text-neutral-400">{msg.carrier}</td>
                    <td className="py-3 px-3 text-neutral-500 dark:text-neutral-400">{msg.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2: Recent Low-Quality / Failed Calls */}
        <div className="bg-slate-100/80 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700/80 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-amber-500" />
              Recent Failed / Low-Quality Calls
            </h3>
            <span className="text-xs font-semibold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
              PDD & MOS Monitor
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-200/70 dark:bg-neutral-700/40 text-neutral-700 dark:text-neutral-300 uppercase tracking-wider font-semibold">
                <tr>
                  <th className="py-2.5 px-3 rounded-l-lg">Number</th>
                  <th className="py-2.5 px-3">PDD</th>
                  <th className="py-2.5 px-3">MOS Score</th>
                  <th className="py-2.5 px-3 rounded-r-lg">Issue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700/50">
                {recentLowQualityCalls.map((call) => (
                  <tr key={call.sid} className="hover:bg-slate-200/50 dark:hover:bg-neutral-700/30 transition-colors">
                    <td className="py-3 px-3 font-mono font-medium text-neutral-900 dark:text-neutral-100">{call.number}</td>
                    <td className="py-3 px-3 font-mono text-amber-600 dark:text-amber-400 font-semibold">{call.pdd}</td>
                    <td className="py-3 px-3 font-medium text-neutral-700 dark:text-neutral-300">{call.mos}</td>
                    <td className="py-3 px-3 text-neutral-500 dark:text-neutral-400">{call.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 3: Top Phone Numbers by Volume & Cost */}
        <div className="bg-slate-100/80 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700/80 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-orange-500" />
              Top Phone Numbers by Volume & Cost
            </h3>
            <span className="text-xs font-semibold text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/20">
              Usage Leaderboard
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-200/70 dark:bg-neutral-700/40 text-neutral-700 dark:text-neutral-300 uppercase tracking-wider font-semibold">
                <tr>
                  <th className="py-2.5 px-3 rounded-l-lg">Sender Number</th>
                  <th className="py-2.5 px-3">Country</th>
                  <th className="py-2.5 px-3">Msg Volume</th>
                  <th className="py-2.5 px-3">Deliverability</th>
                  <th className="py-2.5 px-3 rounded-r-lg">Total Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700/50">
                {topPhoneNumbers.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-200/50 dark:hover:bg-neutral-700/30 transition-colors">
                    <td className="py-3 px-3 font-mono font-medium text-neutral-900 dark:text-neutral-100">{item.number}</td>
                    <td className="py-3 px-3 text-neutral-700 dark:text-neutral-300">{item.country}</td>
                    <td className="py-3 px-3 font-semibold text-neutral-800 dark:text-neutral-200">{item.volume}</td>
                    <td className="py-3 px-3 text-emerald-600 dark:text-emerald-400 font-semibold">{item.rate}</td>
                    <td className="py-3 px-3 font-mono font-bold text-orange-600 dark:text-orange-400">{item.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* List 4: Active Alerts from Debugger/Monitor */}
        <div className="bg-slate-100/80 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700/80 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-orange-500" />
              Active Debugger & Monitor Alerts
            </h3>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              Live Engine
            </span>
          </div>

          <div className="space-y-3">
            {activeAlerts.map((alert) => (
              <div
                key={alert.id}
                className="p-3.5 rounded-xl border bg-slate-50 dark:bg-neutral-800/80 flex items-start gap-3 transition-all hover:border-neutral-400 dark:hover:border-neutral-600"
              >
                <div className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider border ${alert.color}`}>
                  {alert.level}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-100">{alert.component}</h4>
                    <span className="text-[11px] text-neutral-500 dark:text-neutral-400">{alert.time}</span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">{alert.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiAnalytics;
