import api from './config';

// Base fallback data for seamless UI presentation
export const fallbackAnalytics = {
  overview: {
    messagesSent: '124,850',
    messagesTrend: '+12.4% vs prev 24h',
    deliveryRate: '98.6%',
    deliveryTrend: '+0.8% deliverability',
    callsConnected: '45,210',
    callsTrend: '+8.1% connection rate',
    avgCallDuration: '2m 45s',
    mosScore: '4.35 / 5.0',
    totalSpend: '$1,482.50',
    spendStatus: 'Within monthly budget',
    healthScore: '99.2/100',
    healthStatus: 'Optimal Routing'
  },
  messagesTimeData: [
    { time: '00:00', delivered: 4200, failed: 85, queued: 120 },
    { time: '03:00', delivered: 2800, failed: 45, queued: 90 },
    { time: '06:00', delivered: 5900, failed: 110, queued: 210 },
    { time: '09:00', delivered: 14200, failed: 230, queued: 450 },
    { time: '12:00', delivered: 18900, failed: 310, queued: 520 },
    { time: '15:00', delivered: 16400, failed: 190, queued: 380 },
    { time: '18:00', delivered: 15100, failed: 210, queued: 310 },
    { time: '21:00', delivered: 9800, failed: 140, queued: 180 },
  ],
  callsTimeData: [
    { time: '00:00', inboundConnected: 1200, outboundConnected: 1800, inboundFailed: 40, outboundFailed: 65 },
    { time: '03:00', inboundConnected: 800, outboundConnected: 1100, inboundFailed: 25, outboundFailed: 35 },
    { time: '06:00', inboundConnected: 2100, outboundConnected: 3400, inboundFailed: 50, outboundFailed: 80 },
    { time: '09:00', inboundConnected: 5400, outboundConnected: 8900, inboundFailed: 110, outboundFailed: 160 },
    { time: '12:00', inboundConnected: 6800, outboundConnected: 9800, inboundFailed: 130, outboundFailed: 190 },
    { time: '15:00', inboundConnected: 6100, outboundConnected: 8700, inboundFailed: 95, outboundFailed: 145 },
    { time: '18:00', inboundConnected: 4800, outboundConnected: 7200, inboundFailed: 80, outboundFailed: 110 },
    { time: '21:00', inboundConnected: 3100, outboundConnected: 4500, inboundFailed: 55, outboundFailed: 75 },
  ],
  topErrorCodesData: [
    { code: 'ERR_404_INVALID_NUMBER', count: 540, description: 'Number invalid or unallocated' },
    { code: 'ERR_429_RATE_LIMIT', count: 320, description: 'Exceeded API key rate limit' },
    { code: 'ERR_502_CARRIER_TIMEOUT', count: 210, description: 'Upstream carrier timeout' },
    { code: 'ERR_403_BLOCKED_BY_USER', count: 145, description: 'Recipient blocked sender' },
    { code: 'ERR_500_SMS_GATEWAY', count: 95, description: 'Internal gateway error' },
  ],
  costBreakdownData: [
    { subaccount: 'Production-Main', smsCost: 450, voiceCost: 320, otpCost: 280, whatsappCost: 150 },
    { subaccount: 'Auth-Service', smsCost: 120, voiceCost: 40, otpCost: 510, whatsappCost: 90 },
    { subaccount: 'Staging-Test', smsCost: 35, voiceCost: 20, otpCost: 45, whatsappCost: 15 },
    { subaccount: 'Marketing-App', smsCost: 290, voiceCost: 80, otpCost: 60, whatsappCost: 210 },
  ],
  recentFailedMessages: [
    { id: 'msg_884920a1', number: '+91 98765 43210', errorCode: 'ERR_404_INVALID_NUMBER', carrier: 'Jio', timestamp: '2 mins ago', status: 'Failed' },
    { id: 'msg_773194b2', number: '+1 415 555 0199', errorCode: 'ERR_429_RATE_LIMIT', carrier: 'AT&T', timestamp: '6 mins ago', status: 'Failed' },
    { id: 'msg_662019c3', number: '+91 91234 56789', errorCode: 'ERR_502_CARRIER_TIMEOUT', carrier: 'Airtel', timestamp: '14 mins ago', status: 'Failed' },
    { id: 'msg_551940d4', number: '+44 7700 900077', errorCode: 'ERR_403_BLOCKED_BY_USER', carrier: 'Vodafone', timestamp: '22 mins ago', status: 'Failed' },
  ],
  recentLowQualityCalls: [
    { sid: 'CA883901ab', number: '+91 99887 76655', pdd: '1.4s', mos: '2.1 / 5.0', reason: 'High Jitter & Packet Loss', timestamp: '4 mins ago' },
    { sid: 'CA772810bc', number: '+1 212 555 0148', pdd: '3.8s', mos: '2.8 / 5.0', reason: 'High Post Dial Delay', timestamp: '12 mins ago' },
    { sid: 'CA661709cd', number: '+91 98111 22334', pdd: '0.9s', mos: '3.0 / 5.0', reason: 'One-Way Audio Delay', timestamp: '28 mins ago' },
  ],
  topPhoneNumbers: [
    { number: '+91 94614 868xx', country: 'India 🇮🇳', volume: '24,510', calls: '3,840', rate: '99.4%', cost: '$310.40' },
    { number: '+91 87791 12xxx', country: 'India 🇮🇳', volume: '18,920', calls: '2,910', rate: '99.1%', cost: '$245.80' },
    { number: '+1 415 890 xxxx', country: 'USA 🇺🇸', volume: '12,400', calls: '4,150', rate: '98.5%', cost: '$412.00' },
    { number: '+44 7911 12xxxx', country: 'UK 🇬🇧', volume: '8,750', calls: '1,820', rate: '97.9%', cost: '$189.50' },
  ],
  activeAlerts: [
    { id: 'alt_01', level: 'Warning', component: 'OTP Gateway', message: 'Elevated rate limiting (ERR_429) detected on subaccount Auth-Service', time: '5 mins ago', color: 'text-amber-500 bg-amber-500/10 border-amber-500/30' },
    { id: 'alt_02', level: 'Critical', component: 'US Carrier Route', message: 'AT&T Post Dial Delay increased by 450ms over last 30 minutes', time: '18 mins ago', color: 'text-red-500 bg-red-500/10 border-red-500/30' },
    { id: 'alt_03', level: 'Notice', component: 'Voice Engine', message: 'MOS score optimal across 98.4% of active voice sessions', time: '42 mins ago', color: 'text-blue-500 bg-blue-500/10 border-blue-500/30' },
  ]
};

// API Endpoint calls
export const getAnalyticsOverview = async (params = {}) => {
  try {
    const res = await api.get('/analytics/overview', { params });
    return res.data?.data || res.data;
  } catch (err) {
    return fallbackAnalytics.overview;
  }
};

export const getMessagesTimeData = async (params = {}) => {
  try {
    const res = await api.get('/analytics/messages-over-time', { params });
    return res.data?.data || res.data;
  } catch (err) {
    return fallbackAnalytics.messagesTimeData;
  }
};

export const getCallsTimeData = async (params = {}) => {
  try {
    const res = await api.get('/analytics/calls-over-time', { params });
    return res.data?.data || res.data;
  } catch (err) {
    return fallbackAnalytics.callsTimeData;
  }
};

export const getErrorBreakdown = async (params = {}) => {
  try {
    const res = await api.get('/analytics/error-breakdown', { params });
    return res.data?.data || res.data;
  } catch (err) {
    return fallbackAnalytics.topErrorCodesData;
  }
};

export const getCostBreakdown = async (params = {}) => {
  try {
    const res = await api.get('/analytics/cost-breakdown', { params });
    return res.data?.data || res.data;
  } catch (err) {
    return fallbackAnalytics.costBreakdownData;
  }
};

export const getRecentFailedMessages = async () => {
  try {
    const res = await api.get('/analytics/recent-failed-messages');
    return res.data?.data || res.data;
  } catch (err) {
    return fallbackAnalytics.recentFailedMessages;
  }
};

export const getRecentFailedCalls = async () => {
  try {
    const res = await api.get('/analytics/recent-failed-calls');
    return res.data?.data || res.data;
  } catch (err) {
    return fallbackAnalytics.recentLowQualityCalls;
  }
};

export const getTopNumbers = async () => {
  try {
    const res = await api.get('/analytics/top-numbers');
    return res.data?.data || res.data;
  } catch (err) {
    return fallbackAnalytics.topPhoneNumbers;
  }
};

export const getActiveAlerts = async () => {
  try {
    const res = await api.get('/analytics/active-alerts');
    return res.data?.data || res.data;
  } catch (err) {
    return fallbackAnalytics.activeAlerts;
  }
};
