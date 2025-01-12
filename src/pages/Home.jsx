import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-600">
      <div className="container mx-auto p-6 flex">
        {/* Text Section */}
        <div className="w-1/2 flex flex-col justify-center ">
          <h1 className="text-4xl font-bold mb-4">Welcome to LMS</h1>
          <p className="text-lg mb-6 ">
            Connecting students with tutors for seamless online learning.
          </p>
          <div className="space-x-4">
            <Link to="/register">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Register
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Login
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/2">
          <img 
            src="https://media.istockphoto.com/id/1451316016/photo/lms-learning-management-system-for-lesson-and-online-education-course-application-study-e.jpg?s=612x612&w=0&k=20&c=fRH0AanVP3IkjZtYNwJiyALkAvN3plLtrcPd1L2MrJo=" 
            alt="Learning illustration" 
            className="rounded shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
