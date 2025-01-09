// // src/components/TutorProfile.jsx
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const TutorProfile = () => {
//   const { id } = useParams(); // Get the tutor ID from the URL
//   const [tutor, setTutor] = useState(null);

//   useEffect(() => {
//     // Fetch the specific tutor's data from the backend API
//     fetch(`/api/auth/users/${id}`)
//       .then(response => response.json())
//       .then(data => setTutor(data))
//       .catch(error => console.error('Error fetching tutor profile:', error));
//   }, [id]);

//   // if (!tutor) return <p>Loading...</p>;

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <h1 className="text-3xl font-bold mb-4">{tutor.name}</h1>
//         <p><strong>Subject:</strong> {tutor.subject}</p>
//         <p><strong>Experience:</strong> {tutor.experience} years</p>
//         <p><strong>Qualifications:</strong> {tutor.qualifications}</p>
//         <p><strong>Availability:</strong> {tutor.availability}</p>
//         <p><strong>Rating:</strong> {tutor.rating}</p>

//         <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Book a Lesson</button>
//       </div>
//     </div>
//   );
// };

// export default TutorProfile;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TutorProfile = () => {
  const { id } = useParams(); // Get the tutor ID from the URL
  const [tutor, setTutor] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Fetch the specific tutor's data from the backend API
    fetch(`http://localhost:5000/api/auth/users/${id}`)
      .then(response => response.json())
      .then(data => {
        setTutor(data);
        console.log("data",data)
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching tutor profile:', error);
        setLoading(false);
      });
  }, [id]);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (!tutor) {
  //   return <p>Error loading tutor profile.</p>;
  // }

  return (
     <div className="container mx-auto p-4">
       <div className="bg-white shadow-md rounded-lg p-6">
         <h1 className="text-3xl font-bold mb-4">{tutor.name}</h1>
         <p><strong>Subject:</strong> {tutor.subject}</p>
         <p><strong>Experience:</strong> {tutor.experience} years</p>
         <p><strong>Qualifications:</strong> {tutor.qualifications}</p>
         <p><strong>Availability:</strong> {tutor.availability}</p>
         <p><strong>Rating:</strong> {tutor.rating}</p>

        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Book a Lesson</button>
       </div>
     </div>
   
  );
};

export default TutorProfile;
