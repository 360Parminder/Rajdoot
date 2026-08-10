import { useState, useEffect, useCallback } from 'react';
import {
  getAnalyticsOverview,
  getMessagesTimeData,
  getCallsTimeData,
  getErrorBreakdown,
  getCostBreakdown,
  getRecentFailedMessages,
  getRecentFailedCalls,
  getTopNumbers,
  getActiveAlerts,
  fallbackAnalytics
} from '../api/analyticsApi';

export const useAnalytics = (timeRange = '24h', service = 'all') => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    overview: fallbackAnalytics.overview,
    messagesTimeData: fallbackAnalytics.messagesTimeData,
    callsTimeData: fallbackAnalytics.callsTimeData,
    topErrorCodesData: fallbackAnalytics.topErrorCodesData,
    costBreakdownData: fallbackAnalytics.costBreakdownData,
    recentFailedMessages: fallbackAnalytics.recentFailedMessages,
    recentLowQualityCalls: fallbackAnalytics.recentLowQualityCalls,
    topPhoneNumbers: fallbackAnalytics.topPhoneNumbers,
    activeAlerts: fallbackAnalytics.activeAlerts
  });

  const fetchAllAnalytics = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = { timeRange, service };
      
      const [
        overview,
        messagesTimeData,
        callsTimeData,
        topErrorCodesData,
        costBreakdownData,
        recentFailedMessages,
        recentLowQualityCalls,
        topPhoneNumbers,
        activeAlerts
      ] = await Promise.all([
        getAnalyticsOverview(params),
        getMessagesTimeData(params),
        getCallsTimeData(params),
        getErrorBreakdown(params),
        getCostBreakdown(params),
        getRecentFailedMessages(),
        getRecentFailedCalls(),
        getTopNumbers(),
        getActiveAlerts()
      ]);

      setData({
        overview: overview || fallbackAnalytics.overview,
        messagesTimeData: Array.isArray(messagesTimeData) ? messagesTimeData : fallbackAnalytics.messagesTimeData,
        callsTimeData: Array.isArray(callsTimeData) ? callsTimeData : fallbackAnalytics.callsTimeData,
        topErrorCodesData: Array.isArray(topErrorCodesData) ? topErrorCodesData : fallbackAnalytics.topErrorCodesData,
        costBreakdownData: Array.isArray(costBreakdownData) ? costBreakdownData : fallbackAnalytics.costBreakdownData,
        recentFailedMessages: Array.isArray(recentFailedMessages) ? recentFailedMessages : fallbackAnalytics.recentFailedMessages,
        recentLowQualityCalls: Array.isArray(recentLowQualityCalls) ? recentLowQualityCalls : fallbackAnalytics.recentLowQualityCalls,
        topPhoneNumbers: Array.isArray(topPhoneNumbers) ? topPhoneNumbers : fallbackAnalytics.topPhoneNumbers,
        activeAlerts: Array.isArray(activeAlerts) ? activeAlerts : fallbackAnalytics.activeAlerts
      });
    } catch (err) {
      console.error('Error fetching analytics API data:', err);
      setError(err.message || 'Failed to load analytics data');
    } finally {
      setLoading(false);
    }
  }, [timeRange, service]);

  useEffect(() => {
    fetchAllAnalytics();
  }, [fetchAllAnalytics]);

  return {
    analyticsData: data,
    loading,
    error,
    refetch: fetchAllAnalytics
  };
};

export default useAnalytics;
