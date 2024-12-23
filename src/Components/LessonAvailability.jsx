import React from 'react';

const LessonAvailability = ({ availability, onBookLesson }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Available Slots</h3>
      <ul>
        {availability.map((slot, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b">
            <span>{slot}</span>
            <button
              onClick={() => onBookLesson(slot)}
              className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700"
            >
              Book
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonAvailability;
