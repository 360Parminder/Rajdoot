import { useState } from 'react';
import { useRazorpay } from 'react-razorpay';
import useApi from './useApi';
import { useAuth } from './useAuth';
import useMessageCard from './useMessageCard';
import { useNavigate } from 'react-router-dom';

export const usePayment = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { Razorpay } = useRazorpay();
  const { post, loading: apiLoading, error: apiError } = useApi();
  const {user}=useAuth();
  const { showMessage } = useMessageCard();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const initiatePayment = async (plan) => {
    try {
      setLoading(true);
      setError(null);

      // Create order on backend
      const orderResponse = await post('/payments', {
        amount: plan.numericPrice, // Convert to paise
        currency: "INR",
        planId: plan._id
      });
      console.log(orderResponse.data.data);
      

      const orderData = orderResponse.data.data;


      // Initialize Razorpay
      const options = {
        key:"rzp_test_qHVcRz55QfXZMI",
        amount: orderData.amount/100, // Amount in INR
        currency: "INR",
        name: "Rajdoot",
        description: `Subscription for ${plan.name} Plan`,
        order_id: orderData.orderId,
        receipt: orderData.receiptId,
        prefill: {
          name: user.name,
          email: user.email,
          contact: '',
        },
        handler: async (response) => {
          try {
            // Verify payment
            const verifyResponse = await post('/payments/verify', {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature
            });
            console.log(verifyResponse.data);
            if (verifyResponse.data.status === 'success') {
              // Update subscription
              await post('/subscriptions/renew', {
               plan
              });
              setPaymentSuccess(true);
              showMessage('Payment successful', 'success');
              navigate('/dashboard');
              return { success: true, response };
            } else {
              setError('Payment verification failed');
              showMessage('Payment verification failed', 'error');
              navigate('/dashboard');
              throw new Error('Payment verification failed');
            }
          } catch (error) {
            setError(error.message || 'Payment verification failed');
            return { success: false, error: error.message };
          }
        },
        prefill: {
          name: user.name, // You can get this from your auth context
          email: user.email, // You can get this from your auth context
          // contact: , // You can get this from your auth context
        },
        theme: {
          color: "#F37254",
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
          }
        }
      };

      const razorpayInstance = new Razorpay(options);
      razorpayInstance.open();

      return { success: true };
    } catch (error) {
      setError(error.message || 'Payment initialization failed');
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  return {
    initiatePayment,
    loading: loading || apiLoading,
    error: error || apiError
  };
}; 