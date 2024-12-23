import React from 'react';

const Reviews = ({ reviews }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
      <h3 className="text-xl font-bold mb-4">Student Reviews</h3>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="border-b pb-4 mb-4">
            <p className="text-gray-800">{review.comment}</p>
            <p className="text-yellow-500">⭐ {review.rating}</p>
            <p className="text-gray-500 text-sm">- {review.studentName}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No reviews yet.</p>
      )}
    </div>
  );
};

export default Reviews;
