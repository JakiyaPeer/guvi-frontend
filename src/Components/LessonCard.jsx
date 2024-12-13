import React from "react";

const LessonCard = ({ lesson }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <img
        src={lesson.image}
        alt={lesson.title}
        className="w-full h-32 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{lesson.title}</h2>
        <p className="text-gray-600 mb-2">Tutor: {lesson.tutorName}</p>
        <p className="text-gray-600 mb-2">Price: ₹{lesson.price}</p>
        <p className="text-sm text-gray-500 mb-4">{lesson.description}</p>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default LessonCard;
