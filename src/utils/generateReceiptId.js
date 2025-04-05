import axios from "axios";

// Function to generate a unique receipt ID using timestamp and random digits
export const generateReceiptId = () => {
  const timestamp = Date.now().toString();
  const randomDigits = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  const receiptId = (timestamp + randomDigits).slice(-10); // Ensuring the receiptId is 10 characters long
  return receiptId;
};

// Function to make an order ID by sending a request to Razorpay Orders API
export const makeOrderID = async (amount) => {
  console.log('Amount:', amount);
  const receiptId = generateReceiptId();
  console.log('Receipt ID:', receiptId);
  
  try {
    const response = await axios.post(
      'https://api.razorpay.com/v1/orders',
      {
        "amount": amount * 100, // Amount in subunits (e.g., 10000 paise for INR 100)
        "currency": "INR",
        "receipt": receiptId,
      },
      {
        auth: {
          username: "rzp_test_qHVcRz55QfXZMI", // Replace with your Razorpay Test Key
          password: "ifDKalOwn5MuUXs93mEUqaDj", // Replace with your Razorpay Test Secret
        },
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // Return the receipt ID and the order ID returned by the Razorpay API
    console.log('Order created:', response.data);
    
    return {orderId: response.data.id };
  } catch (error) {
    console.log(error);
    
    console.error('Error creating order:', error.response ? error.response.data : error.message);
    return { error: "Failed to create the order." };
  }
};