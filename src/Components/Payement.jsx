import React from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const { courseId, price } = location.state || {};

  if (!courseId || !price) {
    return <div>Error: Missing course information.</div>;
  }

  const handlePayment = () => {
    // Integrate your payment gateway here
    console.log('Proceeding with payment for course', courseId, 'with price', price);
    // After payment success, navigate to a confirmation page or dashboard
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Payment for Course</h1>
      <p><strong>Course ID:</strong> {courseId}</p>
      <p><strong>Price:</strong> ${price}</p>
      {/* Add your payment gateway integration here */}
      <button 
        onClick={handlePayment}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
