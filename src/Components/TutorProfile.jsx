import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TutorProfile = () => {
  const { id } = useParams(); // Get the tutor ID from the URL
  const [tutor, setTutor] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    // Fetch the specific tutor's data from the backend API
    const fetchTutor = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/auth/users/${id}`
          
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        setTutor(data.user);
      } catch (error) {
        console.error('Error fetching tutor profile:', error);
        setError(error.message || 'Failed to load tutor profile.');
      } finally {
        setLoading(false); // Set loading to false after fetching is complete
      }
    };

    fetchTutor();
  }, [id]);

  if (loading) {
    return <div className="container mx-auto p-4 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4 text-center text-red-500">{error}</div>;
  }

  if (!tutor) {
    return <div className="container mx-auto p-4 text-center">Tutor not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{tutor.name}</h1>
        <p><strong>Email:</strong> {tutor.email}</p>
        <p><strong>Role:</strong> {tutor.role}</p>
      </div>
    </div>
  );
};

export default TutorProfile;