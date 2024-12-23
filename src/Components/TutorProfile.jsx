import React from 'react';

const TutorProfile = ({ tutor }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <img
        src={tutor.avatar || 'https://via.placeholder.com/150'}
        alt="Tutor Avatar"
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-center text-2xl font-bold mt-4">{tutor.name}</h2>
      <p className="text-center text-gray-600">{tutor.qualifications}</p>
      <p className="text-center text-gray-800 mt-2">
        Subjects: {tutor.subjects.join(', ')}
      </p>
      <p className="text-center text-gray-800 mt-2">Rate: ${tutor.rate}/hour</p>
      <p className="text-center text-yellow-500 mt-2">
        ⭐ {tutor.rating} / 5 ({tutor.reviews.length} reviews)
      </p>
    </div>
  );
};

export default TutorProfile;
