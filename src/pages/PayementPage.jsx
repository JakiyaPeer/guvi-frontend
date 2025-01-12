import React from 'react';
import axios from 'axios';

const PaymentPage = ({ lessonId, amount }) => {
  const handlePayment = async () => {
    const orderData = {
      amount: amount * 100, // Amount in smallest currency unit (e.g., paisa for INR)
      currency: "INR",
      receipt: lessonId,
    };

    try {
      // Create order in the backend
      const { data } = await axios.post('/api/payment/orders', orderData);

      const options = {
        key: "your_razorpay_key_id", // Enter the Key ID generated from the Dashboard
        amount: data.amount,
        currency: data.currency,
        name: "LMS Payment",
        description: "Lesson Payment",
        order_id: data.id,
        handler: async (response) => {
          const paymentData = {
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          };

          // Verify the payment in the backend
          await axios.post('/api/payment/verify', paymentData);
          alert('Payment successful');
        },
        prefill: {
          email: "student@example.com", // Replace with student email
          contact: "1234567890",        // Replace with student contact
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div className="container mx-auto mt-6">
      <h1 className="text-3xl font-bold mb-4">Payment for Lesson</h1>
      <p className="text-gray-700 mb-2">Lesson ID: {lessonId}</p>
      <p className="text-gray-700 mb-4">Amount: ₹{amount}</p>
      <button
        onClick={handlePayment}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
