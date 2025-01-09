// src/components/TutorList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TutorList = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    // Fetch tutors from the backend API
    fetch('http://localhost:5000/api/tutors/')
      .then(response => response.json())
      .then(data => setTutors(data))
      .catch(error => console.error('Error fetching tutors:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Tutors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutors.map(tutor => (
          <div key={tutor.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">{tutor.name}</h2>
            <p>Subject: {tutor.subject}</p>
            <p>Rating: {tutor.rating}</p>
            <Link to={`/tutors/${tutor.id}`} className="text-blue-500 mt-2 inline-block">
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorList;
