import React from "react";
import { Link } from "react-router-dom";
import CourseDetail from './../pages/CourseDetails';
import TutorList from './TutorList';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token and userId from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/login');
  };
  return (
    <nav className="bg-gray-950 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className="text-2xl font-bold">
          LMS
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/Tutors" className="hover:underline">
              Find Tutors
            </Link>
          </li>
          <li>
            <Link to="/lesson" className="hover:underline">
              Lessons
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
        </ul>
        <div>
          <Link
            to="/login"
            className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-600"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="ml-2 bg-green-500 py-2 px-4 rounded hover:bg-green-600"
          >
            Register
          </Link>
          <Link
            to="/lesson"
            className="ml-2 bg-green-500 py-2 px-4 rounded hover:bg-green-600"
          >
            lesson
          </Link>
          <Link
            to="/course"
            className="ml-2 bg-green-500 py-2 px-4 rounded hover:bg-green-600"
          >
            CourseList
          </Link>
          <Link
            to="/tutorslist"
            className="ml-2 bg-green-500 py-2 px-4 rounded hover:bg-green-600"
          >
            TutorList
          </Link>
          <button
      onClick={handleLogout}
      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
    >
      Logout
    </button>
          {/* <Link
            to={`/tutors/${tutor.id}`}
            className="ml-2 bg-green-500 py-2 px-4 rounded hover:bg-green-600"
          >
            Profile
          </Link> */}
          {userId && (
            <Link
              to={`/tutors/${userId}`}
              className="ml-2 bg-green-500 py-2 px-4 rounded hover:bg-green-600"
            >
              Profile
            </Link>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
